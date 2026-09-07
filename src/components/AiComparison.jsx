import React, { useState, useRef } from "react";

function ComparisonCard({ item, index }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handlePointerMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    handlePointerMove(e);
  };

  const handlePointerUp = (e) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      // Ignore if pointer capture wasn't active
    }
    setIsDragging(false);
  };

  return (
    <div className="border-2 border-cyan-500/40 bg-gray-950 p-4 shadow-[6px_6px_0px_rgba(34,211,238,0.2)]">
      <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-black mb-2">// COMPARISON_0{index + 1}</p>
      <h4 className="text-xl font-black mb-4">{item.title}</h4>

      {/* Slider Container */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="relative aspect-video w-full overflow-hidden select-none touch-none cursor-ew-resize border border-cyan-500/30"
      >
        {/* AI Remaster Image (Base layer) */}
        <img
          src={item.aiImage}
          alt="AI Remaster"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-3 right-3 bg-black/75 border border-cyan-400 px-2 py-1 text-[10px] font-black text-cyan-400 pointer-events-none">
          AI_REMASTER
        </div>

        {/* Older Game Image (Clipped Layer) */}
        <div
          className="absolute inset-0 h-full overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.oldImage}
            alt="Original Retro Game"
            className="absolute inset-0 h-full w-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />
          <div className="absolute bottom-3 left-3 bg-black/75 border border-red-500 px-2 py-1 text-[10px] font-black text-red-400 pointer-events-none">
            ORIGINAL_RETRO
          </div>
        </div>

        {/* Drag Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-cyan-400 z-10 shadow-[0_0_10px_#22d3ee] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 text-xs">
            ↔
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 font-sans">{item.description}</p>
    </div>
  );
}

export default function AiComparison({ comparisons }) {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      {comparisons.map((item, index) => (
        <ComparisonCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}