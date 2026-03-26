function ProjectCard({ project }) {
  if (!project) return null

  return (
    <article className="rounded-2xl border border-zinc-300 p-4">
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="mt-2 text-sm">{project.description}</p>
    </article>
  )
}

export default ProjectCard
