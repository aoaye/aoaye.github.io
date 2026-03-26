import ProjectCard from "./ProjectCard"

function OtherProjects({ projects }) {
  return (
    <section className="py-16" aria-labelledby="other-projects-heading">
      <h2 id="other-projects-heading" className="text-2xl md:text-3xl font-semibold text-zinc-950 dark:text-zinc-50">Other Projects</h2>
      <p className="mt-3 max-w-2xl text-sm md:text-base text-zinc-600 dark:text-zinc-400">
        Compact cards for supporting projects while preserving the same typography and spacing system.
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} isFeatured={false} />
        ))}
      </div>
    </section>
  )
}

export default OtherProjects
