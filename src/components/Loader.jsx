import React, { useEffect, useState } from "react";

const projects = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
];

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  // Counter logic: increments from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 40); // ~4 seconds total
    return () => clearInterval(interval);
  }, []);

  // Fade and hide timers
  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => setFadeOut(true), 300);
      const hideTimer = setTimeout(() => setHide(true), 1300);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#FAF8F1] text-black flex flex-col justify-center items-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Image Row */}
      <div className="flex gap-4 items-center justify-center mb-12">
        {projects.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`project-${i + 1}`}
            className="w-40 h-60 object-cover rounded-md opacity-0 animate-fadeUp"
            style={{
              animationDelay: `${i * 300 + 500}ms`,
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>

      {/* Footer Texts */}
      <div className="w-full px-8 pb-8 flex justify-between items-end text-[#111] font-serif">
        <h1 className="text-3xl">Faheem.work</h1>
        <div className="text-center text-sm font-sans">
          <p>Product Designer</p>
          <p>Portfolio ‘25</p>
        </div>
        <h1 className="text-5xl tracking-wide font-serif">
          {String(progress).padStart(3, "0")}
        </h1>
      </div>
    </div>
  );
};

export default Loader;
