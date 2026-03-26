import ProjectCard from "./ProjectCard"

function FeaturedProjects({ projects }) {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold">Featured Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
