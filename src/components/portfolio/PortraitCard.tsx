export function PortraitCard() {
  return (
    <figure className="relative mx-auto w-full max-w-sm">
      <div
        className="orbit-ring -left-10 -top-10 hidden h-[22rem] w-[22rem] sm:block"
        aria-hidden
      />
      <div
        className="orbit-ring -bottom-14 -right-12 hidden h-[16rem] w-[16rem] sm:block"
        aria-hidden
      />

      <div className="relative rounded-[13rem_13rem_1.25rem_1.25rem] border border-border bg-card p-3 shadow-card">
        <div className="relative overflow-hidden rounded-[12rem_12rem_0.75rem_0.75rem] bg-secondary">
          <div className="aspect-[3/4] w-full">
            <img
              src="/oluwatobi-bada.jpg"
              alt="Oluwatobi Bada, founder and product builder"
              className="h-full w-full object-cover object-[center_24%]"
              width={1200}
              height={1200}
              loading="eager"
            />
          </div>
        </div>

        <figcaption className="flex items-center gap-3 px-2 pb-1 pt-4">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
          <span className="min-w-0 text-sm text-muted-foreground">
            Oluwatobi Bada —{" "}
            <span className="serif-em text-foreground">Founder &amp; Product Builder</span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
