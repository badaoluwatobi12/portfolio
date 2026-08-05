import { ArrowUpRight } from "lucide-react";

type Tone = "accent" | "moss";

interface WorkCardProps {
  index: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  tone: Tone;
  imageSrc: string;
  imageAlt: string;
}

export function WorkCard({
  index,
  name,
  tagline,
  description,
  href,
  tone,
  imageSrc,
  imageAlt,
}: WorkCardProps) {
  const isAccent = tone === "accent";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div
        className={`relative h-56 overflow-hidden sm:h-64 ${isAccent ? "bg-accent" : "bg-moss"}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
          aria-hidden
        />
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {index}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <h3 className="min-w-0 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {name}
          </h3>
          <ArrowUpRight className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
        </div>
        <p className="serif-em text-lg text-accent">{tagline}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-auto pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {href.replace("https://", "")}
        </span>
      </div>
    </a>
  );
}
