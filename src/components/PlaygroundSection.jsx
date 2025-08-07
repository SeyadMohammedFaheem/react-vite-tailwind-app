const PlaygroundSection = () => {
  const projects = [
    {
      title: 'MOOVE',
      tags: ['Branding', 'Print', 'Signage', 'Web'],
      image: '/gift-suggestion.png',
    },
    {
      title: 'ELIXIR EMPORIUM',
      tags: ['Branding', 'Print', 'Signage'],
      image: '/octalume.png',
    },
    {
      title: 'VA CONFIDENTIAL',
      tags: ['Branding', 'Print'],
      image: '/perfume.png',
    },
    {
      title: 'KM ANALYTICS',
      tags: ['Branding', 'Print', 'Web', 'Social Media'],
      image: '/real-estate.png',
    },
  ];

  return (
    <section className="relative px-6 py-32 overflow-hidden bg-[#FAF8F1]">
      {/* Background "Playground" Text */}
      <h2 className="absolute text-[100px] sm:text-[160px] md:text-[220px] text-[#11111110] font-serif z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
        Playground
      </h2>

      {/* Grid Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-5 max-w-[480px] mx-auto transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full object-cover h-[260px]"
            />
            <h3 className="mt-4 font-semibold text-xl text-black">
              {project.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-black rounded-full"
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
