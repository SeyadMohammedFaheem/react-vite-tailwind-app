import React, { useRef, useEffect } from "react";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";

const projects = [img1, img2, img3, img4, img5];

const Hero = () => {
  const scrollRef = useRef(null);

  const images = [...projects, ...projects];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 5;
    const intervalMs = 20;

    const interval = setInterval(() => {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + scrollStep,
        behavior: "smooth",
      });

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: "auto",
        });
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" mt-[52px] flex flex-col justify-between">
      {/* Image Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-[12px] scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, idx) => (
  <img
    key={idx}
    src={src}
    alt={`Project ${idx % projects.length + 1}`}
    className="min-w-[240px] sm:min-w-[280px] md:min-w-[328px] h-auto object-cover rounded-xl"
  />
))}

      </div>

      {/* Text Section at bottom of first fold */}
      <div className="flex justify-between items-end w-full max-w-7xl">
        <p className="text-xl sm:text-xl md:text-[44px] font-regular leading-snug tracking-tight max-w-4xl">
          Multidisciplinary designer and developer helping teams and companies
          build meaningful products and create memorable digital experiences
          from concept to launch.
        </p>
        <span className="text-sm text-gray-500 tracking-wide font-medium whitespace-nowrap">
          Scroll down
        </span>
      </div>
    </section>
  );
};

export default Hero;
