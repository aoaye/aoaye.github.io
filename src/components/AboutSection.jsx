function AboutSection({ content }) {
  return (
    <section id="about" className="scroll-mt-20 py-8 md:py-9">
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-950 dark:text-zinc-50">About</h2>
      <p className="mt-4 max-w-3xl text-sm md:text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {content}
      </p>
    </section>
  )
}

export default AboutSection
