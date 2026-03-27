function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-900 px-6 py-12 md:px-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
          Your Name
        </h1>
        <p className="mt-4 text-sm md:text-base text-blue-100">
          Software Engineer | ML | Designer
        </p>
        <p className="mt-5 max-w-2xl text-sm md:text-base leading-6 text-blue-50">
          Building practical products with clear UX, strong engineering quality, and measurable outcomes.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Tailwind CSS", "Node.js", "Python"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs md:text-sm text-blue-50 backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="https://github.com/aoaye"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 bg-white/10 p-2 text-white/95 transition hover:bg-white/20"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.25 1.84 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.62-2.66-.31-5.46-1.35-5.46-5.99 0-1.32.47-2.4 1.24-3.25-.13-.31-.54-1.55.12-3.22 0 0 1.01-.33 3.3 1.24a11.4 11.4 0 0 1 6 0c2.29-1.57 3.3-1.24 3.3-1.24.66 1.67.25 2.91.12 3.22.77.85 1.24 1.93 1.24 3.25 0 4.65-2.8 5.68-5.47 5.98.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 bg-white/10 p-2 text-white/95 transition hover:bg-white/20"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM2.75 9h4.46v12H2.75V9Zm7.12 0h4.28v1.64h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V21h-4.46v-5.18c0-1.24-.02-2.83-1.72-2.83-1.72 0-1.99 1.34-1.99 2.74V21H9.87V9Z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 bg-white/10 p-2 text-white/95 transition hover:bg-white/20"
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M18.9 2h3.68l-8.05 9.2L24 22h-7.5l-5.87-7.17L4.36 22H.68l8.61-9.85L0 2h7.69l5.31 6.49L18.9 2Zm-1.3 17.76h2.03L6.59 4.14H4.4L17.6 19.76Z" />
            </svg>
          </a>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
        alt="Profile portrait"
        className="relative h-36 w-36 md:h-48 md:w-48 rounded-full object-cover border-4 border-white/50 shadow-xl"
      />
    </header>
  )
}

export default Hero
