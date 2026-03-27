import { useEffect, useRef, useState } from "react"
import ProjectCard from "./ProjectCard"

function FeaturedProjects({ projects }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-projects" ref={sectionRef} className="scroll-mt-20 py-10 md:py-12" aria-labelledby="featured-projects-heading">
      <h2 id="featured-projects-heading" className="text-2xl md:text-3xl font-semibold text-zinc-950 dark:text-zinc-50">Featured Projects</h2>
      <p className="mt-3 max-w-2xl text-sm md:text-base text-zinc-600 dark:text-zinc-400">
        Deep project snapshots with richer call-to-action styling and layered content presentation.
      </p>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <ProjectCard project={project} isFeatured />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
