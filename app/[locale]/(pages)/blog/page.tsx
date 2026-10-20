import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { getBlogPosts, type BlogLocale } from "@/lib/blog";
import BlogListing from "@/components/BlogListing";
import { SITE_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as BlogLocale)) {
    return {};
  }

  const isItalian = locale === "it";
  const title = isItalian ? "Blog | Tydedev" : "Blog | Tydedev";
  const description = isItalian
    ? "Pensieri, idee e approfondimenti su grafica, libri e progettazione editoriale."
    : "Thoughts, ideas and insights on graphic design, books and editorial design.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: {
        it: `${SITE_URL}/it/blog`,
        en: `${SITE_URL}/en/blog`,
        "x-default": `${SITE_URL}/en/blog`,
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${locale}/blog`,
      title,
      description,
      siteName: "Tydedev",
      locale: isItalian ? "it_IT" : "en_US",
    },
  };
}

export default async function Blog({ params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as BlogLocale)) {
    notFound();
  }

  const isItalian = locale === "it";

  const posts = [...getBlogPosts(locale as BlogLocale)].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const text = {
    description: isItalian
      ? "Pensieri, idee e approfondimenti su grafica, libri e progettazione editoriale."
      : "Thoughts, ideas and insights on graphic design, books and editorial design.",
    latest: isItalian ? "In evidenza" : "Featured",
    more: isItalian ? "Altri articoli" : "More articles",
    read: isItalian ? "Leggi l'articolo" : "Read article",
    empty: isItalian
      ? "Nessun articolo disponibile."
      : "No articles available.",
    explore: isItalian ? "Categorie" : "Categories",
    all: isItalian ? "Tutti gli articoli" : "All articles",
    tags: isItalian ? "Tag" : "Tags",
    count: isItalian ? "articoli" : "articles",
    noResults: isItalian
      ? "Nessun articolo trovato per questa selezione."
      : "No articles found for this selection.",
    clear: isItalian ? "Mostra tutti gli articoli" : "Show all articles",
  };

  return <BlogListing posts={posts} text={text} />;
}
