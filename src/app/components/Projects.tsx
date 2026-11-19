
const projects = [
  {
    number: "01",
    name: "6M Mart",
    category: "Retail Business Intelligence",
    github: "https://github.com/MarcAndrie/6M-Mart-BI-Project",
    description:
      "An end-to-end retail analytics project analyzing two years of simulated sales, profitability, returns, promotions, and inventory data across eight branches.",
    tools: ["Python", "PostgreSQL", "SQL", "Power BI", "Excel"],
    highlights: [
      "₱37.52M net sales",
      "28.21% gross profit margin",
      "40,050 transactions analyzed",
      "Inventory and stockout monitoring",
    ],
  },
  {
    number: "02",
    name: "Customer Churn Analytics",
    category: "Predictive Analytics",
    github: "https://github.com/MarcAndrie",
    description:
      "A customer churn analysis project combining exploratory data analysis, machine learning, and interactive reporting to identify customer retention patterns.",
    tools: ["Python", "Pandas", "XGBoost", "Power BI", "Streamlit", "SHAP"],
    highlights: [
      "7,000+ customer records",
      "83.5% model accuracy",
      "Customer churn analysis",
      "Predictive insights and visualization",
    ],
  },
  {
    number: "03",
    name: "Online Retail Data Analysis",
    category: "Excel & Data Quality",
    github: "https://github.com/MarcAndrie",
    description:
      "An Excel and VBA project focused on cleaning and analyzing an online retail dataset, automating data quality checks, and preparing sales summaries.",
    tools: ["Microsoft Excel", "VBA", "Pivot Tables"],
    highlights: [
      "41,910 records processed",
      "Automated data quality checks",
      "Revenue and transaction status tracking",
      "Sales summary reporting",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-olive">
          03 / Featured Projects
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold">
            Selected work.
          </h2>
          <p className="max-w-sm text-sm leading-6 text-foreground/65">
            A collection of projects demonstrating my analytical,
            technical, and problem-solving skills.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-8 border-t border-foreground/20 py-8 md:grid-cols-[100px_1fr]"
            >
              <span className="font-heading text-3xl font-bold text-olive/60">
                {project.number}
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-olive">
                  {project.category}
                </p>

                <h3 className="mt-2 font-heading text-2xl font-bold">
                  {project.name}
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-foreground/75">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-sage/30 px-3 py-1.5 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <p key={highlight} className="text-sm text-foreground/80">
                      <span className="mr-2 text-olive">↗</span>
                      {highlight}
                    </p>
                  ))}
                </div>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-olive transition-colors hover:text-foreground"
                >
                    View on GitHub
                    <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
