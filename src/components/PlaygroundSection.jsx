import { CometCard } from '@/components/ui/comet-card';

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
      image: "/assets/interaction.png",
    },
  ];

  const stagger = ["", "sm:translate-y-10", "sm:-translate-y-6", "sm:translate-y-16"]; // per index

  return (
    <section className="relative  py-32 overflow-hidden ">
      {/* Background "Playground" Text */}
      <h2 className="absolute font-denton text-[80px] sm:text-[80px] md:text-[80px]  font-serif z-0 opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
        Playground
      </h2>

      {/* Grid Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-40 md:gap-x-24 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <CometCard key={index} className={`max-w-[480px] mx-auto ${stagger[index % stagger.length]}`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="block w-full h-[260px] object-cover rounded-2xl"
                loading="lazy"
              />
            ) : (
              <div className="h-[220px] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
            )}

            <div className="relative p-5 flex flex-row justify-between  ">
              <h3 className="font-semibold text-xl text-black font-denton tracking-tight">
                {project.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[14px] px-3 py-1 border border-black rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CometCard>
        ))}
      </div>
    </section>
  );
};

export default PlaygroundSection;
