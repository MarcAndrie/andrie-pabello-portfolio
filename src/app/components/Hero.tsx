
export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl flex-col justify-center px-6 py-24"
    >
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-olive">
        Data Analyst · BI Enthusiast
      </p>

      <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
        Turning data into{" "}
        <span className="text-olive">meaningful insights.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/75">
        Hi, I'm Andrie Pabello. I work with data to uncover patterns,
        develop meaningful dashboards, and translate information into
        insights that support better business decisions.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
            href="/Andrie-Pabello-Resume.pdf"
            download
            className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-olive hover:text-olive"
        >
            Download Résumé ↓
        </a>
        <a
          href="#projects"
          className="rounded-full bg-olive px-7 py-3.5 text-sm font-semibold !text-background transition-colors hover:bg-foreground"
        >
          Explore My Projects ↗
        </a>

        <a
          href="#contact"
          className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-olive hover:text-olive"
        >
          Get in Touch
        </a>
      </div>

      <div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-foreground/15 pt-6 text-xs font-medium uppercase tracking-wider text-foreground/60">
        <span>SQL · Python · Power BI · Excel</span>
        <span>Cavite, Philippines</span>
      </div>
    </section>
  );
}
