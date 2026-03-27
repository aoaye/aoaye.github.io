import { useEffect, useState } from "react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#featured-projects", label: "Featured Projects" },
  { href: "#other-projects", label: "Other Projects" },
  { href: "#design-work", label: "Design Work" },
]

function Navbar() {
  const [activeHref, setActiveHref] = useState("#about")

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        element: document.querySelector(item.href),
      }))
      .filter((section) => section.element)

    const updateActive = () => {
      if (!sections.length) return
      const threshold = 140

      let current = sections[0].href
      for (const section of sections) {
        const top = section.element.getBoundingClientRect().top
        if (top <= threshold) current = section.href
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1].href
      }

      setActiveHref((prev) => (prev === current ? prev : current))
    }

    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    window.addEventListener("resize", updateActive)

    return () => {
      window.removeEventListener("scroll", updateActive)
      window.removeEventListener("resize", updateActive)
    }
  }, [])

  return (
    <nav className="sticky top-0 left-0 right-0 z-[120] -mb-10 border-b border-white/20 bg-zinc-900/40 backdrop-blur-md">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-4 md:px-6 xl:px-8">
        <ul className="flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition ${
                  activeHref === item.href
                    ? "text-blue-300 font-semibold"
                    : "text-zinc-100/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
