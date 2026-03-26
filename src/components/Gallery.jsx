function Gallery({ images = [] }) {
  if (!images.length) return null

  return (
    <div className="mt-5">
      <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Gallery</h4>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-1">
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt="Project preview"
          className="h-40 w-64 rounded-2xl border border-zinc-200 object-cover dark:border-zinc-800"
        />
      ))}
      </div>
    </div>
  )
}

export default Gallery
