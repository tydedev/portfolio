import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconType } from "react-icons";
import { useTranslations } from "next-intl";

interface Skill {
  name: string;
  icon: IconType;
}

interface Branding {
  logo?: string;
  description?: string;
  colors?: string[];
}

interface Props {
  title: string;
  subtitle?: string;
  heroImage: string;

  overview?: string;
  problem?: string;
  solution?: string;
  result?: string;

  skills?: Skill[];
  branding?: Branding;

  liveUrl?: string;
  repoUrl?: string;
}

const ProjectDetails = ({
  title,
  subtitle,
  heroImage,
  overview,
  problem,
  solution,
  result,
  skills,
  branding,
  liveUrl,
  repoUrl,
}: Props) => {
  const t = useTranslations("projects.details");
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      {/* HERO */}
      <section className="grid gap-14 lg:grid-cols-2 items-center mb-32">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">{title}</h1>

          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-xl">{subtitle}</p>
          )}

          <div className="flex gap-3 pt-4">
            {liveUrl && (
              <Button asChild>
                <Link href={liveUrl} target="_blank">
                  {t("view_live")}
                </Link>
              </Button>
            )}

            {repoUrl && (
              <Button asChild variant="secondary">
                <Link href={repoUrl} target="_blank">
                  View repository
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="grid lg:grid-cols-[2fr_1fr] gap-24">
        {/* MAIN */}
        <div className="space-y-16">
          {overview && (
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {overview}
              </p>
            </article>
          )}

          {problem && (
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">The problem</h2>
              <p className="text-muted-foreground leading-relaxed">{problem}</p>
            </article>
          )}

          {solution && (
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">The solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {solution}
              </p>
            </article>
          )}

          {/* BRANDING */}
          {branding && (
            <article className="space-y-6">
              <h2 className="text-2xl font-semibold">Brand identity</h2>

              <div className="space-y-6">
                {branding.logo && (
                  <div className="relative h-24 w-24">
                    <Image
                      src={branding.logo}
                      alt={`${title} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {branding.description && (
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {branding.description}
                  </p>
                )}

                {branding.colors && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
                    {branding.colors.map((color) => (
                      <div
                        key={color}
                        className="flex items-center gap-3 rounded-lg border border-slate-700 p-3 bg-slate-950 hover:border-cyan-400 transition-colors duration-200 cursor-pointer"
                      >
                        <div
                          className="h-10 w-10 rounded-md border border-slate-600"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-sm font-mono font-semibold text-slate-200">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          )}

          {result && (
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">Outcome</h2>
              <p className="text-muted-foreground leading-relaxed">{result}</p>
            </article>
          )}
        </div>

        {/* SIDEBAR */}
        {skills && (
          <aside className="sticky top-24 self-start">
            <Card>
              <CardContent className="px-6 py-6 space-y-4">
                <h3 className="text-lg font-semibold">Tech stack</h3>

                <ul className="space-y-3">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <Icon className="w-4 h-4" />
                        {skill.name}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </aside>
        )}
      </section>
    </main>
  );
};

export default ProjectDetails;
