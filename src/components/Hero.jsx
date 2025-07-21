import React from "react";

const projects = [
  "src/assets/1.jpg",
  "src/assets/2.jpg",
  "src/assets/3.jpg",
  "src/assets/4.jpg",
  "src/assets/5.jpg",
];

const Hero = () => {
  return (
    <section className="bg-[#FAF8F1] text-[#111111] h-screen py-10">
      {/* Image Row */}
      <div className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide">
        {projects.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Project ${idx + 1}`}
            className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] h-auto  object-cover"
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="max-w-4xl mt-10">
        <p className="text-2xl sm:text-3xl font-Denton  text-left md:text-4xl font-light leading-snug tracking-tight">
          Multidisciplinary designer and developer helping teams and companies build meaningful products and create memorable digital experiences from concept to launch.
        </p>
      </div>
    </section>
  );
};

export default Hero;
