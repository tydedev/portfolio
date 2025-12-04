import { NextResponse } from "next/server";
import type { MetadataRoute } from "next";

const pages = ["", "contacts", "privacy"];
const locale = "it"; // cambia in en per l'altra sitemap
const siteUrl = "https://tydedev.it";

export async function GET() {
  const urls = pages.map(
    (page) =>
      `<url>
        <loc>${siteUrl}/${locale}${page ? "/" + page : ""}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>${page === "" ? 1 : 0.7}</priority>
      </url>`
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("\n")}
  </urlset>`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
