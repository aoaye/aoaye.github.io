import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

function Gallery({ images = [], title }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [overlayIndex, setOverlayIndex] = useState(null)
  const itemRefs = useRef([])
  const skipInitialScroll = useRef(true)

  const prev = () => setActiveIndex((idx) => (idx === 0 ? images.length - 1 : idx - 1))
  const next = () => setActiveIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1))

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false
      return
    }
    itemRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }, [activeIndex])

  useEffect(() => {
    if (overlayIndex === null) return undefined

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOverlayIndex(null)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [overlayIndex])

  if (!images.length) return null

  return (
    <div className="mt-5">
      <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Gallery</h4>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-300 p-2 text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600"
        >
          <FiChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-300 p-2 text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600"
        >
          <FiChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="gallery-scroll mt-3 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
        {images.map((src, idx) => (
          <button
            key={src}
            ref={(el) => {
              itemRefs.current[idx] = el
            }}
            type="button"
            onClick={() => setOverlayIndex(idx)}
            className={`snap-start shrink-0 overflow-hidden rounded-2xl border transition-all duration-200 ${idx === activeIndex ? "border-blue-500 shadow-md" : "border-zinc-200 dark:border-zinc-800"}`}
          >
            <img
              src={src}
              alt={`${title} screenshot ${idx + 1}`}
              className="h-40 w-64 object-cover"
            />
          </button>
        ))}
      </div>

      {overlayIndex !== null ? createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={() => setOverlayIndex(null)}
        >
          <div
            className="relative flex max-h-[72vh] max-w-[72vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOverlayIndex(null)}
              className="absolute -top-10 right-0 rounded-lg border border-zinc-300 bg-white px-3 py-1 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Close expanded image"
            >
              Close
            </button>
            <img
              src={images[overlayIndex]}
              alt={`${title} expanded screenshot`}
              className="max-h-[72vh] max-w-[72vw] rounded-2xl border border-zinc-700 object-contain shadow-2xl"
            />
          </div>
        </div>,
        document.body,
      ) : null}
    </div>
  )
}

export default Gallery
