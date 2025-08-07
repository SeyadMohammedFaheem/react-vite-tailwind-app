import React, { useRef, useEffect } from "react";

const projects = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
];

const Hero = () => {
  const scrollRef = useRef(null);
  const firstSetRef = useRef(null);

  useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  const scrollStep = 1; // Use your preferred speed
  const intervalMs = 20;

  let isResetting = false;

  const interval = setInterval(() => {
    if (!scrollContainer || isResetting) return;

    scrollContainer.scrollLeft += scrollStep;

    // When reaching end of first set
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      isResetting = true;
      // Instantly jump back without visible glitch
      scrollContainer.scrollLeft = 0;
      requestAnimationFrame(() => {
        isResetting = false;
      });
    }
  }, intervalMs);

  return () => clearInterval(interval);
}, []);


  return (
    <section className="h-[85vh] mt-[36px]  flex flex-col justify-between">
      {/* Image Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        {/* First set */}
        <div className="flex gap-[12px]" ref={firstSetRef}>
          {projects.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Project ${idx + 1}`}
              className="min-w-[240px] sm:min-w-[280px] md:min-w-[328px] h-auto object-cover rounded-xl"
            />
          ))}
        </div>
        {/* Second set */}
   <div className="flex gap-[12px] pl-[12px]">
          {projects.map((src, idx) => (
            <img
              key={`dup-${idx}`}
              src={src}
              alt={`Duplicate ${idx + 1}`}
              className="min-w-[240px] sm:min-w-[280px] md:min-w-[328px] h-auto object-cover rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="flex justify-between items-end w-full  pt-6">
        <p className="text-xl font-denton sm:text-xl md:text-[44px]  leading-snug tracking-tight max-w-4xl">
          Multidisciplinary designer and developer helping teams and companies
          build meaningful products and create memorable digital experiences from
          concept to launch.
        </p>
        <span className="text-sm text-gray-500 text-left tracking-wide font-medium whitespace-nowrap">
          Scroll down
        </span>
      </div>
    </section>
  );
};

export default Hero;
