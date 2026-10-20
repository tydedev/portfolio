import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  type BlogLocale,
  getBlogPost,
  getBlogPosts,
  getBlogTranslations,
} from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { SyncTranslatedPathnames } from "@/components/SyncTranslatedPathnames";
import { getFormatter } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

function isBlogLocale(locale: string): locale is BlogLocale {
  return routing.locales.includes(locale as BlogLocale);
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getBlogPosts(locale as BlogLocale).map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isBlogLocale(locale)) {
    return {};
  }

  const post = getBlogPost(locale, slug);

  if (!post) {
    return {};
  }

  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const translations = getBlogTranslations(post.id);

  const languages: Record<string, string> = {};

  for (const [translatedLocale, translatedPost] of Object.entries(
    translations,
  )) {
    if (translatedPost) {
      languages[translatedLocale] =
        `${SITE_URL}/${translatedLocale}/blog/${translatedPost.slug}`;
    }
  }

  const imageUrl = post.image
    ? new URL(post.image, SITE_URL).toString()
    : undefined;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "Tydedev",
      locale: locale === "it" ? "it_IT" : "en_US",
      publishedTime: post.date,
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

function BlogPostJsonLd({
  post,
  locale,
  url,
}: {
  post: {
    title: string;
    description: string;
    date: string;
    image?: string;
  };
  locale: BlogLocale;
  url: string;
}) {
  const imageUrl = post.image
    ? new URL(post.image, SITE_URL).toString()
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      "@type": "Person",
      name: "Maria Basso",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Maria Basso",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isBlogLocale(locale)) {
    notFound();
  }

  const post = getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  const format = await getFormatter();

  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const translations = getBlogTranslations(post.id);

  const translatedPathnames: Partial<Record<BlogLocale, string>> = {};

  for (const [translatedLocale, translatedPost] of Object.entries(
    translations,
  )) {
    if (translatedPost) {
      translatedPathnames[translatedLocale as BlogLocale] =
        `/blog/${translatedPost.slug}`;
    }
  }

  const formattedDate = format.dateTime(new Date(`${post.date}T12:00:00`), {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const relatedPosts = getBlogPosts(locale)
    .filter((item) => item.id !== post.id)
    .map((item) => ({
      post: item,
      commonTags: (item.tags ?? []).filter((tag) =>
        (post.tags ?? []).includes(tag),
      ).length,
    }))
    .filter((item) => item.commonTags > 0)
    .sort((a, b) => b.commonTags - a.commonTags)
    .slice(0, 3)
    .map((item) => item.post);

  const text =
    locale === "it"
      ? {
          home: "Home",
          blog: "Blog",
          related: "Potrebbe interessarti",
          back: "Torna al blog",
          read: "Leggi l'articolo",
        }
      : {
          home: "Home",
          blog: "Blog",
          related: "You might also like",
          back: "Back to the blog",
          read: "Read article",
        };

  return (
    <main className="min-h-screenmx-auto grid w-full max-w-360 px-4">
      <BlogPostJsonLd post={post} locale={locale} url={url} />

      <SyncTranslatedPathnames pathnames={translatedPathnames} />

      <div className="pb-24 pt-8 sm:px-10 sm:pt-12 lg:px-12">
        {/* BREADCRUMB */}
        <nav
          aria-label="Breadcrumb"
          className="mb-12 text-xs text-neutral-500 sm:mb-16"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href={`/${locale}`}
                className="transition-colors hover:text-red-600"
              >
                {text.home}
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li>
              <Link
                href={`/${locale}/blog`}
                className="transition-colors hover:text-red-600"
              >
                {text.blog}
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li aria-current="page" className="text-neutral-800">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* INTESTAZIONE EDITORIALE */}
        <header className="mb-10 max-w-5xl sm:mb-14">
          {post.category && (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
              {post.category}
            </p>
          )}

          <h1 className="max-w-5xl uppercase font-heading text-4xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {post.title}
          </h1>
        </header>

        <div className="md:flex w-full justify-between md:flex-row">
          <div className="flex-1">
            <div className="md:max-w-xs mb-10">
              <div className="flex items-center justify-between text-sm">
                <time dateTime={post.date}>{formattedDate}</time>
                <span>{post.readingTime}</span>
              </div>
              {post.description && (
                <p className="font-sans font-semibold prose mt-20">
                  {post.pullQuote}
                </p>
              )}
              {post.tags && (
                <div className="mt-10 flex flex-wrap gap-2 flex-col">
                  {post.tags.map((tag) => (
                    <p
                      key={tag}
                      className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600"
                    >
                      - {tag}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            {/* IMMAGINE PRINCIPALE */}
            {post.image && (
              <figure className="mb-16 sm:mb-20">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                  />
                </div>
              </figure>
            )}

            {/* TESTO */}
            <article>
              <div
                className="
              prose prose-stone mx-auto max-w-[65ch] font-serif
              prose-headings:font-heading
              prose-headings:font-semibold
              prose-headings:tracking-tight
              prose-headings:text-neutral-950
              prose-h1:mb-6
              prose-h1:text-3xl
              prose-h1:leading-snug
              prose-h2:mt-16
              prose-h2:mb-5
              prose-h2:pb-3
              prose-h2:text-2xl
              prose-h2:leading-tight
              prose-h3:mt-10
              prose-h3:mb-4
              prose-h3:text-xl
              prose-h3:leading-snug
              prose-h4:mt-8
              prose-h4:mb-3
              prose-h4:text-lg
              prose-h4:font-semibold
              prose-p:text-neutral-700
              prose-p:leading-normal
              prose-p:hyphens-auto
              prose-a:text-red-600
              prose-a:decoration-neutral-300
              hover:prose-a:decoration-red-600
              prose-strong:text-neutral-950
              prose-img:mx-auto
              prose-blockquote:font-serif
              prose-blockquote:border-l-red-600
            "
              >
                <MDXRemote source={post.content} />
              </div>
            </article>

            {/* RITORNO AL BLOG */}
            <footer className="mx-auto mt-20 max-w-[720px] border-t border-neutral-200 pt-8">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-red-600"
              >
                <span aria-hidden="true">←</span>
                {text.back}
              </Link>
            </footer>
          </div>
        </div>

        {/* ARTICOLI CORRELATI */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 border-t border-neutral-200 pt-10 sm:mt-32 sm:pt-14">
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {text.related}
              </h2>

              <Link
                href={`/${locale}/blog`}
                className="hidden shrink-0 border-b border-red-600 pb-1 text-sm transition-colors hover:text-red-600 sm:inline-flex"
              >
                {text.blog} ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="group min-w-0">
                  {relatedPost.image && (
                    <Link
                      href={`/${locale}/blog/${relatedPost.slug}`}
                      aria-label={relatedPost.title}
                      className="relative mb-5 block aspect-[4/3] overflow-hidden bg-neutral-100"
                    >
                      <Image
                        src={relatedPost.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </Link>
                  )}

                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                    <time dateTime={relatedPost.date}>
                      {format.dateTime(
                        new Date(`${relatedPost.date}T12:00:00`),
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </time>

                    {relatedPost.category && (
                      <span className="uppercase tracking-wider text-red-600">
                        {relatedPost.category}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                    <Link
                      href={`/${locale}/blog/${relatedPost.slug}`}
                      className="transition-colors group-hover:text-red-600"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
                    {relatedPost.description}
                  </p>

                  <Link
                    href={`/${locale}/blog/${relatedPost.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-red-600"
                  >
                    {text.read}
                    <span aria-hidden="true" className="text-red-600">
                      ↗
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
