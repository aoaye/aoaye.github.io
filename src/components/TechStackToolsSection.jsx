function TechStackToolsSection({ content }) {
  return (
    <section id="tech-stack" className="scroll-mt-20 py-8 md:py-9">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-950 dark:text-zinc-50">Tech Stack & Tools</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-950 dark:text-zinc-50">Tech Stack</h3>
          <div className="mt-3 grid grid-cols-2 gap-4 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">Languages</p>
              <ul className="mt-1 space-y-1">
                {content.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">Frameworks & Libraries</p>
              <ul className="mt-1 space-y-1">
                {content.frameworks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">ML & Data</p>
              <ul className="mt-1 space-y-1">
                {content.mlData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">Databases</p>
              <ul className="mt-1 space-y-1">
                {content.databases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-950 dark:text-zinc-50">Tools</h3>
          <div className="mt-3 grid grid-cols-2 gap-4 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">Tools & DevOps</p>
              <ul className="mt-1 space-y-1">
                {content.tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">Design</p>
              <ul className="mt-1 space-y-1">
                {content.design.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default TechStackToolsSection
