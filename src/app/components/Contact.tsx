
export default function Contact() {
  return (
    <section id="contact" className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-olive">
          05 / Contact
        </p>

        <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
          Let's connect and create something meaningful with data.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-foreground/70">
          I'm open to entry-level opportunities in Data Analytics,
          Business Intelligence, and Reporting. Feel free to reach out.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:andrie.pabello@gmail.com"
            className="rounded-full bg-olive px-7 py-3.5 text-sm font-semibold !text-background transition-colors hover:bg-foreground"
          >
            Email Me ↗
          </a>

          <a
            href="https://www.linkedin.com/in/marc-andrie-pabello/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-olive hover:text-olive"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/MarcAndrie"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-olive hover:text-olive"
          >
            GitHub ↗
          </a>
        </div>

        <footer className="mt-24 flex flex-wrap justify-between gap-3 border-t border-foreground/15 pt-6 text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Andrie Pabello.</p>
          <p>Designed and built with Next.js.</p>
        </footer>
      </div>
    </section>
  );
}
