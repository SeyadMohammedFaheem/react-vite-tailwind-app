import React from "react";

const projects = [
  {
    title: "STORY: COLLECTABLES",
    description:
      "Building a strategic brand evolution for a premium streetwear consignment store.",
    image: "/images/project1.png",
  },
  {
    title: "GREENBOX DIGITAL",
    description:
      "Blending digital simplicity with thoughtful design and distinctive character.",
    image: "/images/project2.png",
  },
  {
    title: "VALKYRIE DISTILLERY",
    description:
      "Crafting a mystical Norse-inspired brand identity for an artisanal craft gin distillery.",
    image: "/images/project3.png",
  },
  {
    title: "VELDT® APPAREL",
    description:
      "Inspiring a local community with trend-forward clothing rooted in nature.",
    image: "/images/project4.png",
  },
  {
    title: "VALKYRIE DISTILLERY",
    description:
      "Crafting a mystical Norse-inspired brand identity for an artisanal craft gin distillery.",
    image: "/images/project5.png",
  },
  {
    title: "MOOOVE: BESPOKE MOBILITY",
    description:
      "Integrating dynamism and mobility across diverse branding touchpoints.",
    image: "/images/project6.png",
  },
  {
    title: "VELDT® APPAREL",
    description:
      "Inspiring a local community with trend-forward clothing rooted in nature.",
    image: "/images/project7.png",
  },
  {
    title: "VELDT® APPAREL",
    description:
      "Inspiring a local community with trend-forward clothing rooted in nature.",
    image: "/images/project8.png",
  },
];

export default function SelectedProjects() {
  return (
    <section className=" py-12">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#111] mb-2">
        SELECTED <span className="italic font-normal">PROJECTS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-md shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#111]">
              {project.title}
            </h3>
            <p className="text-sm text-[#737373] mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
