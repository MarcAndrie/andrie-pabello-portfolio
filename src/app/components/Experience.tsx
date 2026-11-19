
export default function Experience() {
  return (
    <section id="experience" className="border-t border-foreground/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive">
            04 / Background
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold">
            Experience & Education.
          </h2>
        </div>

        <div className="space-y-12">
          <div className="border-t border-foreground/20 pt-5">
            <p className="text-sm text-olive">June 2025 · Internship</p>
            <h3 className="mt-2 font-heading text-xl font-bold">
              IT Intern
            </h3>
            <p className="mt-1 text-sm text-foreground/65">
              Internship Experience
            </p>
            <p className="mt-4 leading-7 text-foreground/75">
              Supported IT operations, troubleshooting, system
              maintenance, documentation, and development-related tasks.
              Also gained exposure to an HR operations web application
              involving MySQL and SQL-based reports.
            </p>
          </div>

          <div className="border-t border-foreground/20 pt-5">
            <p className="text-sm text-olive">2022 – 2026</p>
            <h3 className="mt-2 font-heading text-xl font-bold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="mt-1 text-sm text-foreground/65">
              Emilio Aguinaldo College – Cavite
            </p>
            <p className="mt-4 leading-7 text-foreground/75">
              Developed a foundation in programming, databases,
              software development, and analytical problem-solving.
            </p>
            <p className="mt-3 text-sm font-medium text-olive">
              Academic Recognition: Dean's Lister
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
