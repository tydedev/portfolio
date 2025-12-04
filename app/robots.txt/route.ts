import { NextRequest, NextResponse } from "next/server";

const siteUrl = "https://tydedev.it";
const locales = ["it", "en"];

export async function GET(req: NextRequest) {
  const sitemaps = locales.map((l) => `${siteUrl}/sitemap-${l}.xml`).join("\n");
  const content = `User-agent: *
Allow: /

Sitemap:
${sitemaps}
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
