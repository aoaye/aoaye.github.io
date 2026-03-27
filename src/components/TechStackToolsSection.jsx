function TechStackToolsSection() {
  return (
    <section id="tech-stack" className="scroll-mt-20 py-8 md:py-9">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-950 dark:text-zinc-50">Tech Stack & Tools</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-950 dark:text-zinc-50">Tech Stack</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>PostgreSQL</li>
          </ul>
        </article>
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-950 dark:text-zinc-50">Tools</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
            <li>Git & GitHub</li>
            <li>Vite</li>
            <li>Docker</li>
            <li>Figma</li>
            <li>Postman</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default TechStackToolsSection
