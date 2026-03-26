function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-wrap gap-6 text-sm">
        <a
          href="https://github.com/aoaye"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-4 text-xs md:text-sm text-zinc-500">Built with React, Tailwind CSS, and Vite.</p>
    </footer>
  )
}

export default Footer
