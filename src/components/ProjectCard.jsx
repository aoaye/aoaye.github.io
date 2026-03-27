import { useState } from "react"
import Gallery from "./Gallery"

const linkTypeStyles = {
  github: "bg-black text-white hover:opacity-90",
  website: "bg-zinc-50 text-zinc-950 hover:brightness-95",
  streamlit: "bg-red-600 text-white hover:bg-red-700",
  linkedin: "bg-blue-600 text-white hover:bg-blue-700",
  youtube: "bg-red-600 text-white hover:bg-red-700",
  download: "bg-zinc-800 text-zinc-50 hover:bg-zinc-700",
}

function ProjectCard({ project, isFeatured }) {
  const [isExpanded, setIsExpanded] = useState(false)
  if (!project) return null

  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-7 transition-all duration-200 hover:scale-[1.01] hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <h3 className="text-xl md:text-2xl font-semibold text-zinc-950 dark:text-zinc-50">{project.title}</h3>
      <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <ul className="mt-4 space-y-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
        {project.highlights?.map((highlight) => (
          <li key={highlight}>- {highlight}</li>
        ))}
      </ul>

      <div className="mt-4 space-y-2 text-sm md:text-base">
        <p className="text-zinc-700 dark:text-zinc-300">
          <span className="font-medium text-zinc-900 dark:text-zinc-100">Use case:</span> {project.useCase}
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          <span className="font-medium text-zinc-900 dark:text-zinc-100">Target users:</span> {project.targetUsers}
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Key features</h4>
        <ul className="mt-2 list-disc pl-5 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
          {project.keyFeatures?.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack?.map((item) => (
          <span
            key={item}
            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs md:text-sm text-blue-700 dark:text-blue-300"
          >
            {item}
          </span>
        ))}
      </div>

      {project.video ? (
        <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <iframe
            src={project.video}
            title={`${project.title} demo`}
            className="aspect-video w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      ) : null}

      {isFeatured && project.images?.length ? (
        <Gallery images={project.images} title={project.title} />
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links?.map((link) => (
          <a
            key={`${project.title}-${link.type}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${linkTypeStyles[link.type] ?? "bg-zinc-700 text-zinc-50 hover:bg-zinc-600"}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {isFeatured && project.challenges?.length ? (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-700 dark:bg-zinc-800/60">
          <button
            type="button"
            onClick={() => setIsExpanded((state) => !state)}
            aria-expanded={isExpanded}
            className="inline-flex items-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-200 hover:border-zinc-400 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-500"
          >
            {isExpanded ? "Hide Details" : "View Details"}
          </button>
          <div className={`transition-all duration-200 overflow-hidden ${isExpanded ? "max-h-[1000px] mt-4" : "max-h-0"}`}>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Engineering challenges</h4>
            <div className="mt-3 space-y-3">
              {project.challenges.map((challenge) => (
                <div key={challenge.title} className="text-sm text-zinc-700 dark:text-zinc-300">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{challenge.title}</p>
                  <p><span className="font-medium">Problem:</span> {challenge.problem}</p>
                  <p><span className="font-medium">Cause:</span> {challenge.cause}</p>
                  <p><span className="font-medium">Solution:</span> {challenge.solution}</p>
                  <p><span className="font-medium">Outcome:</span> {challenge.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default ProjectCard
