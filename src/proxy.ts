import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "ko", "zh"];
const defaultLocale = "en";

/** Pick the visitor's language from the Accept-Language header. */
function preferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language") ?? "";
  const wanted = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2));
  return wanted.find((code) => locales.includes(code)) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  // No language in the URL: send the visitor to their language version.
  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next.js internals, the API and files with an extension (images, icons…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
