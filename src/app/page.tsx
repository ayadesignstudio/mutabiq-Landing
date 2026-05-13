import type { Metadata } from "next";

/** Root page → redirects to /ar via meta refresh.
 * `redirect()` would be cleaner but doesn't emit during static export,
 * so we hand-render a tiny HTML that meta-refreshes to the default
 * locale and also drops a noscript link as a fallback. */
export const metadata: Metadata = {
  title: "Mutabiq Cloud",
  // Use HTML <meta http-equiv="refresh"> via metadata.other
  other: {
    "refresh": "0;url=./ar/",
  },
};

export default function RootPage() {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <noscript>
          <a href="./ar/">انتقل إلى مُطابق</a>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.location.replace("./ar/");',
          }}
        />
      </body>
    </html>
  );
}
