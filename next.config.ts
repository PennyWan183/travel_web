import type { NextConfig } from "next";

/** Only the live site (Vercel production) may appear in search engines. */
const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  // Preview and test deployments tell search engines not to index anything.
  async headers() {
    return isProduction ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
  // Explore China articles are read from /content at build and request time.
  outputFileTracingIncludes: { "/**": ["./content/**/*"] },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
