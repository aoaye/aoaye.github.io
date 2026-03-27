function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-200 bg-zinc-100 py-12 md:py-16 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
        <div className="flex flex-wrap gap-6 text-base font-medium">
          <a
            href="https://github.com/aoaye"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-sm md:text-base font-semibold text-zinc-700 dark:text-zinc-300">
          Built with React, Tailwind CSS, and Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer
