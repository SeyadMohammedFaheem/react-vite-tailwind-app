import React, { useRef, useState, useCallback } from "react";

/**
 * CometCard
 * A stylized card with subtle "comet" particles and a 3D hover tilt + glare effect.
 * Props: { title: string, tags?: string[], image?: string }
 */
const CometCard = ({ title, tags = [], image }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("rotateX(0deg) rotateY(0deg) scale(1)");
  const [glareStyle, setGlareStyle] = useState({ left: "50%", top: "50%", opacity: 0 });

  const handleMouseMove = useCallback((event) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - rect.left; // x within element
    const offsetY = event.clientY - rect.top; // y within element

    const percentX = (offsetX / rect.width) * 2 - 1; // -1 to 1
    const percentY = (offsetY / rect.height) * 2 - 1; // -1 to 1

    const rotateMaxDeg = 12;
    const rotateY = percentX * rotateMaxDeg; // left/right
    const rotateX = -percentY * rotateMaxDeg; // up/down (invert for natural feel)

    setTransformStyle(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`);

    setGlareStyle({
      left: `${offsetX}px`,
      top: `${offsetY}px`,
      opacity: 0.2,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransformStyle("rotateX(0deg) rotateY(0deg) scale(1)");
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      className="[perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative max-w-[480px] mx-auto rounded-2xl overflow-hidden border border-black/10 bg-white shadow-lg transition-transform duration-200 will-change-transform [transform-style:preserve-3d]"
        style={{ transform: transformStyle }}
      >
        {/* Glare */}
        <span
          className="pointer-events-none absolute h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-200"
          style={{
            left: glareStyle.left,
            top: glareStyle.top,
            opacity: glareStyle.opacity,
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.35), rgba(255,255,255,0.12), transparent)",
            transform: "translateZ(50px)",
          }}
        />

        {/* Comet particles */}
        <span className="pointer-events-none absolute -left-6 -top-6 h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 blur-[2px] opacity-0 animate-comet [animation-delay:0ms]" />
        <span className="pointer-events-none absolute left-1/3 -top-4 h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 blur-[2px] opacity-0 animate-comet [animation-delay:500ms]" />
        <span className="pointer-events-none absolute -left-8 top-1/2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 blur-[2px] opacity-0 animate-comet [animation-delay:1100ms]" />
        <span className="pointer-events-none absolute -left-10 bottom-6 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 blur-[2px] opacity-0 animate-comet [animation-delay:1700ms]" />

        {/* Image (optional) */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="block w-full h-[260px] object-cover [transform:translateZ(24px)]"
            loading="lazy"
          />
        ) : (
          <div className="h-[220px] w-full bg-gradient-to-br from-gray-100 to-gray-200 [transform:translateZ(24px)]" />
        )}

        {/* Content */}
        <div className="relative p-5 [transform:translateZ(36px)]">
          <h3 className="font-semibold text-xl text-black font-denton tracking-tight">{title}</h3>
          {tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 border border-black rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CometCard;

