import { getProject, projects, ProjectBlock } from "@/lib/projects";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "next-intl";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Pre-render every locale × slug combination at build time
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: `Works.${project.i18nKey}`,
  });

  return {
    title: `${t("title")} — Tydedev`,
    description: t("description"),
  };
}

// ─── image block renderers ────────────────────────────────────────────────────

function FullImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="md:col-span-6">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={500}
        className="w-full"
        unoptimized
      />
    </div>
  );
}

function HalfImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="md:col-span-3 relative overflow-hidden aspect-square">
      <Image src={src} alt={alt} fill className="object-cover" unoptimized />
    </div>
  );
}

function SplitImages({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <>
      {images.map((img) => (
        <div
          key={img.src}
          className={`md:col-span-${Math.floor(6 / images.length)}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={1200}
            height={1800}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      ))}
    </>
  );
}

function TextBlock({
  title,
  content,
  url,
}: {
  title?: string;
  content?: string;
  url?: string;
}) {
  return (
    <div className="md:col-span-3 py-8">
      {title && (
        <h3 className="uppercase tracking-wide text-sm text-neutral-500 mb-3">
          {title}
        </h3>
      )}

      {content && (
        <p className="text-lg leading-relaxed text-neutral-800">{content}</p>
      )}
      {url && (
        <Link
          href={url}
          className="text-red-500 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url.replace(/^https?:\/\//, "www.")}
        </Link>
      )}
    </div>
  );
}

function renderBlock(block: ProjectBlock, index: number) {
  switch (block.type) {
    case "full":
      return <FullImage key={index} src={block.src} alt={block.alt} />;

    case "half":
      return <HalfImage key={index} src={block.src} alt={block.alt} />;

    case "split":
      return <SplitImages key={index} images={block.images} />;

    case "text":
      return (
        <TextBlock
          key={index}
          title={block.title}
          content={block.content ?? ""}
          url={block.url ?? ""}
        />
      );
  }
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default async function WorkPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations(`Works.${project.i18nKey}`);

  return (
    <section
      className="md:grid md:grid-cols-6 min-h-screen mb-20 md:max-w-300 px-4 mx-auto py-20 gap-6 space-y-6 md:space-y-0"
      id="work"
    >
      {/* Title block */}
      <div className="font-bold md:col-span-2">
        <h2 className="text-lg md:text-2xl">{t("worktype")}</h2>
        <h1 className="text-4xl md:text-6xl break-after-auto">{t("title")}</h1>
      </div>

      {/* Tags */}
      <div className="md:col-span-1 md:col-start-6 text-red-500 font-semibold">
        {project.tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>

      {/* Description */}
      <div className="md:text-lg text-base mt-4 md:col-span-3">
        <p>{t("description")}</p>
      </div>

      {/* Images */}
      {project.blocks.map((block, i) => renderBlock(block, i))}

      {/* Optional external link */}
      {project.externalUrl && (
        <div className="md:col-span-3 text-xl">
          <Link
            href={project.externalUrl}
            className="text-red-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.externalUrl.replace(/^https?:\/\//, "")}
          </Link>
        </div>
      )}
    </section>
  );
}
