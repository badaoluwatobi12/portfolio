import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { PortraitCard } from "@/components/portfolio/PortraitCard";
import { WorkCard } from "@/components/portfolio/WorkCard";

const title = "Oluwatobi Bada — Founder & Product Builder";
const description =
  "Oluwatobi Bada is a Nigerian founder and product builder creating useful digital platforms — VenueDek and MoveDek — for people and businesses across Africa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = ["Product Strategy", "Business Development", "Digital Platforms", "Brand Building"];

const principles = [
  {
    no: "01",
    title: "Start with the problem",
    copy: "Good products begin with a clear, honest understanding of what people actually struggle with — not with the technology.",
  },
  {
    no: "02",
    title: "Keep it useful",
    copy: "Simplicity is a feature. If a product doesn't make someone's day measurably easier, the extra polish doesn't matter.",
  },
  {
    no: "03",
    title: "Build for the long term",
    copy: "Durable businesses come from steady execution, real trust, and systems that still hold up as they grow.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Founder · Product Builder · Entrepreneur
              </p>
              <h1 className="text-balance-tight mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                I build digital products that make{" "}
                <span className="serif-em text-accent">everyday life</span> simpler.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m Oluwatobi Bada, a founder turning ambitious ideas into useful digital
                platforms for people and businesses across Africa.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="pill">
                  <a href="#work">Explore my work</a>
                </Button>
                <Button asChild variant="hairline" size="pill">
                  <a href="#about">More about me</a>
                </Button>
              </div>
            </div>

            <PortraitCard />
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">About</p>
                <h2 className="text-balance-tight mt-6 font-display text-3xl font-semibold leading-[1.08] sm:text-5xl">
                  Ideas are only the beginning.{" "}
                  <span className="serif-em text-accent">I care about making them work.</span>
                </h2>
              </div>
              <div className="min-w-0 space-y-5 text-base leading-relaxed text-ink-foreground/70">
                <p>
                  I&apos;m an entrepreneur and product builder focused on practical technology — the
                  kind that solves a real problem the day it ships. My work sits across business,
                  logistics, experiences, and digital innovation.
                </p>
                <p>
                  I like taking a messy, everyday frustration and shaping it into a platform that
                  people trust and return to. That means paying as much attention to operations,
                  partnerships, and brand as to the product itself.
                </p>
              </div>
            </div>

            <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline-inverse bg-hairline-inverse sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <li key={s} className="bg-ink px-6 py-8">
                  <span className="serif-em text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-28">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="grid items-end gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Selected Work</p>
                <h2 className="text-balance-tight mt-5 font-display text-3xl font-semibold sm:text-5xl">
                  Platforms I&apos;ve <span className="serif-em">built and led</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm text-muted-foreground">
                Two ventures, one idea: make useful things that work for real people.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <WorkCard
                index="01 — Discovery & Booking"
                name="VenueDek"
                tagline="Find the right place for every moment."
                description="A discovery and booking platform connecting people with venues, activities, and memorable experiences."
                href="https://venuedek.com"
                tone="accent"
                imageSrc="/venuedek-preview.png"
                imageAlt="VenueDek activity and venue booking homepage"
              />
              <WorkCard
                index="02 — Logistics"
                name="MoveDek"
                tagline="Moving things forward."
                description="A technology-powered logistics platform making local delivery and moving simpler, more transparent, and dependable."
                href="https://movedek.com"
                tone="moss"
                imageSrc="/movedek-preview.png"
                imageAlt="MoveDek interstate delivery homepage"
              />
            </div>
          </div>
        </section>

        {/* How I Think */}
        <section className="hairline-t hairline-b bg-paper-deep">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">How I Think</p>
            <h2 className="text-balance-tight mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
              Three principles behind <span className="serif-em">everything I build</span>
            </h2>

            <div className="mt-14 grid gap-px overflow-hidden border-t border-border md:grid-cols-3">
              {principles.map((p) => (
                <article
                  key={p.no}
                  className="border-b border-border py-8 md:border-b-0 md:px-8 md:py-10 md:first:pl-0 md:[&+*]:border-l"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {p.no}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 bg-ink text-ink-foreground">
          <div className="relative mx-auto max-w-6xl overflow-hidden px-5 py-24 md:px-8 md:py-32">
            <div
              className="pointer-events-none absolute -right-24 -top-24 hidden h-96 w-96 rounded-full border border-hairline-inverse md:block"
              aria-hidden
            />
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
            <h2 className="text-balance-tight mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] sm:text-6xl">
              Have an idea <span className="serif-em text-accent">worth building?</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-ink-foreground/70">
              Open to partnerships, opportunities, and thoughtful conversations.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="pill">
                <a href="mailto:badaoluwatobi12@gmail.com" aria-label="Email Oluwatobi Bada">
                  Email me
                </a>
              </Button>
              <Button asChild variant="hairlineInverse" size="pill">
                <a
                  href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD%2FII7H4oT8Gp4hMAuLOiCA%3D%3D"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open Oluwatobi Bada's LinkedIn profile"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
            <a
              href="mailto:badaoluwatobi12@gmail.com"
              className="mt-5 inline-block text-sm text-ink-foreground/50 transition-colors hover:text-accent"
            >
              badaoluwatobi12@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-hairline-inverse px-5 py-8 md:px-8">
          <p className="min-w-0 text-sm text-ink-foreground/60">
            © 2026 Oluwatobi Bada — Building useful things from Nigeria.
          </p>
          <a
            href="#top"
            className="shrink-0 text-sm text-ink-foreground/60 transition-colors hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
