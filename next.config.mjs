import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages — generates a fully static `out/`
  // folder that GitHub Pages can serve. No server, no middleware.
  output: "export",
  // GitHub project pages serve under `/<repo-name>/`. basePath must
  // match so all internal links + assets resolve correctly.
  basePath: process.env.NODE_ENV === "production" ? "/mutabiq-Landing" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/mutabiq-Landing" : "",
  // No image optimization on static hosts — fall back to raw <img>.
  images: { unoptimized: true },
  // Trailing slash so paths like /ar resolve to /ar/index.html cleanly
  // on GitHub Pages.
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
