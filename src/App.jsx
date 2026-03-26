import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import OtherProjects from "./components/OtherProjects"
import Footer from "./components/Footer"
import { projects } from "./data/projects"

function App() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="mx-auto max-w-7xl px-6 md:px-10 xl:px-12">
        <Hero />
        <FeaturedProjects projects={featuredProjects} />
        <OtherProjects projects={otherProjects} />
        <Footer />
      </main>
    </div>
  )
}

export default App
