import "@/styles/mutabiq-tokens.css";
import "./_marketing/marketing.css";
import { setRequestLocale } from "next-intl/server";
import {
  Activity,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowLeft,
  Award,
  BadgeCheck,
  BarChart3,
  Check,
  ClipboardList,
  Clock,
  Cloud,
  Camera,
  Download,
  EyeOff,
  FileText,
  Figma,
  Gauge,
  Languages,
  Layers,
  ListChecks,
  Lock,
  MousePointer,
  Network,
  Pencil,
  PlayCircle,
  Receipt,
  Repeat,
  Rocket,
  Scale,
  ShieldCheck,
  Smile,
  Sun,
  Unlink,
  Wrench,
} from "lucide-react";
import { MarketingReveal } from "./_marketing/MarketingReveal";

// GitHub Pages serves the site under `/mutabiq-Landing/`. Plain <img>
// + <a href> tags don't get auto-prefixed with basePath, so we prepend
// it manually for every public/* asset reference. Empty string in dev.
const ASSET = process.env.NEXT_PUBLIC_BASE_PATH || "";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

function BrandMark({ className = "lg" }: { className?: string }) {
  return (
    <span className={className}>
      <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 32 L12 18 L17.5 26 L23 18 L23 32" />
        <path d="M28 24.5 L32 28.5 L38 20" />
      </svg>
    </span>
  );
}

/* Figma's official 5-color brandmark, drawn as inline SVG so it sits
   crisp in the platform chip and signals "this lives in Figma" the way
   an App Store badge signals a mobile install. Kept tiny (16-18px) and
   contained inside a single chip so the section's main palette stays
   Mutabiq-green. */
function FigmaMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * (57 / 38)}
      viewBox="0 0 38 57"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
    </svg>
  );
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Tiny inline i18n helper — keeps copy next to markup instead of
  // pulling every string through messages JSON. Direct translation of
  // the Arabic source, formal DGA tone preserved.
  const t = (ar: string, en: string) => (locale === "en" ? en : ar);
  const isAR = locale !== "en";
  const dir = isAR ? "rtl" : "ltr";
  const lang = isAR ? "ar" : "en";

  return (
    <div className="mtb-marketing" dir={dir} lang={lang}>
      <MarketingReveal />
      {/* Nav — minimal: brand on reading-start side, language + theme on end */}
      <header className="nav">
        <div className="wrap nav-in">
          <a className="brand" href={`${ASSET}/${locale}/`}>
            <BrandMark />
            <span>
              <b>{t("مُطابق كلاود", "Mutabiq Cloud")}</b>{" "}
              <span className="name-en">{t("Mutabiq", "مُطابق")}</span>
            </span>
          </a>
          <div className="nav-cta">
            <div className="lang" role="group" aria-label={t("اللغة", "Language")}>
              <a
                href={`${ASSET}/ar/`}
                className={isAR ? "on" : ""}
                aria-pressed={isAR}
              >
                AR
              </a>
              <a
                href={`${ASSET}/en/`}
                className={!isAR ? "on" : ""}
                aria-pressed={!isAR}
              >
                EN
              </a>
            </div>
            <button
              className="nav-theme"
              aria-label={t("تبديل الوضع الليلي", "Toggle dark mode")}
              title={t("الوضع الليلي", "Dark mode")}
            >
              <Sun />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              {t("مبني على دليل DXMI 2026 الرسمي · v5.0", "Built on the official DXMI 2026 guide · v5.0")}
            </span>
            <h1>
              {t("اعرف درجة ", "Know your ")}
              {/* Word rotator — cycles DXMI → امتثالك → تجربتك → موقعك on a
                  12s loop. inline-grid stacks all 4 words in the same cell
                  so the layout never shifts; each word fades in/out via
                  staggered animation-delays (0/3/6/9s) into a 4×3s slot. */}
              <span className="word-rotator" aria-live="polite">
                <em className="wr-word wr-1">DXMI</em>
                <em className="wr-word wr-2">{t("امتثالك", "compliance")}</em>
                <em className="wr-word wr-3">{t("تجربتك", "experience")}</em>
                <em className="wr-word wr-4">{t("موقعك", "site")}</em>
              </span>
              {t(" لموقعك — قبل المقيِّم الرسمي.", " score — before the official assessor.")}
            </h1>
            <p className="lede">
              {t("منصة سعودية لتدقيق امتثال DXMI 2026 آليًا. أكثر من 70 قاعدة موزَّعة على المحاور الأربعة، كل ملاحظة مرتبطة ببند رسمي من الدليل — بأدلة علاج تفصيلية بالعربية الفصحى.", "A Saudi platform for automated DXMI 2026 compliance auditing. Over 70 rules distributed across the four axes, every finding linked to an official clause from the guide — with detailed remediation guidance in formal Arabic.")}
            </p>
            {/* Stat chips — three scannable proof points, staggered fade-in
                after the lede so they read as "claims → proof" rhythm. */}
            <div className="hero-chips">
              <span className="hero-chip">
                <span className="hero-chip-ic"><ListChecks /></span>
                <span><b>+70</b> {t("قاعدة آلية", "automated rules")}</span>
              </span>
              <span className="hero-chip">
                <span className="hero-chip-ic"><Layers /></span>
                <span><b>4</b> {t("محاور DXMI", "DXMI axes")}</span>
              </span>
              <span className="hero-chip">
                <span className="hero-chip-ic"><Languages /></span>
                <span>{t("تقرير بالعربية", "Arabic report")}</span>
              </span>
            </div>
            {/* Primary CTA — download presentation deck. Secondary CTA
                jumps to the lifecycle section as a "see how it works"
                substitute until a real video lands. */}
            <div className="hero-ctas">
              <a
                className="hero-cta hero-cta-primary"
                href={`${ASSET}/mutabiq-cloud-deck.pdf`}
                download="Mutabiq-Cloud-Presentation.pdf"
              >
                <span className="hero-cta-ic"><Download /></span>
                <span className="hero-cta-text">{t("تحميل العرض التقديمي", "Download the presentation")}</span>
                <span className="hero-cta-meta">PDF</span>
              </a>
            </div>
            <div className="trust">
              <span className="ck">
                <Check />
              </span>
              <span>{t("كل ملاحظة مرتبطة ببند رسمي من DGA · لا تنبيهات بدون مرجع", "Every finding linked to an official DGA clause · no alerts without a reference")}</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hc-head">
              <span className="hc-dot" />
              <b>{t("تقرير التدقيق · moe.gov.sa", "Audit report · moe.gov.sa")}</b>
              <span className="meta">DXMI 2026</span>
            </div>
            <div className="hc-score">
              <div className="score-ring">
                <div className="inner">
                  <b data-counter="78" data-counter-delay="600" data-counter-duration="1600">78</b>
                  <span>DXMI SCORE</span>
                </div>
                {/* Tier chip overlapping the ring's bottom edge — fades in
                    after the count-up lands. Color tracks the score band
                    (78 → ASPIRANT tier, warm amber). */}
                <span className="score-tier" aria-label="DXMI tier">ASPIRANT</span>
                {/* Trend pill at top-right — improvement vs previous audit.
                    Pops in after the score count finishes, signaling
                    progress momentum. */}
                <span className="score-trend" aria-label={t("تحسن +5 نقاط منذ آخر تدقيق", "+5 points improvement since last audit")}>
                  <span className="score-trend-arrow">↑</span>
                  <span className="score-trend-value">5+</span>
                </span>
              </div>
              {/* Each axis row uses a level={n} attribute that drives the
                  bar width AND its color band (green ≥ 80, amber 60–79,
                  red < 60). Width animates from 0 → level% via CSS var. */}
              <ul>
                <li data-level="72" style={{ ["--lvl" as string]: "72%" }}>
                  <i />
                  <span className="lbl">{t("الإتاحة", "Accessibility")}</span>
                  <span className="bar"><span className="bar-fill" /></span>
                  <span className="v" data-counter="72" data-counter-delay="850" data-counter-duration="900">72</span>
                </li>
                <li data-level="88" style={{ ["--lvl" as string]: "88%" }}>
                  <i />
                  <span className="lbl">{t("قابلية الاستخدام", "Usability")}</span>
                  <span className="bar"><span className="bar-fill" /></span>
                  <span className="v" data-counter="88" data-counter-delay="950" data-counter-duration="900">88</span>
                </li>
                <li data-level="64" style={{ ["--lvl" as string]: "64%" }}>
                  <i />
                  <span className="lbl">{t("الأداء", "Performance")}</span>
                  <span className="bar"><span className="bar-fill" /></span>
                  <span className="v" data-counter="64" data-counter-delay="1050" data-counter-duration="900">64</span>
                </li>
                <li data-level="91" style={{ ["--lvl" as string]: "91%" }}>
                  <i />
                  <span className="lbl">{t("التقنية", "Technology")}</span>
                  <span className="bar"><span className="bar-fill" /></span>
                  <span className="v" data-counter="91" data-counter-delay="1150" data-counter-duration="900">91</span>
                </li>
              </ul>
            </div>
            <div className="hc-finds">
              <div className="hc-fnd crit">
                <span className="ic">
                  <AlertCircle />
                </span>
                <b>{t("نقص سمة lang على html", "Missing lang attribute on html")}</b>
                <span className="tag">DGA · A-01</span>
              </div>
              <div className="hc-fnd warn">
                <span className="ic">
                  <AlertTriangle />
                </span>
                <b>{t("LCP يتجاوز 3 ثوانٍ", "LCP exceeds 3 seconds")}</b>
                <span className="tag">DGA · P-02</span>
              </div>
              <div className="hc-fnd ok">
                <span className="ic">
                  <Check />
                </span>
                <b>{t("دعم RTL كامل", "Full RTL support")}</b>
                <span className="tag">DGA · U-05</span>
              </div>
            </div>
            {/* Audit footer — timestamp + version + quick stat. Adds the
                "this is a live report" context that turns the mockup from
                a static illustration into a believable audit artifact. */}
            <div className="hc-footer">
              <span className="hc-footer-item">
                <Clock />
                <span>{t("منذ ٣ دقائق", "3 minutes ago")}</span>
              </span>
              <span className="hc-footer-divider" aria-hidden />
              <span className="hc-footer-item">
                <span><b>12</b> {t("صفحة فُحصت", "pages scanned")}</span>
              </span>
              <span className="hc-footer-divider" aria-hidden />
              <span className="hc-footer-item hc-footer-version">DXMI v5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logos — marquee, two copies of the list for a seamless loop */}
      <div className="logos">
        <div className="wrap">
          <div className="logos-header">
            <span className="logos-count" aria-label={t("أكثر من ستين جهة حكومية", "More than sixty government entities")}>
              <span className="logos-count-plus">+</span>
              <span className="logos-count-num">60</span>
            </span>
            <div className="logos-header-text">
              <b>{t("جهة حكومية في نطاق معايير DGA", "Government entities within the scope of DGA standards")}</b>
              <span>{t("وزارات وهيئات وصناديق ومراكز خاضعة لإشراف هيئة الحكومة الرقمية", "Ministries, authorities, funds, and centers under the supervision of the Digital Government Authority")}</span>
            </div>
          </div>
        </div>
        <div className="logos-strip">
          <div className="logos-track" aria-label={t("جهات حكومية تستخدم معايير DGA", "Government entities using DGA standards")}>
            {[0, 1].map((dup) => (
              <div key={dup} aria-hidden={dup === 1} style={{ display: "contents" }}>
                {/* `tight` = SVG has a square viewBox with internal padding
                    around the artwork, so object-fit:contain leaves the
                    visible logo small inside the 160x80 box. We compensate
                    with transform: scale via .logo-mark.is-tight in CSS. */}
                {/* Uniform-height logo strip (the standard logo-wall pattern):
                    every logo renders at the same height; widths flow from
                    each SVG's native viewBox. Width/height attrs on the svg
                    roots were added to each file so the browser knows the
                    intrinsic aspect ratio. No per-logo scaling hacks. */}
                {/* `dense` = SVG packs visual weight tightly (icon + multi-line
                    text + tagline). These read as "bigger" than the airier
                    wide marks, so they get a tighter height clamp to balance
                    the row visually. */}
                {[
                  { slug: "cst",  ar: "هيئة الاتصالات والفضاء والتقنية", en: "Communications, Space & Technology Commission" },
                  { slug: "saso", ar: "المواصفات السعودية", en: "Saudi Standards, Metrology and Quality Org" },
                  { slug: "ncc",  ar: "المركز السعودي للتنافسية", en: "Saudi National Competitiveness Center" },
                  { slug: "nic",  ar: "مركز المعلومات الوطني", en: "National Information Center" },
                  { slug: "sar",  ar: "الخطوط السعودية الحديدية", en: "Saudi Arabia Railways" },
                  { slug: "sfd",  ar: "الصندوق السعودي للتنمية", en: "Saudi Fund for Development" },
                  { slug: "ndf",  ar: "صندوق التنمية الوطني", en: "National Development Fund" },
                  { slug: "sca",  ar: "الهيئة السعودية للمقاولين", en: "Saudi Contractors Authority" },
                  { slug: "gea",  ar: "الهيئة العامة للترفيه", en: "General Entertainment Authority" },
                  { slug: "seda", ar: "هيئة تنمية الصادرات السعودية", en: "Saudi Export Development Authority" },
                  { slug: "balady", dense: true, ar: "منصة بلدي", en: "Balady Platform" },
                  { slug: "sdaia",  dense: true, ar: "سدايا", en: "SDAIA" },
                  { slug: "rega",   dense: true, ar: "الهيئة العامة للعقار", en: "Real Estate General Authority" },
                  { slug: "kku",    dense: true, ar: "جامعة الملك خالد", en: "King Khalid University" },
                  { slug: "mim",    dense: true, ar: "وزارة الصناعة والثروة المعدنية", en: "Ministry of Industry and Mineral Resources" },
                  { slug: "misa",   dense: true, ar: "وزارة الاستثمار", en: "Ministry of Investment" },
                ].map((logo) => (
                  <div key={logo.slug} className="logo-item" data-slug={logo.slug} title={t(logo.ar, logo.en)}>
                    <img
                      className={`logo-mark${logo.dense ? " is-dense" : ""}`}
                      src={`${ASSET}/logos/${logo.slug}.svg`}
                      alt={t(logo.ar, logo.en)}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem */}
      <section className="problem">
        <div className="wrap">
          <div className="problem-head" data-reveal>
            <div className="problem-eyebrow">
              <span className="num">001 ·</span>{t("المشكلة", "The Problem")}
            </div>
            <h2 className="problem-title">
              {t("مؤشر DXMI 2026 يطلب الكثير، وأدوات اليوم لا تكفي.", "DXMI 2026 demands a lot, and today's tools are not enough.")}
            </h2>
          </div>
          {/* 6 problems arranged in a 3×2 grid. Columns share a color
              rhythm — each vertical pair maps to the same root concern:
                col 1 (red)        — tool / method mismatch
                col 2 (amber)      — cost / effort
                col 3 (dark green) — time / visibility
              Top row = surface pains everyone sees; bottom row = the
              deeper structural pains that surface only after you live
              the cycle. */}
          <div className="problem-grid" data-reveal-stagger>
            {/* Row 1 — surface pains */}
            <div className="pcard bad" data-reveal>
              <span className="ic">
                <AlertOctagon />
              </span>
              <span className="label">{t("غير ملائم", "Mismatched")}</span>
              <h3>{t("أدوات لا تفهم السياق", "Tools that don't understand the context")}</h3>
              <p>{t("الأدوات العالمية تقيس WCAG وLighthouse، لكنها لا تعرف DXMI 2026، ولا تدعم العربية بشكل أصيل، ولا تفهم البنود الإلزامية لهيئة الحكومة الرقمية.", "Global tools measure WCAG and Lighthouse, but they don't know DXMI 2026, don't natively support Arabic, and don't understand the mandatory clauses of the Digital Government Authority.")}</p>
            </div>
            <div className="pcard med" data-reveal>
              <span className="ic">
                <Receipt />
              </span>
              <span className="label">{t("مكلف", "Costly")}</span>
              <h3>{t("تدقيق يدوي بتكلفة عالية", "High-cost manual auditing")}</h3>
              <p>{t("كل تقييم يتم عبر استشارات خارجية تستهلك ميزانية الجهة، وتعطي صورة لحظية واحدة فقط بعد شهور من العمل.", "Every assessment runs through external consultants who consume the entity's budget and deliver only a single snapshot after months of work.")}</p>
            </div>
            <div className="pcard late" data-reveal>
              <span className="ic">
                <Clock />
              </span>
              <span className="label">{t("متأخر", "Late")}</span>
              <h3>{t("يُكتشف بعد التسليم", "Discovered after delivery")}</h3>
              <p>{t("المخالفات تظهر في تقييم الهيئة السنوي — حين يصبح إصلاحها مكلفًا ويستغرق شهورًا ويترك أثرًا على الترتيب.", "Violations surface in the Authority's annual assessment — when remediation becomes costly, takes months, and leaves a mark on the ranking.")}</p>
            </div>
            {/* Row 2 — structural pains */}
            <div className="pcard bad" data-reveal>
              <span className="ic">
                <Scale />
              </span>
              <span className="label">{t("متضارب", "Inconsistent")}</span>
              <h3>{t("نتائج تختلف من مراجع لآخر", "Results that differ from one reviewer to another")}</h3>
              <p>{t("نفس الموقع، نفس البنود، وثلاثة استشاريين بثلاث درجات. لا توجد طريقة لإثبات أن التقييم موضوعي وقابل للتكرار.", "Same site, same clauses, and three consultants with three different scores. There is no way to prove that the assessment is objective and reproducible.")}</p>
            </div>
            <div className="pcard med" data-reveal>
              <span className="ic">
                <Unlink />
              </span>
              <span className="label">{t("مفصول", "Disconnected")}</span>
              <h3>{t("التصميم والإنتاج في عالمين", "Design and production in two separate worlds")}</h3>
              <p>{t("تُدقَّق التصاميم في Figma بمعيار، ويُدقَّق الموقع في الإنتاج بمعيار آخر. الفجوة بين الاثنين تظهر بعد الإطلاق.", "Designs are audited in Figma against one standard, and the site is audited in production against another. The gap between the two surfaces after launch.")}</p>
            </div>
            <div className="pcard late" data-reveal>
              <span className="ic">
                <EyeOff />
              </span>
              <span className="label">{t("بدون رقابة", "Unmonitored")}</span>
              <h3>{t("لا أحد يراقب بين التقييمات", "No one is watching between assessments")}</h3>
              <p>{t("بين تقييمين سنويين، يتحرّك الموقع، تتغيّر الواجهات، وتدخل ميزات جديدة — كل ذلك دون رقابة على الالتزام.", "Between two annual assessments, the site moves, interfaces change, and new features ship — all without compliance oversight.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel — visual metaphor: messy compliance issues enter on the
          start side, a clean DGA-Advanced report exits on the end side.
          Subtle float animations on both sides + glowing center bar. */}
      <section className="s funnel">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("002 · من الفوضى إلى الالتزام", "002 · From chaos to compliance")}</div>
            <h2 className="s-title">
              {t("مخالفات تدخل · ", "Violations in · ")}<em>{t("تقرير مُطابق يخرج", "A compliant report out")}</em>
            </h2>
            <p className="s-lede">
              {t("مُطابق يحوّل قائمة المخالفات المتراكمة إلى تقرير DXMI مرتبط بالمعيار الرسمي — في تشغيل آلي واحد، يكشف لك أين أنت من Advanced قبل التقييم.", "Mutabiq turns a backlog of violations into a DXMI report linked to the official standard — in a single automated run that shows you where you stand against Advanced before the assessment.")}
            </p>
          </div>

          <div className="funnel-stage" aria-hidden>
            {/* Live status bar — pulses "audit running" indicator + key
                stats so the section reads as a live, dynamic system
                rather than a static illustration. */}
            <div className="funnel-status">
              <span className="funnel-status-chip">
                <span className="funnel-status-dot" />
                {t("تدقيق آلي يعمل", "Automated audit running")}
              </span>
              <span className="funnel-status-divider" aria-hidden />
              <span className="funnel-status-stat"><b>+70</b><span>{t("قاعدة فُحصت", "rules checked")}</span></span>
              <span className="funnel-status-divider" aria-hidden />
              <span className="funnel-status-stat"><b>+24</b><span>{t("نقطة", "points")}</span></span>
              <span className="funnel-status-divider" aria-hidden />
              <span className="funnel-status-stat"><b>14s</b><span>{t("الزمن", "duration")}</span></span>
            </div>

            {/* Start side (RTL right) — issues entering */}
            <div className="funnel-side funnel-in">
              <div className="funnel-side-label funnel-side-label-issue">
                <span className="funnel-side-label-dot" />
                {t("قبل التدقيق · 5 مخالفات حرجة", "Before audit · 5 critical violations")}
              </div>
              <div className="funnel-mockbrowser">
                <div className="funnel-mb-chrome">
                  <span className="funnel-mb-dots">
                    <span className="funnel-mb-dot funnel-mb-dot-r" />
                    <span className="funnel-mb-dot funnel-mb-dot-y" />
                    <span className="funnel-mb-dot funnel-mb-dot-g" />
                  </span>
                  <span className="funnel-mb-url">
                    <Lock />
                    moe.gov.sa
                  </span>
                  <span className="funnel-mb-status">{t("جاري التدقيق", "Auditing")}</span>
                </div>
                <div className="funnel-mb-body">
                  <div className="funnel-mb-hero">
                    <span className="funnel-mb-logo" />
                    <span className="funnel-mb-nav">
                      <span /><span /><span /><span />
                    </span>
                  </div>
                  <div className="funnel-mb-content">
                    <span className="funnel-mb-line w-100" data-issue />
                    <span className="funnel-mb-line w-90" />
                    <span className="funnel-mb-line w-75" data-issue />
                    <div className="funnel-mb-image" data-issue>
                      <span className="funnel-mb-image-warn"><AlertTriangle /></span>
                    </div>
                    <span className="funnel-mb-line w-95" />
                    <span className="funnel-mb-line w-60" data-issue />
                  </div>
                </div>
              </div>
              <div className="funnel-tag issue f1">
                <span className="tag-ic"><AlertOctagon /></span>
                <span>{t("نقص lang على html", "Missing lang on html")}</span>
                <span className="tag-code">A-01</span>
              </div>
              <div className="funnel-tag issue f2">
                <span className="tag-ic warn"><AlertTriangle /></span>
                <span>{t("LCP يتجاوز 3 ثوان", "LCP exceeds 3 seconds")}</span>
                <span className="tag-code">P-02</span>
              </div>
              <div className="funnel-tag issue f3">
                <span className="tag-ic"><AlertCircle /></span>
                <span>{t("تباين ألوان منخفض", "Low color contrast")}</span>
                <span className="tag-code">A-12</span>
              </div>
              <div className="funnel-tag issue f4">
                <span className="tag-ic warn"><AlertTriangle /></span>
                <span>{t("Alt نصي مفقود", "Missing alt text")}</span>
                <span className="tag-code">A-03</span>
              </div>
              <div className="funnel-tag issue f5">
                <span className="tag-ic"><AlertOctagon /></span>
                <span>{t("نموذج بدون label", "Form without label")}</span>
                <span className="tag-code">F-04</span>
              </div>
            </div>

            {/* Center filter — Mutabiq's audit portal. Bar carries
                traveling scan streaks (Sci-Fi field-of-view feel),
                badge wears a 14s SVG progress ring, status chip +
                count summary anchor the "what just happened" story,
                and 5 particle-burst nodes fire on each issue's
                dissolution moment. */}
            <div className="funnel-core">
              <span className="funnel-core-bar">
                <span className="funnel-core-streak funnel-core-streak-1" aria-hidden />
                <span className="funnel-core-streak funnel-core-streak-2" aria-hidden />
              </span>
              <span className="funnel-core-glow" />
              {/* Minimal circular progress — single thin stroke that
                  fills 0→100% over 14s. No track, no glow — just a
                  quiet timing indicator around the M badge. */}
              <svg className="funnel-core-ring" viewBox="0 0 88 88" aria-hidden>
                <circle className="funnel-core-ring-progress" cx="44" cy="44" r="40" />
              </svg>
              <span className="funnel-core-badge" title={t("مُطابق", "Mutabiq")}>
                <BrandMark />
              </span>
              {/* Status chip above the badge — small "live" tag */}
              <span className="funnel-core-status" aria-live="polite">
                <span className="funnel-core-status-dot" aria-hidden />
                <span>{t("يعالج · ٢ نشطة", "Processing · 2 active")}</span>
              </span>
              {/* Transformation summary below the badge — anchors the
                  "5 violations → 0" story. Right number animates from
                  5 down to 0 across the cycle to mirror the absorption. */}
              <span className="funnel-core-summary" aria-label="five violations transformed to zero">
                <b className="funnel-core-summary-from">{t("٥", "5")}</b>
                <span className="funnel-core-summary-arrow" aria-hidden>→</span>
                <b className="funnel-core-summary-to">{t("٠", "0")}</b>
                <span className="funnel-core-summary-label">{t("مخالفة", "violations")}</span>
              </span>
              {/* Particle bursts — five small shockwave nodes timed to
                  fire at each issue tag's dissolution moment (90% of
                  the issue's 14s cycle). Provides the satisfying
                  visual climax of "issue absorbed into the portal". */}
              <span className="funnel-core-burst funnel-core-burst-1" aria-hidden />
              <span className="funnel-core-burst funnel-core-burst-2" aria-hidden />
              <span className="funnel-core-burst funnel-core-burst-3" aria-hidden />
              <span className="funnel-core-burst funnel-core-burst-4" aria-hidden />
              <span className="funnel-core-burst funnel-core-burst-5" aria-hidden />
            </div>

            {/* End side (RTL left) — clean DGA-Advanced report */}
            <div className="funnel-side funnel-out">
              <div className="funnel-side-label funnel-side-label-ok">
                <BadgeCheck />
                {t("بعد · DGA Advanced", "After · DGA Advanced")}
              </div>
              <div className="funnel-scorecard">
                <div className="funnel-sc-head">
                  <span className="funnel-sc-brand">
                    <BadgeCheck />
                    {t("تقرير DGA", "DGA Report")}
                  </span>
                  <span className="funnel-sc-meta">DXMI 2026 · v5.0</span>
                </div>
                <div className="funnel-sc-score">
                  <div className="funnel-sc-num">
                    {/* Counter climb — five stacked spans share the same
                        position. Opacity keyframes swap which one is
                        visible, simulating a 36 → 51 → 72 → 88 → 92
                        climb each cycle. The final value (92) holds for
                        most of the cycle, so the "after" state dominates. */}
                    <span className="funnel-sc-num-value">
                      <span className="counter-stage stage-1" aria-hidden>36</span>
                      <span className="counter-stage stage-2" aria-hidden>51</span>
                      <span className="counter-stage stage-3" aria-hidden>72</span>
                      <span className="counter-stage stage-4" aria-hidden>88</span>
                      <span className="counter-stage stage-5">92</span>
                    </span>
                    <span className="funnel-sc-num-trend">
                      <span className="funnel-sc-trend-arrow">↑</span>
                      <span>+24</span>
                    </span>
                  </div>
                  <div className="funnel-sc-label">
                    <span className="funnel-sc-tier">
                      <span className="funnel-sc-tier-dot" />
                      DGA Advanced
                    </span>
                    <span className="funnel-sc-sublabel">DXMI Score</span>
                  </div>
                </div>
                <ul className="funnel-sc-bars">
                  <li>
                    <span className="funnel-sc-bar-label">{t("الإتاحة", "Accessibility")}</span>
                    <span className="funnel-sc-bar-track"><span className="funnel-sc-bar-fill" style={{ width: "94%" }} /></span>
                    <span className="funnel-sc-bar-value">94</span>
                  </li>
                  <li>
                    <span className="funnel-sc-bar-label">{t("الأداء", "Performance")}</span>
                    <span className="funnel-sc-bar-track"><span className="funnel-sc-bar-fill" style={{ width: "90%" }} /></span>
                    <span className="funnel-sc-bar-value">90</span>
                  </li>
                  <li>
                    <span className="funnel-sc-bar-label">{t("التقنية", "Technology")}</span>
                    <span className="funnel-sc-bar-track"><span className="funnel-sc-bar-fill" style={{ width: "96%" }} /></span>
                    <span className="funnel-sc-bar-value">96</span>
                  </li>
                </ul>
                <div className="funnel-sc-foot">
                  <span className="funnel-sc-foot-dot" />
                  {t("تم التحقق · موقع مُطابق", "Verified · Compliant site")}
                </div>
              </div>
              <div className="funnel-tag ok o1">
                <span className="tag-ic"><Check /></span>
                <span>{t("lang سليم", "lang valid")}</span>
              </div>
              <div className="funnel-tag ok o2">
                <span className="tag-ic"><Check /></span>
                <span>LCP ‎0.9s‎</span>
              </div>
              <div className="funnel-tag ok o3">
                <span className="tag-ic"><Check /></span>
                <span>{t("تباين 7:1", "Contrast 7:1")}</span>
              </div>
              <div className="funnel-tag ok o4">
                <span className="tag-ic"><Check /></span>
                <span>{t("Alt كامل", "Alt complete")}</span>
              </div>
              <div className="funnel-tag ok o5">
                <span className="tag-ic"><BadgeCheck /></span>
                <span>DGA Advanced</span>
              </div>
            </div>

            {/* Particle stream — small green dots flow from the mock
                browser (right) through the center bar to the score card
                (left), suggesting "data being processed through the
                filter". 8 particles staggered for a continuous stream. */}
            <div className="funnel-particles" aria-hidden>
              <span className="funnel-particle p1" />
              <span className="funnel-particle p2" />
              <span className="funnel-particle p3" />
              <span className="funnel-particle p4" />
              <span className="funnel-particle p5" />
              <span className="funnel-particle p6" />
              <span className="funnel-particle p7" />
              <span className="funnel-particle p8" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works — 4 steps (hidden) */}
      {false && (
        <section className="s">
          <div className="wrap">
            <div className="s-head" data-reveal>
              <div className="s-kicker">{t("002 · كيف يعمل", "002 · How it works")}</div>
              <h2 className="s-title">{t("4 خطوات من الرابط إلى تقرير DGA Advanced", "4 steps from a URL to a DGA Advanced report")}</h2>
              <p className="s-lede">{t("بدون فريق إضافي، بدون استشاريين خارجيين، بدون جداول إكسل ترسلها بالإيميل.", "No extra team, no external consultants, no Excel sheets sent by email.")}</p>
            </div>
            <div className="steps">
              <div className="step">
                <span className="num">1</span>
                <h3>{t("تربط موقعك", "Connect your site")}</h3>
                <p>{t("أدخل رابط الموقع الرسمي. نكتشف الصفحات تلقائيًا وننظّمها في مجموعات — حتى 100 صفحة لكل حملة.", "Enter the official site URL. We discover pages automatically and organize them into groups — up to 100 pages per campaign.")}</p>
              </div>
              <div className="step">
                <span className="num">2</span>
                <h3>{t("ندقّق آليًا", "Audit automatically")}</h3>
                <p>{t("نُطبّق أكثر من 70 قاعدة من DXMI 2026 على موقعك بالعربية — نتيجة لكل قاعدة مع شواهد مرئية ومرجع DGA الرسمي.", "We apply more than 70 DXMI 2026 rules to your site in Arabic — a result for each rule, with visual evidence and an official DGA reference.")}</p>
              </div>
              <div className="step">
                <span className="num">3</span>
                <h3>{t("تقرير ثلاثي الزوايا", "Three-perspective report")}</h3>
                <p>{t("تقرير واحد يخدم 3 جهات: رؤية للمدير، دليل مطابقة للمشتريات، وخطوات علاج تفصيلية للمطور — كله في ملف واحد.", "One report serving 3 audiences: a view for the manager, a compliance checklist for procurement, and detailed remediation steps for the developer — all in a single file.")}</p>
              </div>
              <div className="step">
                <span className="num">4</span>
                <h3>{t("تعيد التدقيق", "Re-audit")}</h3>
                <p>{t("أعد تدقيق صفحة، مجموعة، أو الحملة كاملة. تاريخ كامل ومقارنة درجات حتى تصل لـ Advanced.", "Re-audit a page, a group, or the entire campaign. Complete history and score comparisons until you reach Advanced.")}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Themes strip — DXMI 2026's official 4-axis / 20-theme / 70+
          rule structure. Placed before Lifecycle so the reader sees
          the index's shape before learning how Mutabiq audits it. */}
      <section className="s" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="themes">
            <div>
              <div className="s-kicker" style={{ color: "var(--sa-300)" }}>DXMI 2026</div>
              <h2>{t("4 محاور · 20 ثيمة · +70 قاعدة آلية", "4 axes · 20 themes · +70 automated rules")}</h2>
              <p>
                {t("نقيس موقعك وفق البنية الرسمية لمؤشر نضج التجربة الرقمية: أربعة محاور تتفرّع إلى 20 ثيمة، تغطّيها أكثر من 70 قاعدة آلية مرتبطة مباشرة بالدليل الرسمي.", "We measure your site against the official structure of the Digital Experience Maturity Index: four axes branching into 20 themes, covered by more than 70 automated rules linked directly to the official guide.")}
              </p>
              <a className="btn btn-dark">
                {t("استكشف قواعد DXMI", "Explore DXMI rules")}
                <ArrowLeft />
              </a>
            </div>
            <div className="grid6">
              <div className="t">
                <span className="ic"><Award /></span>
                <div>
                  <b>{t("نضج الخدمة", "Service Maturity")}</b>
                  <span>Service Maturity</span>
                </div>
              </div>
              <div className="t">
                <span className="ic"><Smile /></span>
                <div>
                  <b>{t("رضا المستخدم", "User Satisfaction")}</b>
                  <span>User Satisfaction</span>
                </div>
              </div>
              <div className="t">
                <span className="ic"><MousePointer /></span>
                <div>
                  <b>{t("سهولة الاستخدام", "Usability")}</b>
                  <span>Usability</span>
                </div>
              </div>
              <div className="t">
                <span className="ic"><Network /></span>
                <div>
                  <b>{t("التقنية وتكامل الخدمات", "Technology & Service Integration")}</b>
                  <span>Technology &amp; Service Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle — Plugin + Cloud, 4 stages */}
      <section className="s">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("003 · دورة الحياة الكاملة", "003 · The full lifecycle")}</div>
            <h2 className="s-title">{t("من ", "From ")}<em>{t("فيجما", "Figma")}</em>{t(" إلى ", " to ")}<em>{t("الإنتاج", "production")}</em>{t("، بنفس المعيار", ", by the same standard")}</h2>
            <p className="s-lede">
              {t("المنتجان يتشاركان نفس قاعدة معايير هيئة الحكومة الرقمية — مما يضمن أن ما يُقاس في التصميم هو ذاته ما يُقاس في الإنتاج.", "Both products share the same Digital Government Authority rule base — ensuring that what is measured in design is exactly what is measured in production.")}
            </p>
          </div>
          <div className="lifecycle" data-reveal-stagger>
            <div className="lc plugin" data-reveal>
              <div className="lc-top">
                <div className="lc-stage">
                  <span className="lc-num">1</span>
                  <span className="lc-icon"><Pencil /></span>
                </div>
                <span className="lc-chip plugin">Plugin</span>
              </div>
              <h3>{t("التصميم", "Design")}</h3>
              <p>{t("المصمم يُجري تقييمًا مبكرًا داخل فيجما — ويُصلح المخالفات قبل التسليم.", "The designer runs an early assessment inside Figma — and fixes violations before handoff.")}</p>
              <div className="lc-outcome">
                <Check />
                {t("ينتقل إلى التطوير بأساس مُطابق", "Moves to development on a compliant foundation")}
              </div>
            </div>
            <div className="lc plugin" data-reveal>
              <div className="lc-top">
                <div className="lc-stage">
                  <span className="lc-num">2</span>
                  <span className="lc-icon"><BadgeCheck /></span>
                </div>
                <span className="lc-chip plugin">Plugin</span>
              </div>
              <h3>{t("الموافقة", "Approval")}</h3>
              <p>{t("نتيجة الالتزام تُرفَق مع ملف التصميم، فيدخل التطوير بأساس مُطابق.", "The compliance result is attached to the design file, so development starts on a compliant foundation.")}</p>
              <div className="lc-outcome">
                <Check />
                {t("إثبات التزام مرفق بالتصميم", "Compliance proof attached to the design")}
              </div>
            </div>
            <div className="lc cloud" data-reveal>
              <div className="lc-top">
                <div className="lc-stage">
                  <span className="lc-num">3</span>
                  <span className="lc-icon"><Rocket /></span>
                </div>
                <span className="lc-chip cloud">Cloud</span>
              </div>
              <h3>{t("الإطلاق", "Launch")}</h3>
              <p>{t("بعد النشر، مُطابق كلاود يُجري تدقيقًا شاملًا للموقع كاملًا قبل التقييم الرسمي.", "After publishing, Mutabiq Cloud runs a comprehensive audit of the full site before the official assessment.")}</p>
              <div className="lc-outcome">
                <Check />
                {t("درجة DGA Advanced قبل التقييم", "A DGA Advanced score before the assessment")}
              </div>
            </div>
            <div className="lc cloud" data-reveal>
              <div className="lc-top">
                <div className="lc-stage">
                  <span className="lc-num">4</span>
                  <span className="lc-icon"><Activity /></span>
                </div>
                <span className="lc-chip cloud">Cloud</span>
              </div>
              <h3>{t("المراقبة", "Monitoring")}</h3>
              <p>{t("تدقيق دوري مستمر يحفظ مستوى الالتزام مع كل تحديث ويرصد أي تراجع فورًا.", "Continuous periodic auditing maintains the compliance level with every update and detects any regression instantly.")}</p>
              <div className="lc-outcome">
                <Check />
                {t("إنذار فوري عند أي تراجع", "Instant alert on any regression")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plugin Showcase — 6 shipped features in Figma plugin */}
      <section className="s prod-section prod-plugin" data-spotlight>
        <span className="prod-bg-orb orb-a" aria-hidden />
        <span className="prod-bg-orb orb-b" aria-hidden />
        <div className="wrap">
          <div className="s-head prodsec-head" data-reveal>
            <div className="prod-meta">
              <span className="prod-platform-chip" title="Mutabiq for Figma">
                <FigmaMark />
                <span>Figma Plugin</span>
              </span>
              <span className="prod-status live">
                <span className="dot" />
                {t("متاح الآن · v1.0", "Available now · v1.0")}
              </span>
              <span className="prod-num">004 · Mutabiq for Figma</span>
            </div>
            <h2 className="s-title">
              {t("المصمم يُسلّم بـ ", "Designers hand off with ")}<em>{t("أساس مُطابق", "a compliant foundation")}</em>
            </h2>
            <p className="s-lede">
              {t("أربع قدرات تشتغل داخل Figma — من الـ Lint إلى التقييم متعدد الأبعاد إلى الإصلاح الفوري، بدون مغادرة بيئة التصميم.", "Four capabilities running inside Figma — from Lint to multi-dimensional assessment to instant fixes, without leaving the design environment.")}
            </p>
          </div>
          <div className="prod-feat prod-bento" data-reveal-stagger>
            <div className="pf-card pf-card-hero" data-reveal>
              <span className="pf-ic"><ListChecks /></span>
              <div className="pf-stat">
                <span className="pf-num" data-counter="80">80</span>
                <span className="pf-unit">{t("قاعدة Lint عبر 17 prefix", "Lint rules across 17 prefixes")}</span>
              </div>
              <h3>{t("80 قاعدة Lint داخل Figma — مرتبطة بـ DGA", "80 Lint rules inside Figma — linked to DGA")}</h3>
              <p>{t("تغطية شاملة: Tokens · Accessibility · RTL · Typography · Forms · Navigation · Layout · Buttons · Data Display · Feedback. كل قاعدة بوصف عربي/إنجليزي، severity واضح، وأمثلة كود قابلة للنسخ — صُمّمت خصيصًا لـ DGA Platforms Code.", "Comprehensive coverage: Tokens · Accessibility · RTL · Typography · Forms · Navigation · Layout · Buttons · Data Display · Feedback. Each rule has an Arabic/English description, a clear severity, and copy-paste code samples — built specifically for the DGA Platforms Code.")}</p>
              <ul className="pf-hero-chips">
                <li>Tokens</li>
                <li>Accessibility</li>
                <li>RTL</li>
                <li>Typography</li>
                <li>Forms</li>
                <li>+12 prefix</li>
              </ul>
            </div>
            <div className="pf-card" data-reveal>
              <span className="pf-ic"><Gauge /></span>
              <div className="pf-stat">
                <span className="pf-num" data-counter="3">3</span>
                <span className="pf-unit">{t("درجات", "scores")}</span>
              </div>
              <h3>{t("تقييم متعدد الأبعاد", "Multi-dimensional assessment")}</h3>
              <p>{t("DGA Compliance · Accessibility · UX — لكل Frame، بنظام Exponential Decay وتفصيل لكل قاعدة.", "DGA Compliance · Accessibility · UX — for every Frame, with an Exponential Decay system and a breakdown per rule.")}</p>
              <span className="pf-tag">per frame</span>
            </div>
            <div className="pf-card" data-reveal>
              <span className="pf-ic"><Wrench /></span>
              <div className="pf-stat">
                <span className="pf-num pf-num-text">Auto-Fix</span>
                <span className="pf-unit">+ Undo</span>
              </div>
              <h3>{t("إصلاح بنقرة", "One-click fix")}</h3>
              <p>{t("الألوان والـ Fills تُصلَح آليًا لأقرب DGA Token، مع Undo حتى ٣ مستويات.", "Colors and Fills are automatically corrected to the nearest DGA Token, with up to 3 levels of Undo.")}</p>
              <span className="pf-tag">3-level undo</span>
            </div>
            <div className="pf-card pf-card-wide" data-reveal>
              <span className="pf-ic"><Languages /></span>
              <div className="pf-stat">
                <span className="pf-num pf-num-text">AR/EN</span>
                <span className="pf-unit">{t("عربي أصيل · RTL كامل · فصحى إدارية", "Native Arabic · full RTL · formal administrative register")}</span>
              </div>
              <h3>{t("أداة عربية أولًا — لا ترجمة آلية", "An Arabic-first tool — not a machine translation")}</h3>
              <p>{t("واجهة البلاجن والتقارير المُصدَّرة (PDF · Excel · Clipboard) كلها بالعربية الفصحى الإدارية، مع دعم RTL في كل عنصر، أرقام عربية-هندية، وbidi formatting سليم — لأن واجهات الجهات الحكومية لا تقبل أقل من ذلك.", "The plugin interface and exported reports (PDF · Excel · Clipboard) are all in formal administrative Arabic, with RTL support on every element, Arabic-Indic numerals, and proper bidi formatting — because government entity interfaces accept nothing less.")}</p>
              <ul className="pf-hero-chips">
                <li>PDF</li>
                <li>Excel</li>
                <li>Clipboard</li>
                <li>RTL native</li>
                <li>BiDi safe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge — visual connector between Plugin and Cloud sections */}
      <div className="prod-bridge" data-reveal>
        <span className="bridge-line" aria-hidden />
        <span className="bridge-text">
          <span className="bridge-icon"><Pencil /></span>
          {t("حيث ينتهي البلاجن، يبدأ الكلاود", "Where the plugin ends, the Cloud begins")}
          <span className="bridge-icon"><Cloud /></span>
        </span>
        <span className="bridge-line" aria-hidden />
      </div>

      {/* Cloud Inventory — 6 features in the SaaS platform */}
      <section className="s prod-section prod-cloud" data-spotlight>
        <span className="prod-bg-orb orb-c" aria-hidden />
        <span className="prod-bg-orb orb-d" aria-hidden />
        <div className="wrap">
          <div className="s-head prodsec-head" data-reveal>
            <div className="prod-meta">
              <span className="prod-status soon">
                <span className="dot" />
                {t("أساسيات شغّالة · إطلاق Q3 2026", "Core capabilities live · launching Q3 2026")}
              </span>
              <span className="prod-num">005 · Mutabiq Cloud</span>
            </div>
            <h2 className="s-title">
              {t("الإنتاج تحت ", "Production under ")}<em>{t("المراقبة الدائمة", "continuous monitoring")}</em>
            </h2>
            <p className="s-lede">
              {t("ست قدرات تُحوّل التدقيق إلى عملية روتينية — من إدخال الموقع، إلى محرّك DGA الرسمي، إلى تقارير ثلاثيّة الجمهور بالعربية الكاملة.", "Six capabilities that turn auditing into a routine process — from site intake, to the official DGA engine, to three-audience reports in fully native Arabic.")}
            </p>
          </div>
          <div className="prod-feat prod-bento" data-reveal-stagger>
            {/* 1 — Engine (hero) */}
            <div className="pf-card cloud pf-card-hero" data-reveal>
              <span className="pf-ic"><BadgeCheck /></span>
              <div className="pf-stat">
                <span className="pf-num pf-num-text">+70</span>
                <span className="pf-unit">{t("قاعدة من DXMI 2026", "rules from DXMI 2026")}</span>
              </div>
              <h3>{t("محرّك DGA-DXMI 2026 الرسمي", "The official DGA-DXMI 2026 engine")}</h3>
              <p>{t("أكثر من 70 قاعدة مكتوبة من معيار DGA-DXMI 2026 الرسمي، موزَّعة على المحاور الأربعة: رضا المستفيد · تجربة المستخدم · القنوات · الثقة والشفافية. كل ملاحظة مرتبطة ببند محدَّد من المعيار، لا تنبيهات بدون مرجع.", "More than 70 rules written from the official DGA-DXMI 2026 standard, distributed across the four axes: Beneficiary Satisfaction · User Experience · Channels · Trust and Transparency. Every finding is linked to a specific clause in the standard — no alerts without a reference.")}</p>
              <ul className="pf-hero-chips">
                <li>{t("BS · رضا المستفيد", "BS · Beneficiary Satisfaction")}</li>
                <li>{t("UX · تجربة المستخدم", "UX · User Experience")}</li>
                <li>{t("CH · القنوات", "CH · Channels")}</li>
                <li>{t("TT · الثقة والشفافية", "TT · Trust & Transparency")}</li>
                <li>{t("+70 قاعدة", "+70 rules")}</li>
                <li>{t("DGA رسمي", "Official DGA")}</li>
              </ul>
            </div>
            {/* 2 — 3 input sources (replaces crawler) */}
            <div className="pf-card cloud" data-reveal>
              <span className="pf-ic"><Network /></span>
              <span className="pf-pill">URL · ZIP · GitHub</span>
              <h3>{t("تدقيق آلي · ٣ مصادر إدخال", "Automated audit · 3 input sources")}</h3>
              <p>{t("ابدأ بـ رابط الموقع (الزحف الذكي يكتشف الصفحات تلقائيًا حتى ١٠٠ صفحة لكل حملة)، أو ارفع ZIP لموقع جاهز، أو اربط GitHub repo مباشرة. نفس المحرّك ونفس القواعد لكل المصادر.", "Start with a site URL (smart crawling discovers pages automatically — up to 100 pages per campaign), upload a ZIP of a finished site, or connect a GitHub repo directly. The same engine and the same rules for every source.")}</p>
              <span className="pf-tag">{t("حتى ١٠٠ صفحة · same-origin · robots.txt", "Up to 100 pages · same-origin · robots.txt")}</span>
            </div>
            {/* 3 — Visual evidence (replaces viewports) */}
            <div className="pf-card cloud" data-reveal>
              <span className="pf-ic"><Camera /></span>
              <span className="pf-pill">{t("لقطة + تحديد العنصر", "Screenshot + element selector")}</span>
              <h3>{t("شواهد بصرية لكل ملاحظة", "Visual evidence for every finding")}</h3>
              <p>{t("كل مخالفة موثَّقة بلقطة شاشة + تحديد دقيق للعنصر داخل الصفحة (CSS selector). المُراجِع يفتح التقرير ويرى مباشرة أين المشكلة، بدون الحاجة لفتح الموقع للتحقق.", "Every violation is documented with a screenshot plus a precise element pointer inside the page (CSS selector). The reviewer opens the report and sees exactly where the issue is, without needing to open the site to verify.")}</p>
              <span className="pf-tag">{t("screenshots + selectors لكل تدقيق", "screenshots + selectors for every audit")}</span>
            </div>
            {/* 4 — Self-eval (hero) */}
            <div className="pf-card cloud pf-card-hero" data-reveal>
              <span className="pf-ic"><ClipboardList /></span>
              <div className="pf-stat">
                <span className="pf-num" data-counter="32">32</span>
                <span className="pf-unit">{t("سؤال موزَّع على المحاور الأربعة", "questions across the four axes")}</span>
              </div>
              <h3>{t("تقييم ذاتي للثيمات التي لا يصلها الفحص الآلي", "Self-assessment for the themes automated checks cannot reach")}</h3>
              <p>{t("استبيان منظَّم بـ 32 سؤال على 13 ثيمة موزَّعة على المحاور الأربعة — لرضا المستفيد وأجزاء من الثقة والشفافية التي لا تقدر الفحوصات الآلية على كشفها. الإجابات محفوظة لكل جهة كدليل، بالعربية والإنجليزية.", "A structured survey of 32 questions across 13 themes distributed over the four axes — covering Beneficiary Satisfaction and parts of Trust & Transparency that automated checks cannot detect. Answers are stored per entity as evidence, in Arabic and English.")}</p>
              <ul className="pf-hero-chips">
                <li>{t("32 سؤال", "32 questions")}</li>
                <li>{t("13 ثيمة", "13 themes")}</li>
                <li>4 perspectives</li>
                <li>per-org evidence</li>
                <li>AR + EN</li>
              </ul>
            </div>
            {/* 5 — 3-audience reports (wide, replaces finding-tracking position) */}
            <div className="pf-card cloud pf-card-wide" data-reveal>
              <span className="pf-ic"><FileText /></span>
              <div className="pf-stat">
                <span className="pf-num" data-counter="3">3</span>
                <span className="pf-unit">{t("تقارير من تشغيل واحد", "reports from a single run")}</span>
              </div>
              <h3>{t("تقرير واحد · ٣ زوايا للجمهور", "One report · 3 audience perspectives")}</h3>
              <p>{t("كل تدقيق يُنتج ثلاثة مخارج في وقت واحد: ", "Every audit produces three outputs at once: ")}<b>{t("لوحة درجات للمدير", "a scorecard for the manager")}</b>{t("، ", ", ")}<b>{t("قائمة مطابقة للمشتريات", "a compliance checklist for procurement")}</b>{t("، و", ", and ")}<b>{t("دليل إصلاح بالكود للمطوّر", "a code-level remediation guide for the developer")}</b>{t(". PDF تنفيذي + Excel سجل تفصيلي + واجهة تفاعلية. كلها بالعربية الفصحى الإدارية مع RTL سليم.", ". Executive PDF + detailed Excel log + interactive web view. All in formal administrative Arabic with proper RTL.")}</p>
              <ul className="pf-hero-chips">
                <li>{t("المدير · لوحة درجات", "Manager · Scorecard")}</li>
                <li>{t("المشتريات · قائمة مطابقة", "Procurement · Compliance checklist")}</li>
                <li>{t("المطوّر · دليل إصلاح", "Developer · Remediation guide")}</li>
                <li>PDF + Excel + Web</li>
                <li>{t("عربية فصحى · RTL", "Formal Arabic · RTL")}</li>
              </ul>
            </div>
            {/* 6 — Audit history + diff (revises versioned scoring) */}
            <div className="pf-card cloud" data-reveal>
              <span className="pf-ic"><Repeat /></span>
              <span className="pf-pill">fixed · stillPresent · added</span>
              <h3>{t("تاريخ تدقيقات قابل للمقارنة", "A comparable audit history")}</h3>
              <p>{t("كل تدقيق محفوظ بدون انتهاء صلاحية. عند إعادة التدقيق، نقسم الملاحظات إلى ثلاث مجموعات على مستوى العنصر نفسه — يبان بالضبط ما اتصلح، وما لا يزال موجودًا، وما هو جديد. تتبّع رحلة الجهة من Below Basic إلى Advanced عبر الزمن.", "Every audit is stored with no expiry. On re-audit, we split findings into three groups at the element level — showing exactly what was fixed, what is still present, and what is new. Track the entity's journey from Below Basic to Advanced over time.")}</p>
              <span className="pf-tag">{t("قبل / بعد لكل قاعدة وكل عنصر", "Before / after for every rule and every element")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Gap Matrix — competitive moat */}
      <section className="s gap-section" data-spotlight>
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("الفجوة في السوق", "The market gap")}</div>
            <h2 className="s-title">
              {t("ما لا تستطيع الأدوات الحالية فعله — ", "What today's tools cannot do — ")}<em>{t("صُمّم مُطابق ليفعله", "Mutabiq was built to do")}</em>
            </h2>
            <p className="s-lede">
              {t("مقارنة صادقة: 7 قدرات تفصل بين أداة تدقيق عامة ومنصة حوكمة DXMI.", "An honest comparison: 7 capabilities that separate a generic audit tool from a DXMI governance platform.")}
            </p>
          </div>
          <div className="gap-matrix" data-reveal>
            <div className="gap-head">
              <div className="gap-h gap-h-cap">{t("القدرة", "Capability")}</div>
              <div className="gap-h gap-h-mkt">{t("الحلول الحالية", "Current solutions")}</div>
              <div className="gap-h gap-h-mtb">
                <span className="gap-h-mark"><BrandMark className="lg gap-h-brand" /></span>
                {t("مُطابق", "Mutabiq")}
              </div>
            </div>
            <ul className="gap-rows" data-reveal-stagger>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><ShieldCheck /></span>
                  <div className="gap-cap-text">
                    <b>{t("حوكمة مرتبطة بـ DXMI", "DXMI-aware governance")}</b>
                    <span>DXMI-aware governance</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label={t("غير متوفر", "Not available")}>
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">{t("+70 قاعدة ↔ 4 محاور", "+70 rules ↔ 4 axes")}</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><Activity /></span>
                  <div className="gap-cap-text">
                    <b>{t("فرض الامتثال فوريًا", "Real-time compliance enforcement")}</b>
                    <span>Real-time compliance enforcement</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label={t("غير متوفر", "Not available")}>
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">{t("داخل Figma + الإنتاج", "Inside Figma + production")}</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><Layers /></span>
                  <div className="gap-cap-text">
                    <b>{t("تكامل مع التصميم والتطوير", "Integration with design & dev workflows")}</b>
                    <span>Integration with design &amp; dev workflows</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-partial">{t("جزئي", "Partial")}</span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">Plugin + Cloud</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><Repeat /></span>
                  <div className="gap-cap-text">
                    <b>{t("مراقبة مستمرة عبر دورة الحياة", "Continuous lifecycle monitoring")}</b>
                    <span>Continuous lifecycle monitoring</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-partial">{t("جزئي", "Partial")}</span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">{t("تدقيق دوري + إنذار التراجع", "Periodic audits + regression alerts")}</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><FileText /></span>
                  <div className="gap-cap-text">
                    <b>{t("محرك قواعد من المعايير الحكومية", "Government standards-to-rules engine")}</b>
                    <span>Government standards-to-rules engine</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label={t("غير متوفر", "Not available")}>
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">{t("DXMI 2026 رسمي", "Official DXMI 2026")}</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><BarChart3 /></span>
                  <div className="gap-cap-text">
                    <b>{t("رؤية حوكمة مركزية", "Centralized governance visibility")}</b>
                    <span>Centralized governance visibility</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-limited">{t("محدود", "Limited")}</span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">{t("3 أدوار · تقرير واحد", "3 roles · one report")}</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><Network /></span>
                  <div className="gap-cap-text">
                    <b>{t("تنسيق حوكمة على مستوى وطني", "National-scale governance orchestration")}</b>
                    <span>National-scale governance orchestration</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label={t("غير متوفر", "Not available")}>
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">{t("جاهز للجهات السيادية", "Ready for sovereign entities")}</span>
                </div>
              </li>
            </ul>
            <p className="gap-strap">
              {t("هذه ليست ميزات — هذه ", "These are not features — this is a ")}<em>{t("فجوة سوق", "market gap")}</em>{t(" صُمّم منتجنا لسدّها.", " our product was built to close.")}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="s">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("لماذا مُطابق", "Why Mutabiq")}</div>
            <h2 className="s-title">{t("منصة امتثال — لا مجرد أداة تدقيق", "A compliance platform — not just an audit tool")}</h2>
            <p className="s-lede">
              {t("رؤية للمديرين، دليل للمشتريات، علاج للمطورين. كل ذلك من تقرير واحد، بالعربية أولًا.", "Visibility for managers, a checklist for procurement, remediation for developers. All from a single report — Arabic first.")}
            </p>
          </div>
          <div className="why-bento" data-reveal-stagger>
            {/* Card 1 — Coverage: rule list mockup */}
            <article className="why-card why-card-coverage" data-reveal>
              <div className="why-mockup">
                <div className="rmock-row">
                  <span className="rmock-id">DGA-A-001</span>
                  <span className="rmock-cat rmock-cat-a">Accessibility</span>
                  <span className="rmock-check"><Check /></span>
                </div>
                <div className="rmock-row">
                  <span className="rmock-id">DGA-M-012</span>
                  <span className="rmock-cat rmock-cat-m">Mandatory</span>
                  <span className="rmock-check"><Check /></span>
                </div>
                <div className="rmock-row">
                  <span className="rmock-id">DGA-D-024</span>
                  <span className="rmock-cat rmock-cat-d">Design</span>
                  <span className="rmock-check"><Check /></span>
                </div>
                <div className="rmock-more">
                  <span>{t("+62 قاعدة", "+62 rules")}</span>
                  <span className="rmock-more-tag">DXMI 2026 V5.0</span>
                </div>
              </div>
              <div className="why-text">
                <h3>{t("تغطية رسمية لـ DXMI 2026", "Official DXMI 2026 coverage")}</h3>
                <p>{t("أكثر من 70 قاعدة عبر المحاور الأربعة، كل قاعدة مرجعها بند رسمي من الدليل V5.0 — ليست قواعد عامة معاد تسميتها.", "More than 70 rules across the four axes, each one referencing an official clause from the V5.0 guide — not generic rules with new names.")}</p>
              </div>
            </article>

            {/* Card 2 — Arabic-first: bilingual rule preview */}
            <article className="why-card why-card-arabic" data-reveal>
              <div className="why-mockup">
                <div className="armock-toggle">
                  <span className="armock-toggle-active">AR</span>
                  <span>EN</span>
                </div>
                <div className="armock-rule">
                  <b>{t("حوكمة مرتبطة بـ DXMI", "DXMI-aware governance")}</b>
                  <span className="armock-en">DXMI-aware governance</span>
                </div>
                <div className="armock-meta">
                  <span className="armock-stat"><span className="armock-num">{t("٦٥", "65")}</span> {t("قاعدة", "rules")}</span>
                  <span className="armock-dot">·</span>
                  <span className="armock-stat"><span className="armock-num">{t("+٢٥٠", "+250")}</span> {t("نص علاج", "remediation texts")}</span>
                </div>
              </div>
              <div className="why-text">
                <h3>{t("عربي أصيل — لا ترجمة آلية", "Native Arabic — not a machine translation")}</h3>
                <p>{t("كل قاعدة وكل علاج بالفصحى الإدارية — RTL كامل، أرقام عربية-هندية، bidi formatting سليم.", "Every rule and every remediation in formal administrative Arabic — full RTL, Arabic-Indic numerals, proper bidi formatting.")}</p>
              </div>
            </article>

            {/* Card 3 — Reports: 3 stacked report layers */}
            <article className="why-card why-card-reports" data-reveal>
              <div className="why-mockup">
                <div className="rpmock-layer rpmock-admin">
                  <div className="rpmock-head">
                    <span className="rpmock-role">{t("المدير", "Manager")}</span>
                    <span className="rpmock-score">85</span>
                  </div>
                  <div className="rpmock-bar"><span style={{width: "85%"}} /></div>
                </div>
                <div className="rpmock-layer rpmock-procure">
                  <span className="rpmock-role">{t("المشتريات", "Procurement")}</span>
                  <ul className="rpmock-checks">
                    <li><Check /> A11y</li>
                    <li><Check /> UX</li>
                    <li><Check /> SEO</li>
                  </ul>
                </div>
                <div className="rpmock-layer rpmock-dev">
                  <span className="rpmock-role">{t("المطور", "Developer")}</span>
                  <code className="rpmock-code">.btn {`{`} color: #006C35 {`}`}</code>
                </div>
              </div>
              <div className="why-text">
                <h3>{t("تقرير واحد · 3 زوايا", "One report · 3 perspectives")}</h3>
                <p>{t("المدير يجد لوحة الدرجات. المشتريات يجد دليل المطابقة. المطور يجد خطوات العلاج بالكود — في ملف PDF واحد.", "The manager finds the scorecard. Procurement finds the compliance checklist. The developer finds the code-level remediation steps — all in a single PDF.")}</p>
              </div>
            </article>

            {/* Card 4 — History: timeline graph */}
            <article className="why-card why-card-history" data-reveal>
              <div className="why-mockup">
                <div className="hmock-tier-labels">
                  <span className="hmock-tier-adv">Advanced</span>
                  <span className="hmock-tier-int">Intermediate</span>
                  <span className="hmock-tier-bas">Basic</span>
                </div>
                <svg className="hmock-graph" viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id="hmock-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="rgba(46, 189, 133, 0.25)" />
                      <stop offset="1" stopColor="rgba(46, 189, 133, 0)" />
                    </linearGradient>
                  </defs>
                  <path d="M 10 60 L 70 45 L 130 25 L 190 10 L 190 80 L 10 80 Z" fill="url(#hmock-fill)" />
                  <path d="M 10 60 L 70 45 L 130 25 L 190 10" className="hmock-line" />
                  <circle cx="10" cy="60" r="3.5" className="hmock-dot" />
                  <circle cx="70" cy="45" r="3.5" className="hmock-dot" />
                  <circle cx="130" cy="25" r="3.5" className="hmock-dot" />
                  <circle cx="190" cy="10" r="4" className="hmock-dot hmock-dot-final" />
                </svg>
                <div className="hmock-x-labels">
                  <span>{t("تشغيل ١", "Run 1")}</span>
                  <span>{t("٢", "2")}</span>
                  <span>{t("٣", "3")}</span>
                  <span>{t("٤", "4")}</span>
                </div>
              </div>
              <div className="why-text">
                <h3>{t("تاريخ كامل · بدون حد", "Complete history · no limit")}</h3>
                <p>{t("كل تدقيق محفوظ بكامل تفاصيله. تتبّع التحسّن من Below Basic حتى Advanced — تشغيلات غير محدودة.", "Every audit is stored in full detail. Track progress from Below Basic up to Advanced — unlimited runs.")}</p>
              </div>
            </article>

            {/* Card 5 — Compliance (WIDE) — 3 pillars */}
            <article className="why-card why-card-compliance why-card-wide" data-reveal>
              <div className="why-mockup why-mockup-compliance">
                <div className="cmock-pillar">
                  <span className="cmock-pillar-ic"><ShieldCheck /></span>
                  <div className="cmock-pillar-head">
                    <b>PDPL</b>
                    <span className="cmock-pillar-status">aligned</span>
                  </div>
                  <p className="cmock-pillar-desc">{t("متوافق مع نظام حماية البيانات الشخصية السعودي.", "Aligned with the Saudi Personal Data Protection Law.")}</p>
                </div>
                <div className="cmock-pillar cmock-pillar-featured">
                  <span className="cmock-pillar-ic"><Lock /></span>
                  <div className="cmock-pillar-head">
                    <b>On-Prem</b>
                    <span className="cmock-pillar-status cmock-pillar-status-featured">{t("للسيادي", "Sovereign")}</span>
                  </div>
                  <p className="cmock-pillar-desc">{t("البيانات الخام تبقى داخل شبكتك — Findings فقط هي اللي تخرج.", "Raw data stays inside your network — only Findings leave it.")}</p>
                </div>
                <div className="cmock-pillar">
                  <span className="cmock-pillar-ic"><FileText /></span>
                  <div className="cmock-pillar-head">
                    <b>SOC 2</b>
                    <span className="cmock-pillar-status">evidence</span>
                  </div>
                  <p className="cmock-pillar-desc">{t("حزمة وثائق الضوابط الأمنية متاحة للمراجعة.", "A security controls documentation pack is available for review.")}</p>
                </div>
              </div>
              <div className="why-text">
                <h3>{t("أمن وامتثال للجهات الحكومية", "Security and compliance for government entities")}</h3>
                <p>{t("متوافق مع نظام حماية البيانات الشخصية (PDPL). خيار on-prem للجهات السيادية — البيانات الخام لا تخرج من شبكتك. SOC 2 evidence pack متاح.", "Aligned with the Personal Data Protection Law (PDPL). On-prem option for sovereign entities — raw data does not leave your network. SOC 2 evidence pack available.")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Paradigm shift — proves the "platform, not a tool" claim from
          the section above with six concrete before/after pairs that
          map to DXMI 2026 workflow reality. Layout is a 3-column grid
          [old | axis | new] that, in RTL flow, reads naturally as
          "start = before → end = after". The center axis carries a
          leftward arrow at the head (RTL reading direction) and a soft
          vertical thread between rows so the six pairs read as one
          continuous movement, not isolated bullets. */}
      <section className="s shift">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("نقلة النموذج", "Paradigm shift")}</div>
            <h2 className="s-title">
              {t("من امتثال موسمي… إلى ", "From seasonal compliance… to a ")}<em>{t("منظومة مستمرة", "continuous system")}</em>
            </h2>
            <p className="s-lede">
              {t("مُطابق ليس أداةً بديلة في نفس المسار القديم — هو تحوّل في منظومة الامتثال نفسها. ست نقلات جوهرية تظهر في كل دورة عمل.", "Mutabiq is not a replacement tool inside the same old workflow — it is a shift in the compliance system itself. Six fundamental shifts that appear in every cycle of work.")}
            </p>
          </div>

          <div className="shift-board">
            {/* Column headers */}
            <div className="shift-col-head shift-old-head" data-reveal>
              <span className="shift-tag">{t("قبل", "Before")}</span>
              <h3>{t("الطريقة القديمة", "The old way")}</h3>
            </div>
            <div className="shift-axis-head" aria-hidden>
              <ArrowLeft className="shift-arrow" />
            </div>
            <div className="shift-col-head shift-new-head" data-reveal>
              <span className="shift-tag">{t("مع مُطابق", "With Mutabiq")}</span>
              <h3>{t("منظومة الامتثال المستمر", "Continuous compliance system")}</h3>
            </div>

            {/* Row 1 — Cadence: seasonal → continuous */}
            <div className="shift-cell shift-old" data-reveal>
              <span className="shift-ic"><Clock /></span>
              <div className="shift-body">
                <b>{t("تقييم موسمي مرّة في السنة", "A seasonal assessment once a year")}</b>
                <p>{t("سباق متأخر مع موعد زيارة الهيئة، وقرارات إصلاح تحت ضغط الوقت.", "A late race against the Authority's visit date, with remediation decisions made under time pressure.")}</p>
              </div>
            </div>
            <div className="shift-line" aria-hidden></div>
            <div className="shift-cell shift-new" data-reveal>
              <span className="shift-ic"><Repeat /></span>
              <div className="shift-body">
                <b>{t("امتثال مستمر داخل كل دورة عمل", "Continuous compliance inside every work cycle")}</b>
                <p>{t("كل تغيير في الموقع يُفحَص فور حدوثه — قبل أن يتحوّل إلى مخالفة مؤجَّلة.", "Every change to the site is checked as it happens — before it turns into a deferred violation.")}</p>
              </div>
            </div>

            {/* Row 2 — Roles: self-assessment vs DGA = chaos → two-track unified */}
            <div className="shift-cell shift-old" data-reveal>
              <span className="shift-ic"><Unlink /></span>
              <div className="shift-body">
                <b>{t("تقييم ذاتي يتعارض مع تقييم الهيئة", "Self-assessment that conflicts with the Authority's assessment")}</b>
                <p>{t("الجهة تقيس بطريقة، والمقيِّم بأخرى — والنتيجتان لا تتطابقان.", "The entity measures one way and the assessor measures another — and the two results don't match.")}</p>
              </div>
            </div>
            <div className="shift-line" aria-hidden></div>
            <div className="shift-cell shift-new" data-reveal>
              <span className="shift-ic"><Network /></span>
              <div className="shift-body">
                <b>{t("مساران بنفس المعيار · نتيجة قابلة للمقارنة", "Two tracks on the same standard · a comparable result")}</b>
                <p>{t("التقييم الذاتي وتقييم الهيئة من نفس محرّك DXMI 2026 — صفر فجوة قياس.", "Self-assessment and the Authority's assessment from the same DXMI 2026 engine — zero measurement gap.")}</p>
              </div>
            </div>

            {/* Row 3 — Change mgmt: surprise updates → versioned with grace */}
            <div className="shift-cell shift-old" data-reveal>
              <span className="shift-ic"><AlertTriangle /></span>
              <div className="shift-body">
                <b>{t("تحديثات المعيار تأتي كمفاجأة", "Standard updates arrive as a surprise")}</b>
                <p>{t("بنود جديدة تظهر في التقييم بلا مهلة استعداد — فتتحوّل إلى مخالفات فورية.", "New clauses appear in the assessment with no preparation window — turning into immediate violations.")}</p>
              </div>
            </div>
            <div className="shift-line" aria-hidden></div>
            <div className="shift-cell shift-new" data-reveal>
              <span className="shift-ic"><BadgeCheck /></span>
              <div className="shift-body">
                <b>{t("إصدارات مرقَّمة مع مهلة سماح", "Versioned releases with a grace period")}</b>
                <p>{t("كل تحديث في DXMI يصل بإصداره ومدّة التطبيق — جدول واضح يُتيح التحضير المسبق.", "Every DXMI update arrives with its version number and effective date — a clear schedule that enables advance preparation.")}</p>
              </div>
            </div>

            {/* Row 4 — Data: Excel/email scatter → single source of truth */}
            <div className="shift-cell shift-old" data-reveal>
              <span className="shift-ic"><FileText /></span>
              <div className="shift-body">
                <b>{t("تتبّع في Excel وإيميلات منثورة", "Tracking in Excel and scattered emails")}</b>
                <p>{t("كل جهة تبني ملفّاتها بطريقتها، والملاحظات تضيع بين الإصدارات والمراسلات.", "Every entity builds its own files its own way, and findings get lost between versions and email threads.")}</p>
              </div>
            </div>
            <div className="shift-line" aria-hidden></div>
            <div className="shift-cell shift-new" data-reveal>
              <span className="shift-ic"><Layers /></span>
              <div className="shift-body">
                <b>{t("مصدر واحد للحقيقة · تاريخ بدون حد", "A single source of truth · history with no limit")}</b>
                <p>{t("كل تشغيل، كل ملاحظة، كل إصلاح — في خيط واحد متّصل قابل للمقارنة عبر السنوات.", "Every run, every finding, every fix — in one connected thread, comparable across years.")}</p>
              </div>
            </div>

            {/* Row 5 — Process: disputes drag → structured workflows */}
            <div className="shift-cell shift-old" data-reveal>
              <span className="shift-ic"><Scale /></span>
              <div className="shift-body">
                <b>{t("اعتراضات تطول لأشهر بلا قالب", "Disputes that drag on for months without a template")}</b>
                <p>{t("الردود تنتقل بين الإيميل والاجتماعات — بلا تسلسل موثَّق ولا مدّة محسومة.", "Responses bounce between email and meetings — with no documented sequence and no defined timeline.")}</p>
              </div>
            </div>
            <div className="shift-line" aria-hidden></div>
            <div className="shift-cell shift-new" data-reveal>
              <span className="shift-ic"><ClipboardList /></span>
              <div className="shift-body">
                <b>{t("مسار اعتراض هيكلي بشواهد ومُدَد", "A structured dispute path with evidence and timelines")}</b>
                <p>{t("كل اعتراض له شاهد بصري، ومرجع بنديّ، ومسار حسم محدّد الزمن.", "Every dispute has visual evidence, a clause reference, and a time-bound resolution path.")}</p>
              </div>
            </div>

            {/* Row 6 — Culture: punishment → enablement (closer) */}
            <div className="shift-cell shift-old" data-reveal>
              <span className="shift-ic"><AlertOctagon /></span>
              <div className="shift-body">
                <b>{t("الامتثال = عقوبة بعد الحدث", "Compliance = punishment after the fact")}</b>
                <p>{t("الموارد تُصرف على إصلاح المخالفات الظاهرة، لا على رفع نضج المنصّة فعلًا.", "Resources are spent fixing surface-level violations, not actually raising the platform's maturity.")}</p>
              </div>
            </div>
            <div className="shift-line" aria-hidden></div>
            <div className="shift-cell shift-new" data-reveal>
              <span className="shift-ic"><Rocket /></span>
              <div className="shift-body">
                <b>{t("الامتثال = تمكين قبل الحدث", "Compliance = enablement before the fact")}</b>
                <p>{t("الفريق يرى الفجوة وهي صغيرة، فيُصلحها كجزء من العمل اليومي — لا كأزمة.", "The team sees the gap while it's small and fixes it as part of daily work — not as a crisis.")}</p>
              </div>
            </div>
          </div>

          {/* Closing strap — punch line that summarizes the section's
              thesis: we don't add a tool on top of broken systems, we
              redesign the system itself. */}
          <div className="shift-strap" data-reveal>
            <p>
              {t("ست نقلات · في طريقة عمل واحدة. لا نضيف ", "Six shifts · in a single way of working. We don't add ")}<em>{t("أداةً جديدة", "another tool")}</em>{t(" فوق الفوضى — نُعيد تصميم", " on top of the chaos — we redesign")}
              <em>{t(" المنظومة ", " the system ")}</em>{t("نفسها.", "itself.")}
            </p>
          </div>
        </div>
      </section>

      {/* Authority section — flips the lens: Mutabiq isn't just a tool
          FOR entities, it's infrastructure that ENABLES the regulator
          itself. Two-role split (Regulator + Publisher) with a central
          DGA-badged axis, closed by a strong conclusion strap. The
          section's strategic weight comes from positioning, not flash. */}
      <section className="s authority">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("الفرق الجوهري", "The essential difference")}</div>
            <h2 className="s-title">
              {t("كيف تستخدم ", "How the ")}<em>{t("هيئة الحكومة الرقمية", "Digital Government Authority")}</em>{t(" مُطابق", " uses Mutabiq")}
            </h2>
            <p className="s-lede">
              {t("تحدّثنا حتى الآن عن كيف يخدم مُطابق الجهات. هنا نقلب العدسة: مُطابق ليس أداةً للجهات وحدها — بل بنية تحتية تُمكِّن الهيئة نفسها من ممارسة دورَيها التنظيمي والمعرفي بكفاءة أعلى.", "Up to here we've talked about how Mutabiq serves the entities. Now we flip the lens: Mutabiq is not a tool for entities alone — it is infrastructure that empowers the Authority itself to perform both its regulatory and knowledge roles more effectively.")}
            </p>
          </div>

          <div className="authority-grid" data-reveal-stagger>
            {/* Role 1 — Regulator (DGA green) */}
            <article className="authority-role authority-role-regulator" data-reveal>
              <header className="authority-role-head">
                <span className="authority-role-badge">{t("الدور الأول", "Role one")}</span>
                <h3>{t("كهيئة منظِّمة ومراقِبة", "As a regulatory and supervisory authority")}</h3>
              </header>
              <ul className="authority-cap-list">
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Gauge /></span>
                  <div>
                    <b>{t("لوحة قيادة موحَّدة", "A unified dashboard")}</b>
                    <p>{t("نظرة فورية لحالة كل المنصات الـ ٦١ في شاشة واحدة.", "An instant view of all 61 platforms' status on a single screen.")}</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Repeat /></span>
                  <div>
                    <b>{t("تقييم مستمرّ بدل سنوي", "Continuous assessment instead of annual")}</b>
                    <p>{t("فحص آلي أسبوعي يكشف الانحراف فور حدوثه.", "A weekly automated check that detects drift the moment it happens.")}</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Scale /></span>
                  <div>
                    <b>{t("منهجية موحَّدة قابلة للمقارنة", "A unified, comparable methodology")}</b>
                    <p>{t("كل تقرير يستخدم نفس المرجعيّة — فروق صادقة بين الجهات.", "Every report uses the same reference — honest differences between entities.")}</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><ClipboardList /></span>
                  <div>
                    <b>{t("سجلّ تدقيق كامل", "A complete audit log")}</b>
                    <p>{t("كل اكتشاف، كل إصلاح، كل تحديث موثَّق ومتتبَّع زمنيًا.", "Every finding, every fix, every update is documented and tracked over time.")}</p>
                  </div>
                </li>
              </ul>
            </article>

            {/* Central axis — visual spine connecting both roles, anchored
                by a DGA badge that signals "the Authority itself". */}
            <div className="authority-axis" aria-hidden>
              <span className="authority-axis-bar" />
              <span className="authority-axis-badge">
                <span>DGA</span>
              </span>
            </div>

            {/* Role 2 — Publisher (warm amber) */}
            <article className="authority-role authority-role-publisher" data-reveal>
              <header className="authority-role-head">
                <span className="authority-role-badge">{t("الدور الثاني", "Role two")}</span>
                <h3>{t("كناشِرة للمعايير", "As a publisher of standards")}</h3>
              </header>
              <ul className="authority-cap-list">
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Activity /></span>
                  <div>
                    <b>{t("نشر فوري لأي تحديث", "Instant publication of any update")}</b>
                    <p>{t("تُحدِّثون قاعدة، يصل التنبيه لكل المصمّمين والمطوّرين خلال أسبوع.", "You update a rule, the alert reaches every designer and developer within a week.")}</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><AlertCircle /></span>
                  <div>
                    <b>{t("ترجمة المعيار إلى تنبيه", "Translating the standard into an alert")}</b>
                    <p>{t("بدل وثيقة ٩٠ صفحة، يصل المعيار كرسالة محدّدة وقت العمل.", "Instead of a 90-page document, the standard arrives as a precise message at the moment of work.")}</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Smile /></span>
                  <div>
                    <b>{t("قناة وصول بدون تدريب", "A reach channel without training")}</b>
                    <p>{t("لا حاجة لبرامج توعية ضخمة — الأداة هي الوسيط التعليمي.", "No need for large awareness programs — the tool itself is the educational medium.")}</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><BarChart3 /></span>
                  <div>
                    <b>{t("بيانات تغذية راجعة", "Feedback data")}</b>
                    <p>{t("أيّ معيار غير قابل للتطبيق يظهر في إحصاءاتنا — تَعرفونه فور وقوعه.", "Any standard that isn't practically applicable shows up in our statistics — you know about it the moment it happens.")}</p>
                  </div>
                </li>
              </ul>
            </article>
          </div>

          {/* Conclusion strap — the section's punch line, weighted in
              dark DGA green so it reads as a definitive statement. */}
          <div className="authority-strap" data-reveal>
            <span className="authority-strap-mark" aria-hidden>“</span>
            <p>
              <b>{t("الخلاصة:", "The bottom line:")}</b>
              {t(" مُطابق ليس عميلًا للهيئة — بل", " Mutabiq is not a vendor to the Authority — it is")}
              <em>{t(" امتدادٌ تشغيليّ لذراعها التنظيميّ والمعرفيّ.", " an operational extension of its regulatory and knowledge arm.")}</em>
            </p>
          </div>
        </div>
      </section>

      {/* Four direct benefits — the tangible-value follow-up to the
          Authority section. Strategic positioning landed; this section
          translates it into 4 concrete things DGA gains by partnering. */}
      <section className="s benefits">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("القيمة لكم", "The value for you")}</div>
            <h2 className="s-title">{t("أربع منافع مباشرة", "Four direct benefits")}</h2>
            <p className="s-lede">
              {t("ما الذي تكسبه الهيئة من شراكة معنا — أربع منافع تشغيلية مرتبطة مباشرة بدور الهيئة التنظيمي والمعرفي.", "What the Authority gains from a partnership with us — four operational benefits tied directly to the Authority's regulatory and knowledge role.")}
            </p>
          </div>

          <div className="benefits-grid" data-reveal-stagger>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">01</div>
              <div className="benefit-card-body">
                <h3>{t("ارتفاع نضج المنصات", "Higher platform maturity")}</h3>
                <p>{t("كل جهة تستخدم مُطابق تصل للتقييم وهي جاهزة — أعلى متوسط، أسرع تقدّم سنوي.", "Every entity using Mutabiq arrives at the assessment ready — a higher average and faster year-over-year progress.")}</p>
              </div>
            </article>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">02</div>
              <div className="benefit-card-body">
                <h3>{t("تقصير دورة التقييم", "A shorter assessment cycle")}</h3>
                <p>{t("الملاحظات تُكتشف قبل الزيارة — يقلّ عدد التذاكر المتأخّرة وزمن المراجعة.", "Findings are detected before the visit — fewer late tickets and shorter review time.")}</p>
              </div>
            </article>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">03</div>
              <div className="benefit-card-body">
                <h3>{t("امتداد ذراع التوعية", "An extension of the awareness arm")}</h3>
                <p>{t("تنشرون المعيار، وننقله إلى المصمّم والمطوّر يوميًا — قناة وصول بدون ميزانية تدريب.", "You publish the standard, we deliver it to the designer and developer every day — a reach channel without a training budget.")}</p>
              </div>
            </article>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">04</div>
              <div className="benefit-card-body">
                <h3>{t("بيانات قابلة للمقارنة", "Comparable data")}</h3>
                <p>{t("تقارير امتثال موحَّدة الشكل عبر الجهات — مع الحفاظ على عزل بياناتي صارم.", "Compliance reports with a unified format across entities — while maintaining strict data isolation.")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Impact — stats (hidden) */}
      {false && (
        <section className="s" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="s-head" data-reveal>
              <div className="s-kicker">{t("الأثر", "Impact")}</div>
              <h2 className="s-title">{t("أرقام تترجم القيمة", "Numbers that translate value")}</h2>
              <p className="s-lede">{t("ليست شعارات تسويقية — هذه هي حدود ما يقدّمه مُطابق اليوم، بالأرقام.", "Not marketing slogans — these are the limits of what Mutabiq delivers today, in numbers.")}</p>
            </div>
            <div className="impact">
              <div className="impact-grid">
                <div className="impact-cell">
                  <b>+70</b>
                  <span>{t("قاعدة آلية بالعربية — مرتبطة ببنود DXMI 2026 الرسمية", "Automated rules in Arabic — linked to the official DXMI 2026 clauses")}</span>
                </div>
                <div className="impact-cell">
                  <b>100%</b>
                  <span>{t("عربي أصيل — لا ترجمة آلية، فصحى إدارية", "Native Arabic — no machine translation, formal administrative register")}</span>
                </div>
                <div className="impact-cell">
                  <b>100</b>
                  <span>{t("صفحة لكل حملة — موقعك كاملًا، لا عيّنات", "Pages per campaign — your entire site, not samples")}</span>
                </div>
                <div className="impact-cell">
                  <b>3</b>
                  <span>{t("تقارير من تشغيل واحد — مدير، مشتريات، مطور", "Reports from a single run — manager, procurement, developer")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stakes — what's at risk */}
      <section className="s" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stakes">
            <span className="ic">
              <AlertCircle />
            </span>
            <div>
              <blockquote>
                {t("التقييم السنوي للهيئة لا يعطي فرصة ثانية.", "The Authority's annual assessment doesn't give a second chance.")}
              </blockquote>
              <p>
                {t("في كل دورة تقييم، جهات كثيرة تخسر مستواها بدون إنذار مبكر — والعودة تتطلب سنة كاملة من العمل. مُطابق يكشف الفجوات الآن، حين تستطيع إصلاحها قبل أن يراها المقيّم.", "In every assessment cycle, many entities lose their tier without any early warning — and recovery takes a full year of work. Mutabiq surfaces the gaps now, while you can still fix them before the assessor sees them.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — split layout: intro on RTL start (right), card list on
          RTL end (left). 6 native <details> accordion cards with
          chevron toggles. Each open card glows with sa-tinted bg. */}
      <section className="s faq">
        <div className="wrap">
          <div className="faq-layout">
            {/* RTL start (right): intro column */}
            <div className="faq-intro" data-reveal>
              <div className="faq-kicker">
                <span className="faq-kicker-ic" aria-hidden>+</span>
                <span>{t("أسئلة شائعة", "Frequently asked questions")}</span>
              </div>
              <h2 className="faq-title">
                {t("ستة أسئلة", "Six questions")}
                <em>{t("نسمعها كثيرًا", "we hear often")}</em>
              </h2>
              <p className="faq-desc">
                {t("إجابات مفصَّلة على أبرز ما يَشغل فرق الجهات الحكومية قبل البدء. أجوبتنا واضحة ومتاحة للنقاش معكم في أيّ جلسة.", "Detailed answers to the main concerns of government entity teams before they begin. Our answers are clear and open for discussion with you in any session.")}
              </p>
            </div>

            {/* RTL end (left): collapsible FAQ cards */}
            <div className="faq-list" data-reveal>
              <details className="faq-card" name="faq" open>
                <summary className="faq-summary">
                  <span className="faq-q-text">{t("كيف نضمن أنّ مُطابق يعكس آخر تحديث في معاييركم؟", "How do we ensure Mutabiq reflects the latest update to your standards?")}</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    {t("قاعدة DGA-DXMI 2026 موثَّقة في كودنا — كل قاعدة مرجعها بند رسمي محدَّد (مثلاً V5.0 من DGA-1-2-1-229). أيّ تحديث تُصدِره الهيئة نلتزم بدمجه خلال أسبوعين، مع سجلّ تغييرات قابل للمراجعة لكل قاعدة.", "The DGA-DXMI 2026 rule base is documented in our code — each rule cites a specific official clause (for example V5.0 of DGA-1-2-1-229). Any update the Authority issues, we commit to integrate within two weeks, with a reviewable changelog for every rule.")}
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">{t("ما الذي يميّزكم عن أدوات الفحص العالمية (axe، Lighthouse)؟", "What sets you apart from global auditing tools (axe, Lighthouse)?")}</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    {t("الأدوات العالمية تقيس WCAG العام و Core Web Vitals — لا تعرف بنود DXMI 2026، ولا تدعم العربية الفصحى الإدارية، ولا تفهم RTL بشكل أصيل. مُطابق وُلِد محليًّا، صُمّم خصيصًا لمعايير DGA، ومتاح للاستضافة داخل المملكة عند الحاجة.", "Global tools measure generic WCAG and Core Web Vitals — they don't know the DXMI 2026 clauses, don't support formal administrative Arabic, and don't natively understand RTL. Mutabiq was built locally, designed specifically for DGA standards, and available for hosting inside the Kingdom on request.")}
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">{t("هل يحلّ مُطابق محلّ التقييم البشري؟", "Does Mutabiq replace human assessment?")}</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    {t("لا. نُغطّي ما يمكن أتمتته بدقّة — التقنية، الإتاحة، الأداء، الاتساق — ونُوفّر للمُقيِّم البشري أدلّة جاهزة وشواهد مرئية. المُراجِع البشريّ يُركّز على ما يحتاج إنسانًا: السياق، الجودة الإبداعية، وتجربة المستفيد الفعلية.", "No. We cover what can be reliably automated — technology, accessibility, performance, consistency — and we provide the human assessor with ready evidence and visual proof. The human reviewer focuses on what requires a human: context, creative quality, and actual beneficiary experience.")}
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">{t("أين تُخزَّن بياناتنا، وكيف تُحمى من حيث الخصوصية؟", "Where is our data stored, and how is its privacy protected?")}</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    {t("مُطابق متوافق مع نظام حماية البيانات الشخصية السعودي (PDPL). البيانات التشغيلية تُخزَّن في Frankfurt حاليًّا، مع خطة انتقال إلى منطقة Riyadh عند توفّرها. كل عميل معزول عبر Row-Level Security على مستوى قاعدة البيانات. للجهات السيادية: خيار النشر On-Prem متاح — البيانات الخام لا تخرج من شبكتكم، فقط نتائج الفحص.", "Mutabiq is aligned with the Saudi Personal Data Protection Law (PDPL). Operational data is currently stored in Frankfurt, with a planned move to the Riyadh region when it becomes available. Each customer is isolated via Row-Level Security at the database layer. For sovereign entities: an On-Prem deployment option is available — raw data does not leave your network, only the audit results do.")}
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">{t("ماذا لو احتجنا تخصيصًا — قواعد إضافية، تكامل خاص، تقارير على هويّتنا؟", "What if we need customization — additional rules, custom integrations, branded reports?")}</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    {t("نعم. قواعد مخصّصة (خاصة بسياقكم القطاعي) تُكتب في ٧-١٤ يوم. تكامل CI/CD، Nafath/SSO، وWebhooks متاحة من المرحلة الثانية. التقارير بهويّة الجهة (شعار، ألوان، نطاق) جزء من باقة Enterprise، ومتاحة من V2.", "Yes. Custom rules (specific to your sector context) are written in 7-14 days. CI/CD integration, Nafath/SSO, and Webhooks are available from phase two. Entity-branded reports (logo, colors, domain) are part of the Enterprise tier and available from V2.")}
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">{t("متى يكون مُطابق كلاود جاهزًا للاستخدام معكم؟", "When will Mutabiq Cloud be ready for us to use?")}</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    {t("إصدار V1 يُطلَق في شهر ٨ من ٢٠٢٦. للجهات الشريكة في المرحلة التجريبية، نُجهّز إصدارًا خاصًا خلال ٨ أسابيع من اعتماد التجربة، مع تحديثات أسبوعية وجلسات مراجعة منتظمة مع فريقكم الفنّي.", "V1 launches in month 8 of 2026. For pilot-stage partner entities, we prepare a dedicated build within 8 weeks of pilot approval, with weekly updates and regular review sessions with your technical team.")}
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap — concrete 3-phase delivery plan tied to Mutabiq's
          real V1 → V1.5 → V2 milestones. Sits right before the CTA so
          the prospect sees the timeline before being asked to commit.
          Bottom strip lists what pilot-stage entities get free. */}
      <section className="s roadmap">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">{t("خارطة الطريق · ١٢ شهرًا", "Roadmap · 12 months")}</div>
            <h2 className="s-title">{t("ثلاث مراحل · تسليم واضح في كل مرحلة", "Three phases · clear deliverables at every step")}</h2>
            <p className="s-lede">
              {t("كل مرحلة تنتهي بتسليم محدَّد وقيمة قابلة للقياس عند جهتكم — خطّة عمل واضحة من اليوم وحتى ٢٠٢٧.", "Each phase ends with a specific deliverable and measurable value at your entity — a clear plan of work from today through 2027.")}
            </p>
          </div>

          <div className="roadmap-grid" data-reveal-stagger>
            {/* Phase 1 — FEATURED (solid sa-green, white text). The
                "current/upcoming" milestone gets pricing-card-style
                emphasis since this is what readers can act on today. */}
            <article className="roadmap-card roadmap-card-featured" data-reveal>
              <span className="roadmap-card-badge">{t("المرحلة الحالية", "Current phase")}</span>
              <span className="roadmap-card-icon"><Rocket /></span>
              <div className="roadmap-card-meta">
                <span className="roadmap-card-num">{t("٠١", "01")}</span>
                <span className="roadmap-card-when">{t("شهر ٨ · ٢٠٢٦", "Month 8 · 2026")}</span>
              </div>
              <h3 className="roadmap-card-title">{t("التجهيز والإطلاق الأول", "Preparation and first launch")}</h3>
              <p className="roadmap-card-tagline">{t("إطلاق Mutabiq Cloud V1 + ربطه مع إضافة Figma المتاحة بالفعل.", "Launching Mutabiq Cloud V1 + connecting it with the Figma plugin that is already available.")}</p>
              <ul className="roadmap-card-features">
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span><b>Mutabiq for Figma</b> {t("— متاحة الآن (٨٠ قاعدة Lint)", "— available now (80 Lint rules)")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span><b>Mutabiq Cloud V1</b> {t("— تدقيق URL، ZIP، GitHub", "— URL, ZIP, GitHub auditing")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("محرّك DXMI 2026 (+70 قاعدة آلية)", "DXMI 2026 engine (+70 automated rules)")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("تقارير PDF و Excel بالعربية الفصحى", "PDF and Excel reports in formal Arabic")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("حماية بيانات PDPL · عَزل تام بين الجهات", "PDPL data protection · full isolation between entities")}</span>
                </li>
              </ul>
            </article>

            {/* Phase 2 — outline */}
            <article className="roadmap-card" data-reveal>
              <span className="roadmap-card-icon"><Activity /></span>
              <div className="roadmap-card-meta">
                <span className="roadmap-card-num">{t("٠٢", "02")}</span>
                <span className="roadmap-card-when">{t("Q4 ٢٠٢٦ · Q1 ٢٠٢٧", "Q4 2026 · Q1 2027")}</span>
              </div>
              <h3 className="roadmap-card-title">{t("التشغيل المستمر والمراقبة", "Continuous operation and monitoring")}</h3>
              <p className="roadmap-card-tagline">{t("تحويل التدقيق من حدث لمرّة واحدة إلى مراقبة دائمة.", "Turning auditing from a one-time event into continuous monitoring.")}</p>
              <ul className="roadmap-card-features">
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("جدولة تدقيقات دورية (أسبوعية/شهرية)", "Scheduling periodic audits (weekly/monthly)")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("مقارنة تاريخية بين التدقيقات", "Historical comparison between audits")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("روابط تقارير قابلة للمشاركة", "Shareable report links")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("تسليم النتائج بالبريد الإلكتروني", "Delivering results by email")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("تدقيق الصفحات المحمية بكلمة مرور", "Auditing password-protected pages")}</span>
                </li>
              </ul>
            </article>

            {/* Phase 3 — outline */}
            <article className="roadmap-card" data-reveal>
              <span className="roadmap-card-icon"><Network /></span>
              <div className="roadmap-card-meta">
                <span className="roadmap-card-num">{t("٠٣", "03")}</span>
                <span className="roadmap-card-when">{t("Q2 · Q3 ٢٠٢٧", "Q2 · Q3 2027")}</span>
              </div>
              <h3 className="roadmap-card-title">{t("التكامل والتوسعة", "Integration and expansion")}</h3>
              <p className="roadmap-card-tagline">{t("توسيع مُطابق ليناسب بنية الجهة الكاملة ومتطلباتها السيادية.", "Extending Mutabiq to fit the entity's full stack and sovereign requirements.")}</p>
              <ul className="roadmap-card-features">
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("تسجيل دخول موحَّد عبر النفاذ الوطني للجهات الحكومية", "Unified sign-in via Nafath for government entities")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("تقارير بهويّة جهتكم — شعار وألوان واسم نطاق على كل ملف", "Reports in your entity's identity — logo, colors, and domain on every file")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("لوحة قيادة موحَّدة لجميع منصات الجهة", "A unified dashboard for all the entity's platforms")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("قواعد فحص قطاعية مخصَّصة (تعليم، صحة، نقل...)", "Sector-specific custom audit rules (education, health, transport...)")}</span>
                </li>
                <li>
                  <span className="roadmap-card-check"><Check /></span>
                  <span>{t("خيار النشر داخل شبكتكم للجهات السيادية", "On-prem deployment option inside your network for sovereign entities")}</span>
                </li>
              </ul>
            </article>
          </div>

          {/* Freebies strip — what we offer pilot entities during phase 1 */}
          <div className="roadmap-freebies" data-reveal>
            <div className="roadmap-freebies-label">
              <span className="roadmap-freebies-dot" aria-hidden />
              {t("ما نُقدّمه للجهات الشريكة في المرحلة الأولى", "What we offer partner entities during phase one")}
            </div>
            <ul>
              <li>{t("تدريب الفِرَق", "Team training")}</li>
              <li>{t("جلسات مراجعة دورية مع فريقكم", "Regular review sessions with your team")}</li>
              <li>Mutabiq for Figma Pro</li>
              <li>{t("وصول كامل لمُطابق كلاود", "Full access to Mutabiq Cloud")}</li>
              <li>{t("رخص للجهات الشريكة", "Licenses for partner entities")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="s" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>{t("اعرف درجتك في DXMI 2026 — في الديزاين أو في الإنتاج.", "Know your DXMI 2026 score — in design or in production.")}</h2>
            <p>
              {t("احجز عرضًا مخصصًا لجهتك. سنُجري تدقيقًا تجريبيًا على موقعك الرسمي ونعرض النتائج في جلسة واحدة.", "Book a tailored demo for your entity. We'll run a pilot audit on your official site and present the results in a single session.")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer — minimal: copyright only (column links hidden) */}
      <footer>
        <div className="wrap">
          <div className="ft-bot">
            <span className="mark">
              <i>
                <svg viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 32 L12 18 L17.5 26 L23 18 L23 32" />
                  <path d="M28 24.5 L32 28.5 L38 20" />
                </svg>
              </i>{" "}
              © 2026 Mutabiq Cloud · Riyadh, KSA
            </span>
            <span>Privacy · Terms · Status</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
