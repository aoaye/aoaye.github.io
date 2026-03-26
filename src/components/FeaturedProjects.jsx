import ProjectCard from "./ProjectCard"

function FeaturedProjects({ projects }) {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-950 dark:text-zinc-50">Featured Projects</h2>
      <p className="mt-3 max-w-2xl text-sm md:text-base text-zinc-600 dark:text-zinc-400">
        Deep project snapshots with richer call-to-action styling and layered content presentation.
      </p>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} isFeatured />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
