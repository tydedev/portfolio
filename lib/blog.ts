import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogLocale = "en" | "it";

export type BlogPost = {
  id: string;
  locale: BlogLocale;
  slug: string;
  title: string;
  description: string;
  pullQuote?: string;
  date: string;
  published: boolean;
  image?: string;
  category?: string;
  tags?: string[];
  content: string;
  readingTime: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const LOCALES: BlogLocale[] = ["en", "it"];

function isValidLocale(locale: string): locale is BlogLocale {
  return LOCALES.includes(locale as BlogLocale);
}

function getPostFromFile(filePath: string, locale: BlogLocale): BlogPost {
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  const filename = path.basename(filePath, ".mdx");

  const post: BlogPost = {
    id: data.id,
    locale: data.locale ?? locale,
    slug: data.slug ?? filename,
    title: data.title,
    description: data.description ?? "",
    pullQuote: data.pullQuote,
    image: data.image,
    date:
      data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : typeof data.date === "string"
          ? data.date
          : "",
    published: data.published !== false,
    category: data.category,
    tags: data.tags ?? [],
    content,
    readingTime: readingTime(content).text,
  };

  if (!post.id || !post.title || !post.date) {
    throw new Error(`Missing required metadata in ${filePath}`);
  }

  if (post.locale !== locale) {
    throw new Error(
      `Locale mismatch in ${filePath}: expected "${locale}", received "${post.locale}"`,
    );
  }

  if (!post.slug) {
    throw new Error(`Missing slug in ${filePath}`);
  }

  return post;
}

function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const locale of LOCALES) {
    const localeDir = path.join(BLOG_DIR, locale);

    if (!fs.existsSync(localeDir)) {
      continue;
    }

    const files = fs
      .readdirSync(localeDir)
      .filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      const filePath = path.join(localeDir, file);

      posts.push(getPostFromFile(filePath, locale));
    }
  }

  // Ogni ID deve essere univoco all'interno della stessa lingua.
  const uniquePosts = new Set<string>();

  for (const post of posts) {
    const key = `${post.locale}:${post.id}`;

    if (uniquePosts.has(key)) {
      throw new Error(
        `Duplicate blog post ID "${post.id}" for locale "${post.locale}"`,
      );
    }

    uniquePosts.add(key);
  }

  // Gli slug devono essere univoci all'interno della stessa lingua.
  const uniqueSlugs = new Set<string>();

  for (const post of posts) {
    const key = `${post.locale}:${post.slug}`;

    if (uniqueSlugs.has(key)) {
      throw new Error(
        `Duplicate blog slug "${post.slug}" for locale "${post.locale}"`,
      );
    }

    uniqueSlugs.add(key);
  }

  return posts;
}

function getPublishedPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.published);
}

/**
 * Recupera tutti gli articoli pubblicati di una lingua.
 */
export function getBlogPosts(locale: BlogLocale): BlogPost[] {
  if (!isValidLocale(locale)) {
    return [];
  }

  return getPublishedPosts()
    .filter((post) => post.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Recupera un articolo tramite lingua e slug.
 */
export function getBlogPost(
  locale: BlogLocale,
  slug: string,
): BlogPost | undefined {
  if (!isValidLocale(locale)) {
    return undefined;
  }

  return getPublishedPosts().find(
    (post) => post.locale === locale && post.slug === slug,
  );
}

/**
 * Recupera la traduzione di un articolo tramite ID.
 */
export function getTranslatedBlogPost(
  id: string,
  locale: BlogLocale,
): BlogPost | undefined {
  if (!isValidLocale(locale)) {
    return undefined;
  }

  return getPublishedPosts().find(
    (post) => post.id === id && post.locale === locale,
  );
}

/**
 * Recupera tutte le traduzioni pubblicate di un articolo.
 */
export function getBlogTranslations(
  id: string,
): Partial<Record<BlogLocale, BlogPost>> {
  const translations: Partial<Record<BlogLocale, BlogPost>> = {};

  for (const post of getPublishedPosts()) {
    if (post.id === id) {
      translations[post.locale] = post;
    }
  }

  return translations;
}

/**
 * Mappa serializzabile degli slug tradotti, pensata per il LocaleSwitcher.
 * Chiave: `${locale}:${slug}` -> { it?: slug, en?: slug }
 */
export function getBlogSlugMap(): Record<
  string,
  Partial<Record<BlogLocale, string>>
> {
  const map: Record<string, Partial<Record<BlogLocale, string>>> = {};
  const posts = getPublishedPosts();

  for (const post of posts) {
    const translations: Partial<Record<BlogLocale, string>> = {};

    for (const other of posts) {
      if (other.id === post.id) {
        translations[other.locale] = other.slug;
      }
    }

    map[`${post.locale}:${post.slug}`] = translations;
  }

  return map;
}
