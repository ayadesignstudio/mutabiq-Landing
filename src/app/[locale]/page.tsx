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

  return (
    <div className="mtb-marketing" dir="rtl" lang="ar">
      <MarketingReveal />
      {/* Nav — minimal: brand on RTL start (right), language + theme on end (left) */}
      <header className="nav">
        <div className="wrap nav-in">
          <a className="brand">
            <BrandMark />
            <span>
              <b>مُطابق كلاود</b> <span className="name-en">Mutabiq</span>
            </span>
          </a>
          <div className="nav-cta">
            <div className="lang" role="group" aria-label="اللغة">
              <button className="on" aria-pressed="true">AR</button>
              <button aria-pressed="false">EN</button>
            </div>
            <button className="nav-theme" aria-label="تبديل الوضع الليلي" title="الوضع الليلي">
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
              مبني على دليل DXMI 2026 الرسمي · v5.0
            </span>
            <h1>
              اعرف درجة{" "}
              {/* Word rotator — cycles DXMI → امتثالك → تجربتك → موقعك on a
                  12s loop. inline-grid stacks all 4 words in the same cell
                  so the layout never shifts; each word fades in/out via
                  staggered animation-delays (0/3/6/9s) into a 4×3s slot. */}
              <span className="word-rotator" aria-live="polite">
                <em className="wr-word wr-1">DXMI</em>
                <em className="wr-word wr-2">امتثالك</em>
                <em className="wr-word wr-3">تجربتك</em>
                <em className="wr-word wr-4">موقعك</em>
              </span>
              {" "}لموقعك — قبل المقيِّم الرسمي.
            </h1>
            <p className="lede">
              منصة سعودية لتدقيق امتثال DXMI 2026 آليًا. أكثر من 70 قاعدة موزَّعة على المحاور الأربعة،
              كل ملاحظة مرتبطة ببند رسمي من الدليل — بأدلة علاج تفصيلية بالعربية الفصحى.
            </p>
            {/* Stat chips — three scannable proof points, staggered fade-in
                after the lede so they read as "claims → proof" rhythm. */}
            <div className="hero-chips">
              <span className="hero-chip">
                <span className="hero-chip-ic"><ListChecks /></span>
                <span><b>+70</b> قاعدة آلية</span>
              </span>
              <span className="hero-chip">
                <span className="hero-chip-ic"><Layers /></span>
                <span><b>4</b> محاور DXMI</span>
              </span>
              <span className="hero-chip">
                <span className="hero-chip-ic"><Languages /></span>
                <span>تقرير بالعربية</span>
              </span>
            </div>
            {/* Primary CTA — download presentation deck. Secondary CTA
                jumps to the lifecycle section as a "see how it works"
                substitute until a real video lands. */}
            <div className="hero-ctas">
              <a
                className="hero-cta hero-cta-primary"
                href="/mutabiq-cloud-deck.pdf"
                download="Mutabiq-Cloud-Presentation.pdf"
              >
                <span className="hero-cta-ic"><Download /></span>
                <span className="hero-cta-text">تحميل العرض التقديمي</span>
                <span className="hero-cta-meta">PDF</span>
              </a>
            </div>
            <div className="trust">
              <span className="ck">
                <Check />
              </span>
              <span>كل ملاحظة مرتبطة ببند رسمي من DGA · لا تنبيهات بدون مرجع</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hc-head">
              <span className="hc-dot" />
              <b>تقرير التدقيق · moe.gov.sa</b>
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
                <span className="score-trend" aria-label="تحسن +5 نقاط منذ آخر تدقيق">
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
                  <span className="lbl">الإتاحة</span>
                  <span className="bar"><span className="bar-fill" /></span>
                  <span className="v" data-counter="72" data-counter-delay="850" data-counter-duration="900">72</span>
                </li>
                <li data-level="88" style={{ ["--lvl" as string]: "88%" }}>
                  <i />
                  <span className="lbl">قابلية الاستخدام</span>
                  <span className="bar"><span className="bar-fill" /></span>
                  <span className="v" data-counter="88" data-counter-delay="950" data-counter-duration="900">88</span>
                </li>
                <li data-level="64" style={{ ["--lvl" as string]: "64%" }}>
                  <i />
                  <span className="lbl">الأداء</span>
                  <span className="bar"><span className="bar-fill" /></span>
                  <span className="v" data-counter="64" data-counter-delay="1050" data-counter-duration="900">64</span>
                </li>
                <li data-level="91" style={{ ["--lvl" as string]: "91%" }}>
                  <i />
                  <span className="lbl">التقنية</span>
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
                <b>نقص سمة lang على html</b>
                <span className="tag">DGA · A-01</span>
              </div>
              <div className="hc-fnd warn">
                <span className="ic">
                  <AlertTriangle />
                </span>
                <b>LCP يتجاوز 3 ثوانٍ</b>
                <span className="tag">DGA · P-02</span>
              </div>
              <div className="hc-fnd ok">
                <span className="ic">
                  <Check />
                </span>
                <b>دعم RTL كامل</b>
                <span className="tag">DGA · U-05</span>
              </div>
            </div>
            {/* Audit footer — timestamp + version + quick stat. Adds the
                "this is a live report" context that turns the mockup from
                a static illustration into a believable audit artifact. */}
            <div className="hc-footer">
              <span className="hc-footer-item">
                <Clock />
                <span>منذ ٣ دقائق</span>
              </span>
              <span className="hc-footer-divider" aria-hidden />
              <span className="hc-footer-item">
                <span><b>12</b> صفحة فُحصت</span>
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
            <span className="logos-count" aria-label="أكثر من ستين جهة حكومية">
              <span className="logos-count-plus">+</span>
              <span className="logos-count-num">60</span>
            </span>
            <div className="logos-header-text">
              <b>جهة حكومية في نطاق معايير DGA</b>
              <span>وزارات وهيئات وصناديق ومراكز خاضعة لإشراف هيئة الحكومة الرقمية</span>
            </div>
          </div>
        </div>
        <div className="logos-strip">
          <div className="logos-track" aria-label="جهات حكومية تستخدم معايير DGA">
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
                  { slug: "cst",  ar: "هيئة الاتصالات والفضاء والتقنية" },
                  { slug: "saso", ar: "المواصفات السعودية" },
                  { slug: "ncc",  ar: "المركز السعودي للتنافسية" },
                  { slug: "nic",  ar: "مركز المعلومات الوطني" },
                  { slug: "sar",  ar: "الخطوط السعودية الحديدية" },
                  { slug: "sfd",  ar: "الصندوق السعودي للتنمية" },
                  { slug: "ndf",  ar: "صندوق التنمية الوطني" },
                  { slug: "sca",  ar: "الهيئة السعودية للمقاولين" },
                  { slug: "gea",  ar: "الهيئة العامة للترفيه" },
                  { slug: "seda", ar: "هيئة تنمية الصادرات السعودية" },
                  { slug: "balady", dense: true, ar: "منصة بلدي" },
                  { slug: "sdaia",  dense: true, ar: "سدايا" },
                  { slug: "rega",   dense: true, ar: "الهيئة العامة للعقار" },
                  { slug: "kku",    dense: true, ar: "جامعة الملك خالد" },
                  { slug: "mim",    dense: true, ar: "وزارة الصناعة والثروة المعدنية" },
                  { slug: "misa",   dense: true, ar: "وزارة الاستثمار" },
                ].map((logo) => (
                  <div key={logo.slug} className="logo-item" data-slug={logo.slug} title={logo.ar}>
                    <img
                      className={`logo-mark${logo.dense ? " is-dense" : ""}`}
                      src={`/logos/${logo.slug}.svg`}
                      alt={logo.ar}
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
              <span className="num">001 ·</span>المشكلة
            </div>
            <h2 className="problem-title">
              مؤشر DXMI 2026 يطلب الكثير، وأدوات اليوم لا تكفي.
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
              <span className="label">غير ملائم</span>
              <h3>أدوات لا تفهم السياق</h3>
              <p>الأدوات العالمية تقيس WCAG وLighthouse، لكنها لا تعرف DXMI 2026، ولا تدعم العربية بشكل أصيل، ولا تفهم البنود الإلزامية لهيئة الحكومة الرقمية.</p>
            </div>
            <div className="pcard med" data-reveal>
              <span className="ic">
                <Receipt />
              </span>
              <span className="label">مكلف</span>
              <h3>تدقيق يدوي بتكلفة عالية</h3>
              <p>كل تقييم يتم عبر استشارات خارجية تستهلك ميزانية الجهة، وتعطي صورة لحظية واحدة فقط بعد شهور من العمل.</p>
            </div>
            <div className="pcard late" data-reveal>
              <span className="ic">
                <Clock />
              </span>
              <span className="label">متأخر</span>
              <h3>يُكتشف بعد التسليم</h3>
              <p>المخالفات تظهر في تقييم الهيئة السنوي — حين يصبح إصلاحها مكلفًا ويستغرق شهورًا ويترك أثرًا على الترتيب.</p>
            </div>
            {/* Row 2 — structural pains */}
            <div className="pcard bad" data-reveal>
              <span className="ic">
                <Scale />
              </span>
              <span className="label">متضارب</span>
              <h3>نتائج تختلف من مراجع لآخر</h3>
              <p>نفس الموقع، نفس البنود، وثلاثة استشاريين بثلاث درجات. لا توجد طريقة لإثبات أن التقييم موضوعي وقابل للتكرار.</p>
            </div>
            <div className="pcard med" data-reveal>
              <span className="ic">
                <Unlink />
              </span>
              <span className="label">مفصول</span>
              <h3>التصميم والإنتاج في عالمين</h3>
              <p>تُدقَّق التصاميم في Figma بمعيار، ويُدقَّق الموقع في الإنتاج بمعيار آخر. الفجوة بين الاثنين تظهر بعد الإطلاق.</p>
            </div>
            <div className="pcard late" data-reveal>
              <span className="ic">
                <EyeOff />
              </span>
              <span className="label">بدون رقابة</span>
              <h3>لا أحد يراقب بين التقييمات</h3>
              <p>بين تقييمين سنويين، يتحرّك الموقع، تتغيّر الواجهات، وتدخل ميزات جديدة — كل ذلك دون رقابة على الالتزام.</p>
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
            <div className="s-kicker">002 · من الفوضى إلى الالتزام</div>
            <h2 className="s-title">
              مخالفات تدخل · <em>تقرير مُطابق يخرج</em>
            </h2>
            <p className="s-lede">
              مُطابق يحوّل قائمة المخالفات المتراكمة إلى تقرير DXMI مرتبط بالمعيار الرسمي — في تشغيل آلي واحد، يكشف لك أين أنت من Advanced قبل التقييم.
            </p>
          </div>

          <div className="funnel-stage" aria-hidden>
            {/* Live status bar — pulses "audit running" indicator + key
                stats so the section reads as a live, dynamic system
                rather than a static illustration. */}
            <div className="funnel-status">
              <span className="funnel-status-chip">
                <span className="funnel-status-dot" />
                تدقيق آلي يعمل
              </span>
              <span className="funnel-status-divider" aria-hidden />
              <span className="funnel-status-stat"><b>+70</b><span>قاعدة فُحصت</span></span>
              <span className="funnel-status-divider" aria-hidden />
              <span className="funnel-status-stat"><b>+24</b><span>نقطة</span></span>
              <span className="funnel-status-divider" aria-hidden />
              <span className="funnel-status-stat"><b>14s</b><span>الزمن</span></span>
            </div>

            {/* Start side (RTL right) — issues entering */}
            <div className="funnel-side funnel-in">
              <div className="funnel-side-label funnel-side-label-issue">
                <span className="funnel-side-label-dot" />
                قبل التدقيق · 5 مخالفات حرجة
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
                  <span className="funnel-mb-status">جاري التدقيق</span>
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
                <span>نقص lang على html</span>
                <span className="tag-code">A-01</span>
              </div>
              <div className="funnel-tag issue f2">
                <span className="tag-ic warn"><AlertTriangle /></span>
                <span>LCP يتجاوز 3 ثوان</span>
                <span className="tag-code">P-02</span>
              </div>
              <div className="funnel-tag issue f3">
                <span className="tag-ic"><AlertCircle /></span>
                <span>تباين ألوان منخفض</span>
                <span className="tag-code">A-12</span>
              </div>
              <div className="funnel-tag issue f4">
                <span className="tag-ic warn"><AlertTriangle /></span>
                <span>Alt نصي مفقود</span>
                <span className="tag-code">A-03</span>
              </div>
              <div className="funnel-tag issue f5">
                <span className="tag-ic"><AlertOctagon /></span>
                <span>نموذج بدون label</span>
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
              <span className="funnel-core-badge" title="مُطابق">
                <BrandMark />
              </span>
              {/* Status chip above the badge — small "live" tag */}
              <span className="funnel-core-status" aria-live="polite">
                <span className="funnel-core-status-dot" aria-hidden />
                <span>يعالج · ٢ نشطة</span>
              </span>
              {/* Transformation summary below the badge — anchors the
                  "5 violations → 0" story. Right number animates from
                  5 down to 0 across the cycle to mirror the absorption. */}
              <span className="funnel-core-summary" aria-label="five violations transformed to zero">
                <b className="funnel-core-summary-from">٥</b>
                <span className="funnel-core-summary-arrow" aria-hidden>→</span>
                <b className="funnel-core-summary-to">٠</b>
                <span className="funnel-core-summary-label">مخالفة</span>
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
                بعد · DGA Advanced
              </div>
              <div className="funnel-scorecard">
                <div className="funnel-sc-head">
                  <span className="funnel-sc-brand">
                    <BadgeCheck />
                    تقرير DGA
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
                    <span className="funnel-sc-bar-label">الإتاحة</span>
                    <span className="funnel-sc-bar-track"><span className="funnel-sc-bar-fill" style={{ width: "94%" }} /></span>
                    <span className="funnel-sc-bar-value">94</span>
                  </li>
                  <li>
                    <span className="funnel-sc-bar-label">الأداء</span>
                    <span className="funnel-sc-bar-track"><span className="funnel-sc-bar-fill" style={{ width: "90%" }} /></span>
                    <span className="funnel-sc-bar-value">90</span>
                  </li>
                  <li>
                    <span className="funnel-sc-bar-label">التقنية</span>
                    <span className="funnel-sc-bar-track"><span className="funnel-sc-bar-fill" style={{ width: "96%" }} /></span>
                    <span className="funnel-sc-bar-value">96</span>
                  </li>
                </ul>
                <div className="funnel-sc-foot">
                  <span className="funnel-sc-foot-dot" />
                  تم التحقق · موقع مُطابق
                </div>
              </div>
              <div className="funnel-tag ok o1">
                <span className="tag-ic"><Check /></span>
                <span>lang سليم</span>
              </div>
              <div className="funnel-tag ok o2">
                <span className="tag-ic"><Check /></span>
                <span>LCP ‎0.9s‎</span>
              </div>
              <div className="funnel-tag ok o3">
                <span className="tag-ic"><Check /></span>
                <span>تباين 7:1</span>
              </div>
              <div className="funnel-tag ok o4">
                <span className="tag-ic"><Check /></span>
                <span>Alt كامل</span>
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
              <div className="s-kicker">002 · كيف يعمل</div>
              <h2 className="s-title">4 خطوات من الرابط إلى تقرير DGA Advanced</h2>
              <p className="s-lede">بدون فريق إضافي، بدون استشاريين خارجيين، بدون جداول إكسل ترسلها بالإيميل.</p>
            </div>
            <div className="steps">
              <div className="step">
                <span className="num">1</span>
                <h3>تربط موقعك</h3>
                <p>أدخل رابط الموقع الرسمي. نكتشف الصفحات تلقائيًا وننظّمها في مجموعات — حتى 100 صفحة لكل حملة.</p>
              </div>
              <div className="step">
                <span className="num">2</span>
                <h3>ندقّق آليًا</h3>
                <p>نُطبّق أكثر من 70 قاعدة من DXMI 2026 على موقعك بالعربية — نتيجة لكل قاعدة مع شواهد مرئية ومرجع DGA الرسمي.</p>
              </div>
              <div className="step">
                <span className="num">3</span>
                <h3>تقرير ثلاثي الزوايا</h3>
                <p>تقرير واحد يخدم 3 جهات: رؤية للمدير، دليل مطابقة للمشتريات، وخطوات علاج تفصيلية للمطور — كله في ملف واحد.</p>
              </div>
              <div className="step">
                <span className="num">4</span>
                <h3>تعيد التدقيق</h3>
                <p>أعد تدقيق صفحة، مجموعة، أو الحملة كاملة. تاريخ كامل ومقارنة درجات حتى تصل لـ Advanced.</p>
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
              <h2>4 محاور · 20 ثيمة · +70 قاعدة آلية</h2>
              <p>
                نقيس موقعك وفق البنية الرسمية لمؤشر نضج التجربة الرقمية: أربعة محاور تتفرّع إلى 20 ثيمة،
                تغطّيها أكثر من 70 قاعدة آلية مرتبطة مباشرة بالدليل الرسمي.
              </p>
              <a className="btn btn-dark">
                استكشف قواعد DXMI
                <ArrowLeft />
              </a>
            </div>
            <div className="grid6">
              <div className="t">
                <span className="ic"><Award /></span>
                <div>
                  <b>نضج الخدمة</b>
                  <span>Service Maturity</span>
                </div>
              </div>
              <div className="t">
                <span className="ic"><Smile /></span>
                <div>
                  <b>رضا المستخدم</b>
                  <span>User Satisfaction</span>
                </div>
              </div>
              <div className="t">
                <span className="ic"><MousePointer /></span>
                <div>
                  <b>سهولة الاستخدام</b>
                  <span>Usability</span>
                </div>
              </div>
              <div className="t">
                <span className="ic"><Network /></span>
                <div>
                  <b>التقنية وتكامل الخدمات</b>
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
            <div className="s-kicker">003 · دورة الحياة الكاملة</div>
            <h2 className="s-title">من <em>فيجما</em> إلى <em>الإنتاج</em>، بنفس المعيار</h2>
            <p className="s-lede">
              المنتجان يتشاركان نفس قاعدة معايير هيئة الحكومة الرقمية — مما يضمن أن ما يُقاس في
              التصميم هو ذاته ما يُقاس في الإنتاج.
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
              <h3>التصميم</h3>
              <p>المصمم يُجري تقييمًا مبكرًا داخل فيجما — ويُصلح المخالفات قبل التسليم.</p>
              <div className="lc-outcome">
                <Check />
                ينتقل إلى التطوير بأساس مُطابق
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
              <h3>الموافقة</h3>
              <p>نتيجة الالتزام تُرفَق مع ملف التصميم، فيدخل التطوير بأساس مُطابق.</p>
              <div className="lc-outcome">
                <Check />
                إثبات التزام مرفق بالتصميم
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
              <h3>الإطلاق</h3>
              <p>بعد النشر، مُطابق كلاود يُجري تدقيقًا شاملًا للموقع كاملًا قبل التقييم الرسمي.</p>
              <div className="lc-outcome">
                <Check />
                درجة DGA Advanced قبل التقييم
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
              <h3>المراقبة</h3>
              <p>تدقيق دوري مستمر يحفظ مستوى الالتزام مع كل تحديث ويرصد أي تراجع فورًا.</p>
              <div className="lc-outcome">
                <Check />
                إنذار فوري عند أي تراجع
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
                متاح الآن · v1.0
              </span>
              <span className="prod-num">004 · Mutabiq for Figma</span>
            </div>
            <h2 className="s-title">
              المصمم يُسلّم بـ <em>أساس مُطابق</em>
            </h2>
            <p className="s-lede">
              أربع قدرات تشتغل داخل Figma — من الـ Lint إلى التقييم متعدد الأبعاد إلى الإصلاح الفوري،
              بدون مغادرة بيئة التصميم.
            </p>
          </div>
          <div className="prod-feat prod-bento" data-reveal-stagger>
            <div className="pf-card pf-card-hero" data-reveal>
              <span className="pf-ic"><ListChecks /></span>
              <div className="pf-stat">
                <span className="pf-num" data-counter="80">80</span>
                <span className="pf-unit">قاعدة Lint عبر 17 prefix</span>
              </div>
              <h3>80 قاعدة Lint داخل Figma — مرتبطة بـ DGA</h3>
              <p>تغطية شاملة: Tokens · Accessibility · RTL · Typography · Forms · Navigation · Layout · Buttons · Data Display · Feedback. كل قاعدة بوصف عربي/إنجليزي، severity واضح، وأمثلة كود قابلة للنسخ — صُمّمت خصيصًا لـ DGA Platforms Code.</p>
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
                <span className="pf-unit">درجات</span>
              </div>
              <h3>تقييم متعدد الأبعاد</h3>
              <p>DGA Compliance · Accessibility · UX — لكل Frame، بنظام Exponential Decay وتفصيل لكل قاعدة.</p>
              <span className="pf-tag">per frame</span>
            </div>
            <div className="pf-card" data-reveal>
              <span className="pf-ic"><Wrench /></span>
              <div className="pf-stat">
                <span className="pf-num pf-num-text">Auto-Fix</span>
                <span className="pf-unit">+ Undo</span>
              </div>
              <h3>إصلاح بنقرة</h3>
              <p>الألوان والـ Fills تُصلَح آليًا لأقرب DGA Token، مع Undo حتى ٣ مستويات.</p>
              <span className="pf-tag">3-level undo</span>
            </div>
            <div className="pf-card pf-card-wide" data-reveal>
              <span className="pf-ic"><Languages /></span>
              <div className="pf-stat">
                <span className="pf-num pf-num-text">AR/EN</span>
                <span className="pf-unit">عربي أصيل · RTL كامل · فصحى إدارية</span>
              </div>
              <h3>أداة عربية أولًا — لا ترجمة آلية</h3>
              <p>واجهة البلاجن والتقارير المُصدَّرة (PDF · Excel · Clipboard) كلها بالعربية الفصحى الإدارية، مع دعم RTL في كل عنصر، أرقام عربية-هندية، وbidi formatting سليم — لأن واجهات الجهات الحكومية لا تقبل أقل من ذلك.</p>
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
          حيث ينتهي البلاجن، يبدأ الكلاود
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
                أساسيات شغّالة · إطلاق Q3 2026
              </span>
              <span className="prod-num">005 · Mutabiq Cloud</span>
            </div>
            <h2 className="s-title">
              الإنتاج تحت <em>المراقبة الدائمة</em>
            </h2>
            <p className="s-lede">
              ست قدرات تُحوّل التدقيق إلى عملية روتينية — من إدخال الموقع،
              إلى محرّك DGA الرسمي، إلى تقارير ثلاثيّة الجمهور بالعربية الكاملة.
            </p>
          </div>
          <div className="prod-feat prod-bento" data-reveal-stagger>
            {/* 1 — Engine (hero) */}
            <div className="pf-card cloud pf-card-hero" data-reveal>
              <span className="pf-ic"><BadgeCheck /></span>
              <div className="pf-stat">
                <span className="pf-num pf-num-text">+70</span>
                <span className="pf-unit">قاعدة من DXMI 2026</span>
              </div>
              <h3>محرّك DGA-DXMI 2026 الرسمي</h3>
              <p>أكثر من 70 قاعدة مكتوبة من معيار DGA-DXMI 2026 الرسمي، موزَّعة على المحاور الأربعة: رضا المستفيد · تجربة المستخدم · القنوات · الثقة والشفافية. كل ملاحظة مرتبطة ببند محدَّد من المعيار، لا تنبيهات بدون مرجع.</p>
              <ul className="pf-hero-chips">
                <li>BS · رضا المستفيد</li>
                <li>UX · تجربة المستخدم</li>
                <li>CH · القنوات</li>
                <li>TT · الثقة والشفافية</li>
                <li>+70 قاعدة</li>
                <li>DGA رسمي</li>
              </ul>
            </div>
            {/* 2 — 3 input sources (replaces crawler) */}
            <div className="pf-card cloud" data-reveal>
              <span className="pf-ic"><Network /></span>
              <span className="pf-pill">URL · ZIP · GitHub</span>
              <h3>تدقيق آلي · ٣ مصادر إدخال</h3>
              <p>ابدأ بـ رابط الموقع (الزحف الذكي يكتشف الصفحات تلقائيًا حتى ١٠٠ صفحة لكل حملة)، أو ارفع ZIP لموقع جاهز، أو اربط GitHub repo مباشرة. نفس المحرّك ونفس القواعد لكل المصادر.</p>
              <span className="pf-tag">حتى ١٠٠ صفحة · same-origin · robots.txt</span>
            </div>
            {/* 3 — Visual evidence (replaces viewports) */}
            <div className="pf-card cloud" data-reveal>
              <span className="pf-ic"><Camera /></span>
              <span className="pf-pill">لقطة + تحديد العنصر</span>
              <h3>شواهد بصرية لكل ملاحظة</h3>
              <p>كل مخالفة موثَّقة بلقطة شاشة + تحديد دقيق للعنصر داخل الصفحة (CSS selector). المُراجِع يفتح التقرير ويرى مباشرة أين المشكلة، بدون الحاجة لفتح الموقع للتحقق.</p>
              <span className="pf-tag">screenshots + selectors لكل تدقيق</span>
            </div>
            {/* 4 — Self-eval (hero) */}
            <div className="pf-card cloud pf-card-hero" data-reveal>
              <span className="pf-ic"><ClipboardList /></span>
              <div className="pf-stat">
                <span className="pf-num" data-counter="32">32</span>
                <span className="pf-unit">سؤال موزَّع على المحاور الأربعة</span>
              </div>
              <h3>تقييم ذاتي للثيمات التي لا يصلها الفحص الآلي</h3>
              <p>استبيان منظَّم بـ 32 سؤال على 13 ثيمة موزَّعة على المحاور الأربعة — لرضا المستفيد وأجزاء من الثقة والشفافية التي لا تقدر الفحوصات الآلية على كشفها. الإجابات محفوظة لكل جهة كدليل، بالعربية والإنجليزية.</p>
              <ul className="pf-hero-chips">
                <li>32 سؤال</li>
                <li>13 ثيمة</li>
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
                <span className="pf-unit">تقارير من تشغيل واحد</span>
              </div>
              <h3>تقرير واحد · ٣ زوايا للجمهور</h3>
              <p>كل تدقيق يُنتج ثلاثة مخارج في وقت واحد: <b>لوحة درجات للمدير</b>، <b>قائمة مطابقة للمشتريات</b>، و<b>دليل إصلاح بالكود للمطوّر</b>. PDF تنفيذي + Excel سجل تفصيلي + واجهة تفاعلية. كلها بالعربية الفصحى الإدارية مع RTL سليم.</p>
              <ul className="pf-hero-chips">
                <li>المدير · لوحة درجات</li>
                <li>المشتريات · قائمة مطابقة</li>
                <li>المطوّر · دليل إصلاح</li>
                <li>PDF + Excel + Web</li>
                <li>عربية فصحى · RTL</li>
              </ul>
            </div>
            {/* 6 — Audit history + diff (revises versioned scoring) */}
            <div className="pf-card cloud" data-reveal>
              <span className="pf-ic"><Repeat /></span>
              <span className="pf-pill">fixed · stillPresent · added</span>
              <h3>تاريخ تدقيقات قابل للمقارنة</h3>
              <p>كل تدقيق محفوظ بدون انتهاء صلاحية. عند إعادة التدقيق، نقسم الملاحظات إلى ثلاث مجموعات على مستوى العنصر نفسه — يبان بالضبط ما اتصلح، وما لا يزال موجودًا، وما هو جديد. تتبّع رحلة الجهة من Below Basic إلى Advanced عبر الزمن.</p>
              <span className="pf-tag">قبل / بعد لكل قاعدة وكل عنصر</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Gap Matrix — competitive moat */}
      <section className="s gap-section" data-spotlight>
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">الفجوة في السوق</div>
            <h2 className="s-title">
              ما لا تستطيع الأدوات الحالية فعله — <em>صُمّم مُطابق ليفعله</em>
            </h2>
            <p className="s-lede">
              مقارنة صادقة: 7 قدرات تفصل بين أداة تدقيق عامة ومنصة حوكمة DXMI.
            </p>
          </div>
          <div className="gap-matrix" data-reveal>
            <div className="gap-head">
              <div className="gap-h gap-h-cap">القدرة</div>
              <div className="gap-h gap-h-mkt">الحلول الحالية</div>
              <div className="gap-h gap-h-mtb">
                <span className="gap-h-mark"><BrandMark className="lg gap-h-brand" /></span>
                مُطابق
              </div>
            </div>
            <ul className="gap-rows" data-reveal-stagger>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><ShieldCheck /></span>
                  <div className="gap-cap-text">
                    <b>حوكمة مرتبطة بـ DXMI</b>
                    <span>DXMI-aware governance</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label="غير متوفر">
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">+70 قاعدة ↔ 4 محاور</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><Activity /></span>
                  <div className="gap-cap-text">
                    <b>فرض الامتثال فوريًا</b>
                    <span>Real-time compliance enforcement</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label="غير متوفر">
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">داخل Figma + الإنتاج</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><Layers /></span>
                  <div className="gap-cap-text">
                    <b>تكامل مع التصميم والتطوير</b>
                    <span>Integration with design &amp; dev workflows</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-partial">جزئي</span>
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
                    <b>مراقبة مستمرة عبر دورة الحياة</b>
                    <span>Continuous lifecycle monitoring</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-partial">جزئي</span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">تدقيق دوري + إنذار التراجع</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><FileText /></span>
                  <div className="gap-cap-text">
                    <b>محرك قواعد من المعايير الحكومية</b>
                    <span>Government standards-to-rules engine</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label="غير متوفر">
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">DXMI 2026 رسمي</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><BarChart3 /></span>
                  <div className="gap-cap-text">
                    <b>رؤية حوكمة مركزية</b>
                    <span>Centralized governance visibility</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-limited">محدود</span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">3 أدوار · تقرير واحد</span>
                </div>
              </li>
              <li className="gap-row" data-reveal>
                <div className="gap-cap">
                  <span className="gap-cap-ic"><Network /></span>
                  <div className="gap-cap-text">
                    <b>تنسيق حوكمة على مستوى وطني</b>
                    <span>National-scale governance orchestration</span>
                  </div>
                </div>
                <div className="gap-mkt">
                  <span className="gap-pill gap-pill-no" aria-label="غير متوفر">
                    <span aria-hidden>✗</span>
                  </span>
                </div>
                <div className="gap-mtb">
                  <span className="gap-check"><Check /></span>
                  <span className="gap-proof">جاهز للجهات السيادية</span>
                </div>
              </li>
            </ul>
            <p className="gap-strap">
              هذه ليست ميزات — هذه <em>فجوة سوق</em> صُمّم منتجنا لسدّها.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="s">
        <div className="wrap">
          <div className="s-head" data-reveal>
            <div className="s-kicker">لماذا مُطابق</div>
            <h2 className="s-title">منصة امتثال — لا مجرد أداة تدقيق</h2>
            <p className="s-lede">
              رؤية للمديرين، دليل للمشتريات، علاج للمطورين. كل ذلك من تقرير واحد، بالعربية أولًا.
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
                  <span>+62 قاعدة</span>
                  <span className="rmock-more-tag">DXMI 2026 V5.0</span>
                </div>
              </div>
              <div className="why-text">
                <h3>تغطية رسمية لـ DXMI 2026</h3>
                <p>أكثر من 70 قاعدة عبر المحاور الأربعة، كل قاعدة مرجعها بند رسمي من الدليل V5.0 — ليست قواعد عامة معاد تسميتها.</p>
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
                  <b>حوكمة مرتبطة بـ DXMI</b>
                  <span className="armock-en">DXMI-aware governance</span>
                </div>
                <div className="armock-meta">
                  <span className="armock-stat"><span className="armock-num">٦٥</span> قاعدة</span>
                  <span className="armock-dot">·</span>
                  <span className="armock-stat"><span className="armock-num">+٢٥٠</span> نص علاج</span>
                </div>
              </div>
              <div className="why-text">
                <h3>عربي أصيل — لا ترجمة آلية</h3>
                <p>كل قاعدة وكل علاج بالفصحى الإدارية — RTL كامل، أرقام عربية-هندية، bidi formatting سليم.</p>
              </div>
            </article>

            {/* Card 3 — Reports: 3 stacked report layers */}
            <article className="why-card why-card-reports" data-reveal>
              <div className="why-mockup">
                <div className="rpmock-layer rpmock-admin">
                  <div className="rpmock-head">
                    <span className="rpmock-role">المدير</span>
                    <span className="rpmock-score">85</span>
                  </div>
                  <div className="rpmock-bar"><span style={{width: "85%"}} /></div>
                </div>
                <div className="rpmock-layer rpmock-procure">
                  <span className="rpmock-role">المشتريات</span>
                  <ul className="rpmock-checks">
                    <li><Check /> A11y</li>
                    <li><Check /> UX</li>
                    <li><Check /> SEO</li>
                  </ul>
                </div>
                <div className="rpmock-layer rpmock-dev">
                  <span className="rpmock-role">المطور</span>
                  <code className="rpmock-code">.btn {`{`} color: #006C35 {`}`}</code>
                </div>
              </div>
              <div className="why-text">
                <h3>تقرير واحد · 3 زوايا</h3>
                <p>المدير يجد لوحة الدرجات. المشتريات يجد دليل المطابقة. المطور يجد خطوات العلاج بالكود — في ملف PDF واحد.</p>
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
                  <span>تشغيل ١</span>
                  <span>٢</span>
                  <span>٣</span>
                  <span>٤</span>
                </div>
              </div>
              <div className="why-text">
                <h3>تاريخ كامل · بدون حد</h3>
                <p>كل تدقيق محفوظ بكامل تفاصيله. تتبّع التحسّن من Below Basic حتى Advanced — تشغيلات غير محدودة.</p>
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
                  <p className="cmock-pillar-desc">متوافق مع نظام حماية البيانات الشخصية السعودي.</p>
                </div>
                <div className="cmock-pillar cmock-pillar-featured">
                  <span className="cmock-pillar-ic"><Lock /></span>
                  <div className="cmock-pillar-head">
                    <b>On-Prem</b>
                    <span className="cmock-pillar-status cmock-pillar-status-featured">للسيادي</span>
                  </div>
                  <p className="cmock-pillar-desc">البيانات الخام تبقى داخل شبكتك — Findings فقط هي اللي تخرج.</p>
                </div>
                <div className="cmock-pillar">
                  <span className="cmock-pillar-ic"><FileText /></span>
                  <div className="cmock-pillar-head">
                    <b>SOC 2</b>
                    <span className="cmock-pillar-status">evidence</span>
                  </div>
                  <p className="cmock-pillar-desc">حزمة وثائق الضوابط الأمنية متاحة للمراجعة.</p>
                </div>
              </div>
              <div className="why-text">
                <h3>أمن وامتثال للجهات الحكومية</h3>
                <p>متوافق مع نظام حماية البيانات الشخصية (PDPL). خيار on-prem للجهات السيادية — البيانات الخام لا تخرج من شبكتك. SOC 2 evidence pack متاح.</p>
              </div>
            </article>
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
            <div className="s-kicker">الفرق الجوهري</div>
            <h2 className="s-title">
              كيف تستخدم <em>هيئة الحكومة الرقمية</em> مُطابق
            </h2>
            <p className="s-lede">
              تحدّثنا حتى الآن عن كيف يخدم مُطابق الجهات. هنا نقلب العدسة:
              مُطابق ليس أداةً للجهات وحدها — بل بنية تحتية تُمكِّن الهيئة
              نفسها من ممارسة دورَيها التنظيمي والمعرفي بكفاءة أعلى.
            </p>
          </div>

          <div className="authority-grid" data-reveal-stagger>
            {/* Role 1 — Regulator (DGA green) */}
            <article className="authority-role authority-role-regulator" data-reveal>
              <header className="authority-role-head">
                <span className="authority-role-badge">الدور الأول</span>
                <h3>كهيئة منظِّمة ومراقِبة</h3>
              </header>
              <ul className="authority-cap-list">
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Gauge /></span>
                  <div>
                    <b>لوحة قيادة موحَّدة</b>
                    <p>نظرة فورية لحالة كل المنصات الـ ٦١ في شاشة واحدة.</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Repeat /></span>
                  <div>
                    <b>تقييم مستمرّ بدل سنوي</b>
                    <p>فحص آلي أسبوعي يكشف الانحراف فور حدوثه.</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Scale /></span>
                  <div>
                    <b>منهجية موحَّدة قابلة للمقارنة</b>
                    <p>كل تقرير يستخدم نفس المرجعيّة — فروق صادقة بين الجهات.</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><ClipboardList /></span>
                  <div>
                    <b>سجلّ تدقيق كامل</b>
                    <p>كل اكتشاف، كل إصلاح، كل تحديث موثَّق ومتتبَّع زمنيًا.</p>
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
                <span className="authority-role-badge">الدور الثاني</span>
                <h3>كناشِرة للمعايير</h3>
              </header>
              <ul className="authority-cap-list">
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Activity /></span>
                  <div>
                    <b>نشر فوري لأي تحديث</b>
                    <p>تُحدِّثون قاعدة، يصل التنبيه لكل المصمّمين والمطوّرين خلال أسبوع.</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><AlertCircle /></span>
                  <div>
                    <b>ترجمة المعيار إلى تنبيه</b>
                    <p>بدل وثيقة ٩٠ صفحة، يصل المعيار كرسالة محدّدة وقت العمل.</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><Smile /></span>
                  <div>
                    <b>قناة وصول بدون تدريب</b>
                    <p>لا حاجة لبرامج توعية ضخمة — الأداة هي الوسيط التعليمي.</p>
                  </div>
                </li>
                <li className="authority-cap">
                  <span className="authority-cap-ic"><BarChart3 /></span>
                  <div>
                    <b>بيانات تغذية راجعة</b>
                    <p>أيّ معيار غير قابل للتطبيق يظهر في إحصاءاتنا — تَعرفونه فور وقوعه.</p>
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
              <b>الخلاصة:</b>
              مُطابق ليس عميلًا للهيئة — بل
              <em> امتدادٌ تشغيليّ لذراعها التنظيميّ والمعرفيّ.</em>
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
            <div className="s-kicker">القيمة لكم</div>
            <h2 className="s-title">أربع منافع مباشرة</h2>
            <p className="s-lede">
              ما الذي تكسبه الهيئة من شراكة معنا — أربع منافع تشغيلية
              مرتبطة مباشرة بدور الهيئة التنظيمي والمعرفي.
            </p>
          </div>

          <div className="benefits-grid" data-reveal-stagger>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">01</div>
              <div className="benefit-card-body">
                <h3>ارتفاع نضج المنصات</h3>
                <p>كل جهة تستخدم مُطابق تصل للتقييم وهي جاهزة — أعلى متوسط، أسرع تقدّم سنوي.</p>
              </div>
            </article>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">02</div>
              <div className="benefit-card-body">
                <h3>تقصير دورة التقييم</h3>
                <p>الملاحظات تُكتشف قبل الزيارة — يقلّ عدد التذاكر المتأخّرة وزمن المراجعة.</p>
              </div>
            </article>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">03</div>
              <div className="benefit-card-body">
                <h3>امتداد ذراع التوعية</h3>
                <p>تنشرون المعيار، وننقله إلى المصمّم والمطوّر يوميًا — قناة وصول بدون ميزانية تدريب.</p>
              </div>
            </article>
            <article className="benefit-card" data-reveal>
              <div className="benefit-num">04</div>
              <div className="benefit-card-body">
                <h3>بيانات قابلة للمقارنة</h3>
                <p>تقارير امتثال موحَّدة الشكل عبر الجهات — مع الحفاظ على عزل بياناتي صارم.</p>
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
              <div className="s-kicker">الأثر</div>
              <h2 className="s-title">أرقام تترجم القيمة</h2>
              <p className="s-lede">ليست شعارات تسويقية — هذه هي حدود ما يقدّمه مُطابق اليوم، بالأرقام.</p>
            </div>
            <div className="impact">
              <div className="impact-grid">
                <div className="impact-cell">
                  <b>+70</b>
                  <span>قاعدة آلية بالعربية — مرتبطة ببنود DXMI 2026 الرسمية</span>
                </div>
                <div className="impact-cell">
                  <b>100%</b>
                  <span>عربي أصيل — لا ترجمة آلية، فصحى إدارية</span>
                </div>
                <div className="impact-cell">
                  <b>100</b>
                  <span>صفحة لكل حملة — موقعك كاملًا، لا عيّنات</span>
                </div>
                <div className="impact-cell">
                  <b>3</b>
                  <span>تقارير من تشغيل واحد — مدير، مشتريات، مطور</span>
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
                التقييم السنوي للهيئة لا يعطي فرصة ثانية.
              </blockquote>
              <p>
                في كل دورة تقييم، جهات كثيرة تخسر مستواها بدون إنذار مبكر — والعودة تتطلب سنة كاملة من العمل.
                مُطابق يكشف الفجوات الآن، حين تستطيع إصلاحها قبل أن يراها المقيّم.
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
                <span>أسئلة شائعة</span>
              </div>
              <h2 className="faq-title">
                ستة أسئلة
                <em>نسمعها كثيرًا</em>
              </h2>
              <p className="faq-desc">
                إجابات مفصَّلة على أبرز ما يَشغل فرق الجهات الحكومية قبل البدء.
                أجوبتنا واضحة ومتاحة للنقاش معكم في أيّ جلسة.
              </p>
            </div>

            {/* RTL end (left): collapsible FAQ cards */}
            <div className="faq-list" data-reveal>
              <details className="faq-card" name="faq" open>
                <summary className="faq-summary">
                  <span className="faq-q-text">كيف نضمن أنّ مُطابق يعكس آخر تحديث في معاييركم؟</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    قاعدة DGA-DXMI 2026 موثَّقة في كودنا — كل قاعدة مرجعها بند
                    رسمي محدَّد (مثلاً V5.0 من DGA-1-2-1-229). أيّ تحديث تُصدِره
                    الهيئة نلتزم بدمجه خلال أسبوعين، مع سجلّ تغييرات قابل
                    للمراجعة لكل قاعدة.
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">ما الذي يميّزكم عن أدوات الفحص العالمية (axe، Lighthouse)؟</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    الأدوات العالمية تقيس WCAG العام و Core Web Vitals — لا
                    تعرف بنود DXMI 2026، ولا تدعم العربية الفصحى الإدارية،
                    ولا تفهم RTL بشكل أصيل. مُطابق وُلِد محليًّا، صُمّم خصيصًا
                    لمعايير DGA، ومتاح للاستضافة داخل المملكة عند الحاجة.
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">هل يحلّ مُطابق محلّ التقييم البشري؟</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    لا. نُغطّي ما يمكن أتمتته بدقّة — التقنية، الإتاحة، الأداء،
                    الاتساق — ونُوفّر للمُقيِّم البشري أدلّة جاهزة وشواهد مرئية.
                    المُراجِع البشريّ يُركّز على ما يحتاج إنسانًا: السياق،
                    الجودة الإبداعية، وتجربة المستفيد الفعلية.
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">أين تُخزَّن بياناتنا، وكيف تُحمى من حيث الخصوصية؟</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    مُطابق متوافق مع نظام حماية البيانات الشخصية السعودي (PDPL).
                    البيانات التشغيلية تُخزَّن في Frankfurt حاليًّا، مع خطة
                    انتقال إلى منطقة Riyadh عند توفّرها. كل عميل معزول عبر
                    Row-Level Security على مستوى قاعدة البيانات. للجهات السيادية:
                    خيار النشر On-Prem متاح — البيانات الخام لا تخرج من شبكتكم،
                    فقط نتائج الفحص.
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">ماذا لو احتجنا تخصيصًا — قواعد إضافية، تكامل خاص، تقارير على هويّتنا؟</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    نعم. قواعد مخصّصة (خاصة بسياقكم القطاعي) تُكتب في ٧-١٤ يوم.
                    تكامل CI/CD، Nafath/SSO، وWebhooks متاحة من المرحلة
                    الثانية. التقارير بهويّة الجهة (شعار، ألوان، نطاق) جزء
                    من باقة Enterprise، ومتاحة من V2.
                  </p>
                </div>
              </details>

              <details className="faq-card" name="faq">
                <summary className="faq-summary">
                  <span className="faq-q-text">متى يكون مُطابق كلاود جاهزًا للاستخدام معكم؟</span>
                  <span className="faq-toggle" aria-hidden>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5l3 3 3-3" /></svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>
                    إصدار V1 يُطلَق في شهر ٨ من ٢٠٢٦. للجهات الشريكة في
                    المرحلة التجريبية، نُجهّز إصدارًا خاصًا خلال ٨ أسابيع من
                    اعتماد التجربة، مع تحديثات أسبوعية وجلسات مراجعة منتظمة
                    مع فريقكم الفنّي.
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
            <div className="s-kicker">خارطة الطريق · ١٢ شهرًا</div>
            <h2 className="s-title">ثلاث مراحل · تسليم واضح في كل مرحلة</h2>
            <p className="s-lede">
              كل مرحلة تنتهي بتسليم محدّد وقيمة قابلة للقياس. البدء فوريّ —
              <em> Mutabiq for Figma</em> متاح الآن، و<em>Mutabiq Cloud V1</em>
              يُطلق في شهر ٨ من ٢٠٢٦.
            </p>
          </div>

          <div className="roadmap-grid" data-reveal-stagger>
            {/* Phase 1 — V1 launch (Aug 2026) */}
            <article className="roadmap-phase roadmap-phase-1" data-reveal>
              <span className="roadmap-phase-num">01</span>
              <span className="roadmap-phase-period">شهر ٨ · ٢٠٢٦</span>
              <div className="roadmap-phase-body">
                <h3>التجهيز والإطلاق الأول</h3>
                <p className="roadmap-phase-tagline">إطلاق Mutabiq Cloud V1 + ربطه مع إضافة Figma المتاحة بالفعل.</p>
                <ul>
                  <li><b>Mutabiq for Figma</b> — متاحة الآن (٨٠ قاعدة Lint)</li>
                  <li><b>Mutabiq Cloud V1</b> — تدقيق URL، ZIP، GitHub</li>
                  <li>محرّك DXMI 2026 (+70 قاعدة آلية)</li>
                  <li>تقارير PDF و Excel بالعربية الفصحى</li>
                  <li>دعم تجريبي لـ ٣ جهات شريكة</li>
                </ul>
              </div>
            </article>

            {/* Phase 2 — V1.5 (Q4 2026 - Q1 2027) */}
            <article className="roadmap-phase roadmap-phase-2" data-reveal>
              <span className="roadmap-phase-num">02</span>
              <span className="roadmap-phase-period">Q4 ٢٠٢٦ · Q1 ٢٠٢٧</span>
              <div className="roadmap-phase-body">
                <h3>التشغيل المستمر والمراقبة</h3>
                <p className="roadmap-phase-tagline">تحويل التدقيق من حدث لمرّة واحدة إلى مراقبة دائمة.</p>
                <ul>
                  <li>جدولة تدقيقات دورية (أسبوعية/شهرية)</li>
                  <li>مقارنة تاريخية بين التدقيقات</li>
                  <li>روابط تقارير قابلة للمشاركة</li>
                  <li>تسليم النتائج بالبريد الإلكتروني</li>
                  <li>تدقيق الصفحات المحمية بكلمة مرور</li>
                </ul>
              </div>
            </article>

            {/* Phase 3 — V2 (Q2-Q3 2027) */}
            <article className="roadmap-phase roadmap-phase-3" data-reveal>
              <span className="roadmap-phase-num">03</span>
              <span className="roadmap-phase-period">Q2 · Q3 ٢٠٢٧</span>
              <div className="roadmap-phase-body">
                <h3>التكامل والتوسعة</h3>
                <p className="roadmap-phase-tagline">دخول مُطابق إلى خط الإنتاج اليومي للجهات.</p>
                <ul>
                  <li>تكامل CI/CD (GitHub Actions، GitLab)</li>
                  <li>ربط Nafath / SSO للجهات الحكومية</li>
                  <li>Webhooks للأنظمة الداخلية</li>
                  <li>تقارير بيضاء (white-label)</li>
                  <li>طبقة self-serve بالكارت</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Freebies strip — what we offer pilot entities during phase 1 */}
          <div className="roadmap-freebies" data-reveal>
            <div className="roadmap-freebies-label">
              <span className="roadmap-freebies-dot" aria-hidden />
              ما نُقدّمه للجهات الشريكة في المرحلة الأولى
            </div>
            <ul>
              <li>تدريب الفِرَق</li>
              <li>جلسات مراجعة دورية مع فريقكم</li>
              <li>Mutabiq for Figma Pro</li>
              <li>وصول كامل لمُطابق كلاود</li>
              <li>رخص للجهات الشريكة</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="s" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>اعرف درجتك في DXMI 2026 — في الديزاين أو في الإنتاج.</h2>
            <p>
              احجز عرضًا مخصصًا لجهتك. سنُجري تدقيقًا تجريبيًا على موقعك الرسمي ونعرض النتائج في جلسة واحدة.
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
