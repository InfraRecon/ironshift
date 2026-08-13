import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ISText from './assets/IronpulseText.png';

import HeroImage from './assets/ProjectBreakerScreen1.png';
import FeatureImage1 from './assets/ASTROPLANET.png';
import FeatureImage2 from './assets/ASTROSHOP.png';
import FeatureImage3 from './assets/ASTROBREAK.png';

/* ================= SCREENSHOTS ================= */
const screenshots = [
  HeroImage,
  FeatureImage1,
  FeatureImage2,
  FeatureImage3,
];

/* ================= FEATURE DATA ================= */
const features = [
  {
    title: 'COSMIC MINI-GAMES',
    image: FeatureImage1,
    description:
      'Jump between fast-paced arcade challenges across the galaxy — from obstacle runs to reflex bursts and puzzle-based trials.',
  },
  {
    title: 'CUTE SPACE CREW',
    image: FeatureImage2,
    description:
      'Play as adorable interstellar creatures, each with unique charm, personality, and playful movement styles.',
  },
  {
    title: 'GALAXY TREASURE SYSTEM',
    image: FeatureImage3,
    description:
      'Collect cosmic rewards, unlock rare companions, and discover hidden star zones filled with surprises.',
  },
];

/* ================= FEATURE CARD ================= */
function FeatureCard({ feature }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl overflow-hidden border border-cyan-500/10 bg-gray-950 shadow-[0_0_35px_rgba(34,211,238,0.08)] group"
    >
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8">
          <h3 className="text-3xl font-black tracking-[0.18em] text-cyan-300 mb-4">
            {feature.title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-lg max-w-md">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= MAIN PAGE ================= */
export default function SuperAstroBlast() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono overflow-hidden">

      {/* ================= HEADER ================= */}
      <header className="w-full fixed z-50 top-0 left-0 px-6 py-8 flex items-center justify-between bg-gradient-to-b from-black via-black/90 to-transparent backdrop-blur-md border-b border-cyan-500/10">

        <Link to="/">
          <img
            src={ISText}
            alt="Ironpulse Studios"
            className="w-40 drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]"
          />
        </Link>

        <nav className="hidden md:flex gap-10 font-bold text-xs tracking-widest text-gray-300">
          <Link to="/" className="hover:text-cyan-300 transition">HOME</Link>
          <Link to="/games" className="hover:text-cyan-300 transition">GAMES</Link>
          <Link to="/the-lab" className="hover:text-cyan-300 transition">THE LAB</Link>
          <Link to="/work-with-us" className="hover:text-cyan-300 transition">JOIN US</Link>
          <Link to="/about-us" className="hover:text-cyan-300 transition">ABOUT</Link>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center overflow-hidden">

        <img
          src={HeroImage}
          alt="Super Astro Blast"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="text-cyan-300 tracking-[0.35em] text-sm md:text-base mb-6 font-bold">
              COSMIC ARCADE ADVENTURE
            </p>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[0.22em] leading-none text-white mb-10">
              SUPER
              <span className="block text-cyan-300 mt-2">
                ASTRO BLAST
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              A galaxy of chaos, speed, and discovery.
              Collect adorable characters as they dash, bounce, and puzzle their way through levels in fun cosmic worlds.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-md text-sm tracking-[0.2em] font-bold shadow-[0_0_25px_rgba(34,211,238,0.25)] transition">
                DOWNLOAD NOW
              </button>

              <button className="px-8 py-4 border border-cyan-400/30 hover:bg-cyan-400/10 rounded-md text-sm tracking-[0.2em] font-bold transition">
                WATCH TRAILER
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mt-12 text-sm tracking-widest text-gray-400">
              <span className="px-4 py-2 border border-cyan-500/20 rounded-full bg-cyan-500/5">IOS</span>
              <span className="px-4 py-2 border border-cyan-500/20 rounded-full bg-cyan-500/5">ANDROID</span>
              <span className="px-4 py-2 border border-cyan-500/20 rounded-full bg-cyan-500/5">ARCADE</span>
              <span className="px-4 py-2 border border-cyan-500/20 rounded-full bg-cyan-500/5">2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={FeatureImage1}
              alt="Super Astro Blast World"
              className="rounded-3xl border border-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-300 tracking-[0.3em] text-sm mb-6 font-bold">
              PEW PEW THROUGH SPACE
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10 text-white">
              A SOLAR
              <span className="block text-cyan-300">
                PLAYGROUND
              </span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              Play your way though a galaxy of fun, and intersting mini-games.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
              Every world brings something new — from planetary runs to puzzle mazes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-32 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <p className="text-cyan-300 tracking-[0.3em] text-sm mb-6 font-bold">
            GAMEPLAY FEATURES
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white tracking-[0.15em]">
            ENDLESS GALAXY PLAY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </section>

      {/* ================= SCREENSHOTS ================= */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">

        <div className="max-w-[1800px] mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black tracking-[0.15em] text-white mb-16">
            EXPLORE THE GALAXY
          </h2>

          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {screenshots.map((shot, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="min-w-[600px] h-[380px] rounded-3xl overflow-hidden border border-cyan-500/10 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
              >
                <img src={shot} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* ================= TRAILER ================= */}
    <section className="relative py-40 overflow-hidden">

    <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl md:text-7xl font-black tracking-[0.18em] text-white mb-12">
        JOIN THE BLAST
        </h2>

        {/* VIDEO WRAPPER */}
        <motion.div
        className="relative rounded-3xl overflow-hidden border border-cyan-500/10 shadow-[0_0_60px_rgba(34,211,238,0.10)]"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >

        <div className="relative w-full aspect-video">
            <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=0&rel=0"
            title="Super Astro Blast Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </div>

        {/* Glow overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/20" />

        </motion.div>

    </div>
    </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black text-center">

        <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
          THE GALAXY IS YOURS
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join the Super Astro Blast universe — a constantly evolving arcade adventure filled with discovery, chaos, and joy.
        </p>

        <button className="px-10 py-5 bg-cyan-600 rounded-md font-bold tracking-[0.2em]">
          JOIN COMMUNITY
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Ironpulse Studios
          </div>
        </div>
      </footer>

    </div>
  );
}