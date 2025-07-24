const PlaygroundSection = () => {
  const projects = [
    { title: 'MOOVE', tags: ['Branding', 'Print', 'Signage', 'Web'], image: 'src/assets/5.jpg' },
    { title: 'ELIXIR EMPORIUM', tags: ['Branding', 'Print', 'Signage'], image: 'src/assets/5.jpg' },
    { title: 'VA CONFIDENTIAL', tags: ['Branding', 'Print'], image: 'src/assets/5.jpg' },
    { title: 'KM ANALYTICS', tags: ['Branding', 'Print', 'Web', 'Social Media'], image: 'src/assets/5.jpg' },
  ];

  // Add custom positioning for randomness
  const cardStyles = [
    'translate-x-[-10%] translate-y-[-10%] max-w-[320px]',
    'translate-x-[10%] translate-y-[-20%] max-w-[400px]',
    'translate-x-[-5%] translate-y-[10%] max-w-[360px]',
    'translate-x-[15%] translate-y-[5%] max-w-[360px]',
  ];

  return (
    <section className="relative px-6 py-32  overflow-hidden">
      {/* Background Playground Text */}
      <h2 className="absolute text-[140px] sm:text-[180px] md:text-[240px] text-[#11111115] font-serif z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
        Playground
      </h2>

      {/* Cards Container */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md p-4 ${cardStyles[index]} transition-transform duration-300`}
          >
            <img src={project.image} alt={project.title} className="rounded-md w-full" />
            <h3 className="mt-4 font-medium text-black">{project.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border border-black rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaygroundSection;
