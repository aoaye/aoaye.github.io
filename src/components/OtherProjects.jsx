import ProjectCard from "./ProjectCard"

function OtherProjects({ projects }) {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold">Other Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default OtherProjects
