// app/robots.txt/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const content = `
User-agent: *
Allow: /

Sitemap: https://tydedev.it/sitemap.xml
`;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
