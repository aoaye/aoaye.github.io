function Gallery({ images = [] }) {
  if (!images.length) return null

  return (
    <div className="mt-4 flex gap-4 overflow-x-auto">
      {images.map((src) => (
        <img key={src} src={src} alt="Project preview" className="h-40 w-64 rounded-xl object-cover" />
      ))}
    </div>
  )
}

export default Gallery
