import React from "react";

const projects = [
  {
    title: "STORY: COLLECTABLES",
    description: "Building a strategic brand evolution for a premium streetwear consignment store.",
    image: "/assets/design-token.png",
  },
  {
    title: "GREENBOX DIGITAL",
    description: "Blending digital simplicity with thoughtful design and distinctive character.",
    image: "/assets/2.jpg",
  },
  {
    title: "VALKYRIE DISTILLERY",
    description: "Crafting a mystical Norse-inspired brand identity for an artisanal craft gin distillery.",
    image: "/assets/3.jpg",
  },
  {
    title: "VELDT® APPAREL",
    description: "Inspiring a local community with trend-forward clothing rooted in nature.",
    image: "/assets/4.jpg",
  },
  {
    title: "VALKYRIE DISTILLERY",
    description: "Crafting a mystical Norse-inspired brand identity for an artisanal craft gin distillery.",
    image: "/assets/5.jpg",
  },
  {
    title: "MOOOVE: BESPOKE MOBILITY",
    description: "Integrating dynamism and mobility across diverse branding touchpoints.",
    image: "/assets/6.jpg",
  },
  {
    title: "VELDT® APPAREL",
    description: "Inspiring a local community with trend-forward clothing rooted in nature.",
    image: "/assets/7.jpg",
  },
  {
    title: "VELDT® APPAREL",
    description: "Inspiring a local community with trend-forward clothing rooted in nature.",
    image: "/assets/8.jpg",
  },
];

const SelectedProjects = () => {
  return (
    <section className="pt-[160px]">
      <h2 className="text-4xl md:text-5xl font-semibold font-playfair text-[#111] mb-2">SELECTED</h2>
      <h3 className="text-3xl md:text-4xl italic font-playfair text-[#111] mb-12">PROJECTS</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[88px]">
        {projects.map((project, index) => (
          <div key={index}>
            <img
              src={project.image}
              alt={project.title}
              className=" w-full object-cover"
            />
            <h4 className="text-sm font-semibold mt-4 text-[#111]">{project.title}</h4>
            <p className="text-sm text-[#737373] mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
