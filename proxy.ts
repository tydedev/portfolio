import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // esclude tutto ciò che inizia con api, _next, _vercel
    // e tutto ciò che contiene un punto (favicon, png, svg, xml, ecc.)
    // + i nostri file specifici
    "/((?!api|_next|_vercel|.*\\..*|sitemap\\.xml|sitemap-0\\.xml|robots\\.txt|opengraph-image).*)",
  ],
};
