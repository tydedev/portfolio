import { NextResponse } from "next/server";

const siteUrl = "https://tydedev.it";

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${siteUrl}/sitemap-it</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    <sitemap>
      <loc>${siteUrl}/sitemap-en</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  </sitemapindex>`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
