import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import TechStackToolsSection from "./components/TechStackToolsSection"
import FeaturedProjects from "./components/FeaturedProjects"
import OtherProjects from "./components/OtherProjects"
import DesignWorkSection from "./components/DesignWorkSection"
import Footer from "./components/Footer"
import { aboutContent, designWork, footerContent, heroContent, projects, techStackContent } from "./data/projects"

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark")
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <Hero content={heroContent} />
      <button
        type="button"
        onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/95 p-3 text-zinc-800 shadow-lg transition hover:scale-[1.03] dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-zinc-100"
      >
        {theme === "dark" ? (
          <FiSun className="h-5 w-5" aria-hidden />
        ) : (
          <FiMoon className="h-5 w-5" aria-hidden />
        )}
      </button>
      <main className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
        <AboutSection content={aboutContent} />
        <TechStackToolsSection content={techStackContent} />
        <FeaturedProjects projects={featuredProjects} />
        <OtherProjects projects={otherProjects} />
        <DesignWorkSection items={designWork} />
      </main>
      <Footer content={footerContent} />
    </div>
  )
}

export default App
