
export default function About() {
  return (
    <section id="about" className="border-t border-foreground/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-olive">
            01 / About Me
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold">
            A little about myself.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-foreground/75">
          <p>
            I'm a Computer Science graduate from Emilio Aguinaldo College –
            Cavite with a strong interest in data analytics and business
            intelligence.
          </p>

          <p>
            My experience comes from hands-on analytics projects and
            technical internship work. I've worked with SQL, Python,
            Excel, and Power BI to explore datasets, perform data
            preparation, develop dashboards, and communicate findings.
          </p>

          <p>
            I'm continuously improving my analytical skills and looking
            for opportunities to contribute to data-driven teams while
            growing as a Data Analyst.
          </p>
        </div>
      </div>
    </section>
  );
}
