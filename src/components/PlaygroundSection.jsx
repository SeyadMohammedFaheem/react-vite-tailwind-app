const PlaygroundSection = () => {
  const projects = [
    {
      title: 'MOOVE',
      tags: ['Branding', 'Print', 'Signage', 'Web'],
      image: "/assets/icon.png",
    },
    {
      title: 'ELIXIR EMPORIUM',
      tags: ['Branding', 'Print', 'Signage'],
      image: "/assets/project2.png",
    },
    {
      title: 'VA CONFIDENTIAL',
      tags: ['Branding', 'Print'],
      image: "/assets/interaction.png",
    },
    {
      title: 'KM ANALYTICS',
      tags: ['Branding', 'Print', 'Web', 'Social Media'],
      image: "/assets/projectpng",
    },
  ];

  return (
    <section className="relative  py-32 overflow-hidden ">
      {/* Background "Playground" Text */}
      <h2 className="absolute font-denton text-[80px] sm:text-[80px] md:text-[80px]  font-serif z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
        Playground
      </h2>

      {/* Grid Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-5 max-w-[480px] mx-auto flex flex-col transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full object-cover h-[260px]"
            />
            <div className="flex flex-row">          
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaygroundSection;
