import React, { useEffect, useState } from "react";

const projects = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
];

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // start fade out after 4s
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    // completely hide after fade out
    const hideTimer = setTimeout(() => setHide(true), 5000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#6C2C2C] text-white flex flex-col justify-between items-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Quote at top */}
      <p className="mt-12 text-sm text-white/60 text-center px-4 leading-relaxed">
        known for capturing not just outer beauty, but the deeper essence
        <br />
        of emotion and femininity through quiet, poetic imagery.
      </p>


      {/* Images in center */}
      <div className="flex gap-4 items-center justify-center mt-10">
        {projects.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`project-${i + 1}`}
            className="w-20 h-28 object-cover rounded opacity-0 animate-fadeUp"
            style={{
              animationDelay: `${i * 300 + 500}ms`,
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>

      {/* Name at bottom */}
      <h1 className="text-[7vw] mb-10 text-white/20 tracking-wider font-serif">
        AUSRA BABIEDAITE
      </h1>
    </div>
  );
};

export default Loader;
