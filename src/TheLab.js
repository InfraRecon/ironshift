// ./src/TheLab.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import LabModel from './components/LabModel';
import UnityGame from './components/UnityGame';
import Footer from './components/Footer';

export default function TheLab() {
  const videos = [
    {
      title: 'Grand Theft Auto Loading Screen',
      description:
        'Experimenting with loading screen techniques, post processing and visuals for scene loading.',
      url: 'https://www.youtube.com/embed/KS6C793gyqc?si=P9gQ520ib-Y-pi8g',
      creator: 'Developed by Roberto Bliaja',
    },
    {
      title: 'VR Lightsabers',
      description:
        'Exploring the interactivity and graphical performance of lightsabers in Unity VR',
      url: 'https://www.youtube.com/embed/q4DDa6V4hxM?si=Qhquo5pVpLoqqH-7',
      creator: 'Developed by Roberto Bliaja',
    },
    {
      title: 'Real-time Vertex Path Finding',
      description: 'CPU-driven pathfinding for horde-like enemies',
      url: 'https://www.youtube.com/embed/kCVG6zdq8iM?si=YDMyaX-Qt-DQREwo',
      creator: 'Developed by Roberto Bliaja',
    },
    {
      title: 'Force Unleashed Star Destroyer Concept Scene',
      description: 'Experimenting with higher quality production values',
      url: 'https://www.youtube.com/embed/Wcyl-fs1NZY?si=bIIfoMyIxw-a_lr1',
      creator: 'Developed by Roberto Bliaja',
    },
  ];

  const unityRef = useRef(null);

  const reloadUnity = () => {
    if (unityRef.current) {
      unityRef.current.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans antialiased relative overflow-hidden">

      {/* subtle retro grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* HEADER */}
      <header className="w-full fixed z-50 top-0 left-0 px-6 py-5 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-md border-b border-white/5">
        <h1 className="text-lg md:text-xl font-bold tracking-[0.25em] text-white">
          THE LAB
        </h1>

        <Link
          to="/"
          className="px-4 py-2 text-sm font-semibold text-indigo-300 hover:text-white transition border border-white/10 rounded-md hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]"
        >
          Back Home
        </Link>
      </header>

      <main className="pt-28 max-w-7xl mx-auto px-6 relative z-10">

        {/* INTRO */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Lab
          </h2>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl">
            <p>
              The Lab is Iron Shift’s creative sandbox — a space to explore, experiment, and test the limits
              of what we can build. These projects aren’t tied to any specific game — they’re experiments in
              motion, lighting, and design that push our craft forward.
            </p>
            <p>
              The Lab is where Iron Shift hones its edge — where innovation is forged through experimentation.
            </p>
            <p className="text-gray-400">
              We believe that every great idea starts with a spark — and this is where those sparks are born.
            </p>
          </div>
        </section>

        {/* UNITY */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-wide">
            Interactive Unity Prototype
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl">
            A real-time interactive 3D experiment rendered directly in the browser using WebGL.
          </p>

          <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.08)]">
            <div className="aspect-video bg-black">
              <UnityGame ref={unityRef} />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={reloadUnity}
              className="px-5 py-2 bg-indigo-600/80 hover:bg-indigo-500 text-white rounded-md transition shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Reload Unity
            </button>
          </div>
        </section>

        {/* LAB MODEL */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-wide">
            3D Object Prototype
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Interactive 3D model experiment showing motion and materials in real-time.
          </p>

          <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)] bg-black">
            <LabModel />
          </div>
        </section>

        {/* VIDEO GALLERY */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-10 tracking-wide text-center">
            EXPERIMENT ARCHIVE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <div
                key={i}
                className="group bg-[#111118] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-300"
              >
                <div className="aspect-video">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-semibold group-hover:text-indigo-300 transition">
                    {video.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {video.description}
                  </p>
                  <p className="text-gray-500 text-xs italic mt-3">
                    {video.creator}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER (UNCHANGED, PRESERVED) */}
      <Footer />
    </div>
  );
}