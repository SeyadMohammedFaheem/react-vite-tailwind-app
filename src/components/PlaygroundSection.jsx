const projects = [
  {
    title: "MOOVE",
    image: "/images/playground1.png",
    tags: ["Branding", "Print", "Signage", "Web"],
  },
  {
    title: "ELIXIR EMPORIUM",
    image: "/images/playground2.png",
    tags: ["Branding", "Print", "Signage"],
  },
  {
    title: "VA CONFIDENTIAL",
    image: "/images/playground3.png",
    tags: ["Branding", "Print"],
  },
  {
    title: "KM ANALYTICS",
    image: "/images/playground4.png",
    tags: ["Branding", "Print", "Web", "Social Media"],
  },
];

export default function PlaygroundSection() {
  return (
    <section className=" py-16">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#111] mb-12">
        Playground
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="space-y-3">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <h3 className="text-sm font-semibold uppercase text-[#111]">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
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
}
