import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Gallery from "./Gallery"
import { linkTypeStyles, renderLinkTypeIcon } from "../utils/iconMaps"

function DesignCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  useEffect(() => {
    if (!isOverlayOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOverlayOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOverlayOpen])

  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-7 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-xl md:text-2xl font-semibold text-zinc-950 dark:text-zinc-50">{item.title}</h3>
      <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400">{item.description}</p>

      <button
        type="button"
        onClick={() => setIsOverlayOpen(true)}
        className="mt-5 block overflow-hidden rounded-2xl border border-zinc-200 transition hover:opacity-95 dark:border-zinc-800"
      >
        <img
          src={item.mainImage}
          alt={`${item.title} main preview`}
          className="h-52 w-full object-cover md:h-64"
        />
      </button>

      <div className="mt-5 flex flex-wrap gap-3">
        {item.links.map((link) => {
          return (
            <a
              key={`${item.title}-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${linkTypeStyles[link.type] ?? "bg-zinc-700 text-zinc-50 hover:bg-zinc-600"}`}
            >
              {renderLinkTypeIcon(link.type, "h-4 w-4")}
              {link.label}
            </a>
          )
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-700 dark:bg-zinc-800/60">
        <button
          type="button"
          onClick={() => setIsExpanded((state) => !state)}
          aria-expanded={isExpanded}
          className="inline-flex items-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-500"
        >
          {isExpanded ? "Hide Details" : "View Details"}
        </button>
        <div className={`transition-all duration-200 overflow-hidden ${isExpanded ? "max-h-[1600px] mt-4" : "max-h-0"}`}>
          <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">{item.details.overview}</p>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Focus Areas</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {item.details.focusAreas.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Design System</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {item.details.designSystem.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">Tools:</span> {item.details.tools.join(", ")}
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">Status:</span> {item.details.status}
          </p>

          <Gallery images={item.images} title={item.title} />
        </div>
      </div>

      {isOverlayOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-6"
              role="dialog"
              aria-modal="true"
              onClick={() => setIsOverlayOpen(false)}
            >
              <div
                className="relative flex max-h-[72vh] max-w-[72vw] items-center justify-center"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsOverlayOpen(false)}
                  className="absolute -top-10 right-0 rounded-lg border border-zinc-300 bg-white px-3 py-1 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  Close
                </button>
                <img
                  src={item.mainImage}
                  alt={`${item.title} expanded preview`}
                  className="max-h-[72vh] max-w-[72vw] rounded-2xl border border-zinc-700 object-contain shadow-2xl"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </article>
  )
}

function DesignWorkSection({ items }) {
  return (
    <section id="design-work" className="scroll-mt-20 py-16" aria-labelledby="design-work-heading">
      <h2 id="design-work-heading" className="text-2xl md:text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
        Design Work
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <DesignCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}

export default DesignWorkSection
