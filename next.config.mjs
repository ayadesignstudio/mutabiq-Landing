import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// GitHub project pages serve under `/<repo-name>/`. Plain <img> tags
// and other absolute paths don't get auto-prefixed by Next, so we
// expose the basePath as a NEXT_PUBLIC_ env var to be prepended in
// JSX (see page.tsx — logo + deck PDF references).
const basePath = process.env.NODE_ENV === "production" ? "/mutabiq-Landing" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages — generates a fully static `out/`
  // folder that GitHub Pages can serve. No server, no middleware.
  output: "export",
  basePath,
  assetPrefix: basePath,
  // Expose the basePath to the runtime bundle so plain <img> src
  // attributes (and other asset URLs) can prepend it manually.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // No image optimization on static hosts — fall back to raw <img>.
  images: { unoptimized: true },
  // Trailing slash so paths like /ar resolve to /ar/index.html cleanly
  // on GitHub Pages.
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
