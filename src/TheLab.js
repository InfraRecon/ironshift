import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LabModel from "./components/LabModel";
import UnityGame from "./components/UnityGame";
import AiComparison from "./components/AiComparison"; // Import the new component
import Footer from "./components/Footer";

import Kotaorg from './assets/Kotaorg.png';
import KotaAI from './assets/KotaAI.png';
import StarandVadorg from './assets/VadandStarorg.png';
import StarandVadorgAI from './assets/VadandStarAI.png';
import ShaktiAorg from './assets/ShaktiAorg.png';
import ShaktiAAI from './assets/ShaktiAAI.png';
import StarandOrgorg from './assets/StarandOrgorg.png';
import StarandOrgAI from './assets/StarandOrgAI.png';

export default function TheLab() {
  const videos = [
    {
      title: "Grand Theft Auto Loading Screen",
      description:
        "Experimenting with loading screen techniques, post-processing, and scene-loading visuals.",
      url: "https://www.youtube.com/embed/KS6C793gyqc?si=P9gQ520ib-Y-pi8g",
      creator: "Developed by Roberto Bliaja",
      tags: ["Rendering", "Loading", "FX"],
    },
    {
      title: "VR Lightsabers",
      description:
        "Exploring the interactivity and graphical performance of lightsabers in Unity VR.",
      url: "https://www.youtube.com/embed/q4DDa6V4hxM?si=Qhquo5pVpLoqqH-7",
      creator: "Developed by Roberto Bliaja",
      tags: ["VR", "Unity", "Physics"],
    },
    {
      title: "Real-time Vertex Path Finding",
      description: "CPU-driven pathfinding for horde-like enemies.",
      url: "https://www.youtube.com/embed/kCVG6zdq8iM?si=YDMyaX-Qt-DQREwo",
      creator: "Developed by Roberto Bliaja",
      tags: ["AI", "Pathfinding", "CPU"],
    },
    {
      title: "Force Unleashed Star Destroyer Concept Scene",
      description: "Experimenting with higher-quality production values.",
      url: "https://www.youtube.com/embed/Wcyl-fs1NZY?si=bIIfoMyIxw-a_lr1",
      creator: "Developed by Roberto Bliaja",
      tags: ["Cinematics", "Rendering", "Lighting"],
    },
    {
      title: "Racing Game & Customization Concept Scene",
      description:
        "Experimenting with racing physics and vehicle customization.",
      url: "https://www.youtube.com/embed/93XMum0-m_0?si=eHCNFnHqTbrzKSEE",
      creator: "Developed by Roberto Bliaja",
      tags: ["Vehicles", "Physics", "Customization"],
    },
  ];

  // 4 AI Experimentation Images dataset
  const aiComparisons = [
    {
      title: "GENERAL KOTA",
      description: "Neural net upscaling test on low-poly environments and retro textures.",
      oldImage: Kotaorg, // Replace with your old game image url
      aiImage: KotaAI,   // Replace with your AI remaster image url
    },
    {
      title: "VADER AND STARKILLER",
      description: "AI-assisted normal map generation and facial detail reconstruction.",
      oldImage: StarandVadorg, // Replace with your old game image url
      aiImage: StarandVadorgAI,   // Replace with your AI remaster image url
    },
    {
      title: "SHAK TI's APPRENTICE",
      description: "Real-time AI style transfer for dynamic atmosphere adjustments.",
      oldImage: ShaktiAorg, // Replace with your old game image url
      aiImage: ShaktiAAI,   // Replace with your AI remaster image url
    },
    {
      title: "STARKILLER AND ORGANA",
      description: "Generative detail restoration for classic retro asset pipelines.",
      oldImage: StarandOrgorg, // Replace with your old game image url
      aiImage: StarandOrgAI,   // Replace with your AI remaster image url
    },
  ];

  const unityRef = useRef(null);

  const reloadUnity = () => {
    if (unityRef.current) {
      unityRef.current.reload();
    }
  };

  return (
    <div className="relative min-h-screen bg-black font-mono text-gray-100 selection:bg-cyan-400 selection:text-black">
      {/* Retro CRT Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />
      <div className="fixed inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b-2 border-cyan-500/30 bg-black/85 px-8 py-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
        <h1 className="text-sm font-black tracking-[0.35em] text-cyan-400">// THE_LAB</h1>
        <Link
          to="/"
          className="border-2 border-cyan-500/40 px-4 py-2 text-xs font-black tracking-[0.2em] hover:bg-cyan-400 hover:text-black transition-all"
        >
          BACK_HOME
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32">
        {/* HERO */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 px-4 py-1 border-2 border-cyan-400 text-cyan-400 text-[10px] tracking-[0.4em] font-black">
            RESEARCH_DIVISION_ACTIVE
          </motion.div>

          <h2 className="mb-8 text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            THE LAB
          </h2>

          <p className="max-w-2xl text-lg text-gray-300 border-l-4 border-cyan-500 pl-6 text-left">
            Experimental gameplay systems, rendering techniques, physics simulations, VR interactions, AI systems, and real-time prototyping.
          </p>
        </section>

        {/* EXPERIMENT 01 */}
        <section className="mb-32">
          <div className="mb-10 flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center border-2 border-cyan-400 bg-cyan-950 font-black text-cyan-400 shadow-[4px_4px_0px_rgba(34,211,238,0.3)]">
              01
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-black">// EXPERIMENT</p>
              <h3 className="text-3xl font-black tracking-wide">INTERACTIVE_UNITY_PROTOTYPE</h3>
            </div>
          </div>

          <div className="relative group p-1 bg-gradient-to-br from-cyan-500 to-black rounded-sm">
            <div className="aspect-video bg-black">
              <UnityGame ref={unityRef} />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={reloadUnity}
              className="border-2 border-cyan-400 px-8 py-3 font-black text-xs tracking-[0.2em] text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all shadow-[4px_4px_0px_rgba(34,211,238,0.3)]"
            >
              RELOAD_PROTOTYPE
            </button>
          </div>
        </section>

        {/* Divider */}
        <div className="my-24 flex items-center">
          <div className="h-px flex-1 bg-cyan-500/30" />
          <span className="px-6 text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-black">RESEARCH_DIVISION</span>
          <div className="h-px flex-1 bg-cyan-500/30" />
        </div>

        {/* EXPERIMENT 02 */}
        <section className="mb-32">
          <div className="mb-10 flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center border-2 border-cyan-400 bg-cyan-950 font-black text-cyan-400 shadow-[4px_4px_0px_rgba(34,211,238,0.3)]">
              02
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-black">// EXPERIMENT</p>
              <h3 className="text-3xl font-black tracking-wide">3D_OBJECT_PROTOTYPE</h3>
            </div>
          </div>

          <div className="border-2 border-cyan-500/40 bg-black p-1">
            <LabModel />
          </div>
        </section>

        {/* Divider */}
        <div className="my-24 flex items-center">
          <div className="h-px flex-1 bg-cyan-500/30" />
          <span className="px-6 text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-black">AI_DIVISION</span>
          <div className="h-px flex-1 bg-cyan-500/30" />
        </div>

        {/* EXPERIMENT 03: AI REMASTER COMPARISON SECTION */}
        <section className="mb-32">
          <div className="mb-10 flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center border-2 border-cyan-400 bg-cyan-950 font-black text-cyan-400 shadow-[4px_4px_0px_rgba(34,211,238,0.3)]">
              03
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-black">// EXPERIMENT</p>
              <h3 className="text-3xl font-black tracking-wide">AI_TEXTURE_REMASTERS</h3>
            </div>
          </div>

          <AiComparison comparisons={aiComparisons} />
        </section>

        {/* ARCHIVE */}
        <section className="mb-32">
          <h3 className="mb-16 text-center text-4xl font-black tracking-[0.2em] text-cyan-400">// EXPERIMENT_ARCHIVE</h3>

          {/* Featured */}
          <div className="mb-12 border-2 border-cyan-500/40 bg-gray-950 p-4 shadow-[8px_8px_0px_rgba(34,211,238,0.2)]">
            <div className="aspect-video mb-6">
              <iframe src={videos[0].url} title={videos[0].title} allowFullScreen className="h-full w-full border border-cyan-500/20" />
            </div>
            <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-black mb-2">// FEATURED</p>
            <h4 className="text-2xl font-black mb-4">{videos[0].title}</h4>
            <p className="text-gray-400 font-sans">{videos[0].description}</p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {videos.slice(1).map((video, index) => (
              <div key={index} className="border-2 border-cyan-500/20 bg-gray-950 p-4 transition-all hover:border-cyan-400 group">
                <div className="aspect-video mb-4">
                  <iframe src={video.url} title={video.title} allowFullScreen className="h-full w-full" />
                </div>
                <h4 className="font-black mb-4 group-hover:text-cyan-400 transition-colors">{video.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map(tag => (
                    <span key={tag} className="border border-cyan-500/40 px-2 py-0.5 text-[10px] font-black text-cyan-300">{tag}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 italic">{video.creator}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}