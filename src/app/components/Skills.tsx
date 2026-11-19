
const skillGroups = [
  {
    title: "Data Analysis",
    skills: ["SQL", "Python", "Excel", "Pandas", "NumPy"],
  },
  {
    title: "Business Intelligence",
    skills: ["Power BI", "DAX", "Data Visualization", "KPI Reporting"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VBA", "Streamlit", "Jupyter Notebook"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-olive">
          02 / Technical Skills
        </p>

        <h2 className="mt-4 font-heading text-3xl font-bold">
          Tools I work with.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-foreground/70">
          Technologies and tools I've used throughout my academic,
          internship, and independent projects.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-foreground/20 pt-5">
              <h3 className="font-heading text-lg font-bold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
