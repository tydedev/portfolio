"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useFormatter } from "next-intl";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  image?: string;
};

type Filter = { type: "all" } | { type: "category"; value: string };

type Props = {
  posts: BlogPost[];
  text: {
    description: string;
    latest: string;
    more: string;
    read: string;
    empty: string;
    explore: string;
    all: string;
    count: string;
    noResults: string;
    clear: string;
  };
};

export default function BlogListing({ posts, text }: Props) {
  const [filter, setFilter] = useState<Filter>({ type: "all" });
  const format = useFormatter();

  const categories = useMemo(
    () =>
      [
        ...new Set(
          posts.map((post) => post.category).filter(Boolean) as string[],
        ),
      ].sort((a, b) => a.localeCompare(b)),
    [posts],
  );

  const filteredPosts = useMemo(() => {
    if (filter.type === "category") {
      return posts.filter((post) => post.category === filter.value);
    }

    return posts;
  }, [posts, filter]);

  const latestPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);
  const isFiltered = filter.type === "category";

  const formattedDate = format.dateTime(
    new Date(`${latestPost.date}T12:00:00`),
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  function selectCategory(category: string) {
    setFilter({ type: "category", value: category });
  }

  function renderCategory(category?: string) {
    if (!category) return null;

    return (
      <button
        type="button"
        onClick={() => selectCategory(category)}
        className="text-red-600 transition-colors hover:underline"
        aria-label={`Filter by category: ${category}`}
      >
        {category}
      </button>
    );
  }
  if (!posts.length) {
    return (
      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-center text-neutral-600">Nothing found.</p>
        </div>
      </main>
    );
  }
  function renderPostCard(post: BlogPost) {
    return (
      <article key={post.id} className="group min-w-0">
        {post.image && (
          <Link
            href={`/blog/${post.slug}`}
            aria-label={post.title}
            className="mb-5 block overflow-hidden max-w-[360px] bg-neutral-100"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        )}

        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
          <time dateTime={post.date}>{formattedDate}</time>
          {renderCategory(post.category)}
        </div>

        <h2 className="font-heading text-xl font-bold leading-snug sm:text-2xl">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors duration-200 group-hover:text-red-600"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-red-600"
        >
          {text.read}
          <span aria-hidden="true" className="text-red-600">
            ↗
          </span>
        </Link>
      </article>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:px-12 lg:pt-28">
        <header className="mb-16 sm:mb-24">
          <h1 className="text-5xl font-heading font-bold uppercase md:leading-[0.8] md:col-span-12 md:text-8xl">
            Blog
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-semibold font-sans">{text.description}</p>

            <p className="text-sm text-neutral-500">
              {filteredPosts.length} {text.count}
            </p>
          </div>
        </header>

        {!posts.length ? (
          <p className="text-neutral-600">{text.empty}</p>
        ) : (
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-16">
            <div className="min-w-0">
              {!latestPost ? (
                <div className="py-12">
                  <p className="text-neutral-600">{text.noResults}</p>

                  <button
                    type="button"
                    onClick={() => setFilter({ type: "all" })}
                    className="mt-4 border-b border-red-600 pb-1 text-sm hover:text-red-600"
                  >
                    {text.clear}
                  </button>
                </div>
              ) : isFiltered ? (
                <section aria-label={text.more}>
                  <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                      {filter.type === "category" ? filter.value : ""}
                    </h2>

                    <button
                      type="button"
                      onClick={() => setFilter({ type: "all" })}
                      className="border-b border-red-600 pb-1 text-sm hover:text-red-600"
                    >
                      {text.clear}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                    {filteredPosts.map(renderPostCard)}
                  </div>
                </section>
              ) : (
                <>
                  <section aria-label={text.latest}>
                    <article className="group flex gap-5 flex-col sm:flex-row">
                      {latestPost.image && (
                        <Link
                          href={`/blog/${latestPost.slug}`}
                          aria-label={latestPost.title}
                          className="relative mb-8 block aspect-[4/3] w-full max-w-[400px] shrink-0 overflow-hidden bg-neutral-100 sm:mb-10"
                        >
                          <Image
                            src={latestPost.image}
                            alt=""
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, 400px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                          />
                        </Link>
                      )}

                      <div className="max-w-4xl">
                        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                          <time dateTime={latestPost.date}>
                            {formattedDate}
                          </time>
                          {renderCategory(latestPost.category)}
                        </div>

                        <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                          <Link
                            href={`/blog/${latestPost.slug}`}
                            className="transition-colors duration-200 group-hover:text-red-600"
                          >
                            {latestPost.title}
                          </Link>
                        </h2>

                        <div className="mt-5 max-w-2xl">
                          <p className="text-base leading-7 text-neutral-600">
                            {latestPost.description}
                          </p>

                          <Link
                            href={`/blog/${latestPost.slug}`}
                            className="mt-5 inline-flex items-center gap-2 border-b border-red-600 pb-1 text-sm font-medium transition-colors hover:text-red-600"
                          >
                            {text.read}
                            <span aria-hidden="true">↗</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </section>

                  {otherPosts.length > 0 && (
                    <section
                      id="articles"
                      className="mt-20 sm:mt-28"
                      aria-label={text.more}
                    >
                      <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
                        {text.more}
                      </h2>

                      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                        {otherPosts.map(renderPostCard)}
                      </div>
                    </section>
                  )}
                </>
              )}
            </div>

            <aside className="border-t border-neutral-200 pt-6 lg:sticky lg:top-10 lg:self-start lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <h2 className="mb-5 font-heading text-xl font-bold">
                {text.explore}
              </h2>

              <nav
                aria-label={text.explore}
                className="flex flex-col items-start gap-3 text-sm"
              >
                <button
                  type="button"
                  onClick={() => setFilter({ type: "all" })}
                  aria-pressed={filter.type === "all"}
                  className={`text-left transition-colors hover:text-red-600 ${
                    filter.type === "all"
                      ? "font-semibold text-red-600"
                      : "text-neutral-500"
                  }`}
                >
                  {text.all}
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => selectCategory(category)}
                    aria-pressed={
                      filter.type === "category" && filter.value === category
                    }
                    className={`text-left transition-colors hover:text-red-600 ${
                      filter.type === "category" && filter.value === category
                        ? "font-semibold text-red-600"
                        : "text-neutral-500"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
