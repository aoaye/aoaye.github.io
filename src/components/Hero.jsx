function Hero() {
  return (
    <section className="py-20 md:py-24">
      <p className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs md:text-sm font-medium text-blue-600 dark:text-blue-300">
        Open to work
      </p>
      <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Your Name
      </h1>
      <p className="mt-4 text-sm md:text-base text-zinc-600 dark:text-zinc-400">
        Software Engineer | ML | Designer
      </p>
      <p className="mt-5 max-w-2xl text-sm md:text-base leading-6 text-zinc-700 dark:text-zinc-300">
        Building practical products with clear UX, strong engineering quality, and measurable outcomes.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {["React", "Tailwind CSS", "Node.js", "Python"].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs md:text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Hero
