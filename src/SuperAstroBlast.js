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

/* ================= REVIEW DATA ================= */
const reviews = [
  {
    source: "ARCADE MONTHLY",
    quote: "A chaotic, neon-drenched joyride that perfectly captures the golden era of arcade gaming with a modern twist.",
    rating: "9.5/10",
  },
  {
    source: "COSMIC GAMER",
    quote: "The mini-games are incredibly addictive. You'll keep coming back just to unlock one more cute crew member.",
    rating: "5/5",
  },
  {
    source: "PIXEL CRITIC",
    quote: "Super Astro Blast is an absolute blast! It's fast, colorful, and relentlessly fun from start to finish.",
    rating: "MUST PLAY",
  }
];

/* ================= FEATURE CARD ================= */
function FeatureCard({ feature }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gray-950 border-2 border-cyan-500/40 p-2 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.2)] group"
    >
      <div className="relative h-[420px] overflow-hidden border border-cyan-500/30">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8">
          <h3 className="text-2xl font-black tracking-[0.2em] text-cyan-300 mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {feature.title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm font-sans max-w-md">
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
    <div className="min-h-screen bg-black font-mono text-gray-100 selection:bg-cyan-400 selection:text-black overflow-hidden">

      {/* RETRO CRT OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />

      {/* HEADER */}
      <header className="w-full fixed z-50 top-0 left-0 px-8 py-5 flex items-center justify-between bg-black/85 backdrop-blur-md border-b-2 border-cyan-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
        <Link to="/">
          <img src={ISText} alt="IronShift Studios" className="w-36 drop-shadow-[2px_2px_0px_rgba(34,211,238,0.5)] transition-transform hover:scale-105" />
        </Link>
        <nav className="hidden md:flex gap-10 font-black text-[10px] tracking-[0.3em] text-gray-300">
          <Link to="/" className="hover:text-cyan-400 transition">HOME</Link>
          <Link to="/games" className="hover:text-cyan-400 transition">GAMES</Link>
          <Link to="/the-lab" className="hover:text-cyan-400 transition">THE LAB</Link>
          <Link to="/work-with-us" className="hover:text-cyan-400 transition">JOIN US</Link>
          <Link to="/about-us" className="hover:text-cyan-400 transition">ABOUT</Link>
        </nav>
      </header>

      {/* HERO SECTION (BRIGHT & CLEAR) */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src={HeroImage} alt="Super Astro Blast" className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
            <p className="text-cyan-400 tracking-[0.4em] text-xs mb-6 font-black uppercase">
              // COSMIC_ARCADE_ADVENTURE
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[0.1em] leading-none text-white mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              SUPER
              <span className="block text-cyan-300 mt-2">ASTRO BLAST</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl font-sans border-l-4 border-cyan-500 pl-6 bg-black/40 backdrop-blur-sm py-2">
              A galaxy of chaos, speed, and discovery. Collect adorable characters as they dash, bounce, and puzzle their way through levels.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <a href="#download" className="px-8 py-4 bg-cyan-400 text-black border-2 border-white font-black text-xs tracking-[0.25em] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:bg-cyan-300 transition-all transform hover:-translate-y-1 inline-block text-center">
                DOWNLOAD_FREE
              </a>
              <a href="#trailer" className="px-8 py-4 border-2 border-cyan-400/40 text-cyan-400 font-black text-xs tracking-[0.25em] hover:bg-cyan-400/10 transition-all inline-block text-center">
                WATCH_TRAILER
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs tracking-widest text-gray-300">
              <span className="px-3 py-1 border border-cyan-500/20 rounded bg-cyan-500/10 text-cyan-300">iOS FREE</span>
              <span className="px-3 py-1 border border-cyan-500/20 rounded bg-cyan-500/10 text-cyan-300">ANDROID FREE</span>
              <span className="px-3 py-1 border border-cyan-500/20 rounded bg-cyan-500/10">ARCADE</span>
              <span className="px-3 py-1 border border-cyan-500/20 rounded bg-cyan-500/10">2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GAMEPLAY FEATURES WITH TRAILER ON THE LEFT */}
      <section id="trailer" className="relative py-32 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <p className="text-cyan-400 tracking-[0.4em] text-xs mb-6 font-black uppercase">// GAMEPLAY_FEATURES</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-[0.1em] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            ENDLESS GALAXY PLAY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto px-6 items-center">
          
          {/* TRAILER CARD PLACED ON THE LEFT (span-5) */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-gray-950 border-2 border-cyan-500/40 p-2 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.2)] group"
          >
            <div className="relative h-[420px] overflow-hidden border border-cyan-500/30 flex flex-col">
              <div className="relative w-full h-full">
                <iframe 
                  className="absolute inset-0 w-full h-full" 
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
                  title="Trailer" 
                  allowFullScreen 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                <h3 className="text-xl font-black tracking-[0.2em] text-cyan-300 mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  GAMEPLAY TRAILER
                </h3>
                <p className="text-gray-300 text-xs font-sans">
                  Watch the official preview showcasing the hyper-speed arcade action and cosmic levels.
                </p>
              </div>
            </div>
          </motion.div>

          {/* FIRST TWO FEATURE CARDS ON THE RIGHT (span-7 split grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

        </div>

        {/* REMAINING FEATURE CARD BELOW IF NEEDED, OR KEEP ALL THREE IN A ROW AFTER */}
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <div className="max-w-md">
            <FeatureCard feature={features[2]} />
          </div>
        </div>
      </section>

      {/* SCREENSHOTS CAROUSEL */}
      <section className="py-24 bg-gray-950 border-t-2 border-cyan-500/30 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-cyan-400 tracking-[0.4em] text-xs mb-2 font-black uppercase">// VISUAL_DATABASE</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[0.15em] text-white">
              EXPLORE THE GALAXY
            </h2>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {screenshots.map((shot, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="min-w-[600px] h-[380px] rounded-xl overflow-hidden border-2 border-cyan-500/40 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.2)] bg-black"
              >
                <img src={shot} alt="Screenshot" className="w-full h-full object-cover filter brightness-100 contrast-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SPECS, CREDITS & DOWNLOAD */}
      <section id="download" className="relative py-24 bg-black border-t-2 border-cyan-500/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 tracking-[0.4em] text-xs mb-4 font-black uppercase">// SYSTEM_SPECS & AVAILABILITY</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[0.1em] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              READY FOR LAUNCH
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* CREDITS CARD */}
            <div className="bg-gray-950 border-2 border-cyan-500/40 p-8 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] flex flex-col justify-between">
              <div>
                <p className="text-cyan-400 font-black text-xs tracking-[0.25em] mb-6 uppercase">// CREDITS</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 text-[10px] tracking-[0.25em] mb-1">DEVELOPER</p>
                    <p className="text-white font-bold text-sm tracking-widest">IronShift Studios & Team Nova</p>
                  </div>
                  <div className="border-t border-cyan-500/20 pt-4">
                    <p className="text-gray-500 text-[10px] tracking-[0.25em] mb-1">PUBLISHER</p>
                    <p className="text-cyan-300 font-bold text-sm tracking-widest">IronShift Publishing</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-cyan-500/20 pt-4 mt-8">
                <p className="text-gray-500 text-[10px] tracking-[0.25em]">RELEASE YEAR: 2026</p>
              </div>
            </div>

            {/* PRICING & MODEL CARD */}
            <div className="bg-gray-950 border-2 border-cyan-500/40 p-8 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] flex flex-col justify-between">
              <div>
                <p className="text-cyan-400 font-black text-xs tracking-[0.25em] mb-6 uppercase">// DISTRIBUTION</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 text-[10px] tracking-[0.25em] mb-1">PRICING MODEL</p>
                    <p className="text-white font-bold text-sm tracking-widest">Free to Play</p>
                  </div>
                  <div className="border-t border-cyan-500/20 pt-4">
                    <p className="text-gray-500 text-[10px] tracking-[0.25em] mb-1">MONETIZATION</p>
                    <p className="text-cyan-300 font-bold text-sm tracking-widest">Optional In-App Purchases</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-cyan-500/20 pt-4 mt-8">
                <p className="text-gray-500 text-[10px] tracking-[0.25em]">PLATFORMS: iOS & ANDROID</p>
              </div>
            </div>

            {/* DOWNLOAD LINKS CARD */}
            <div className="bg-gray-950 border-2 border-cyan-500/40 p-8 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] flex flex-col justify-between">
              <div>
                <p className="text-cyan-400 font-black text-xs tracking-[0.25em] mb-6 uppercase">// GET_THE_GAME</p>
                <p className="text-gray-300 font-sans text-sm mb-6">Download Super Astro Blast completely free today on your preferred mobile platform.</p>
                
                <div className="space-y-4">
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-black border-2 border-cyan-400/40 hover:border-cyan-400 text-white font-black text-xs tracking-wider transition-all shadow-[4px_4px_0px_0px_rgba(34,211,238,0.2)]">
                    APPLE APP STORE (FREE)
                  </a>

                  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-black border-2 border-cyan-400/40 hover:border-cyan-400 text-white font-black text-xs tracking-wider transition-all shadow-[4px_4px_0px_0px_rgba(34,211,238,0.2)]">
                    GOOGLE PLAY STORE (FREE)
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="relative py-24 bg-gray-950 border-t-2 border-cyan-500/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 tracking-[0.4em] text-xs mb-4 font-black uppercase">// CRITICAL_RECEPTION</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[0.1em] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              WHAT THE GALAXY IS SAYING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black border-2 border-cyan-500/40 p-8 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  <div className="text-cyan-400 text-4xl mb-2 font-black leading-none">"</div>
                  <p className="text-gray-300 font-sans italic text-sm md:text-base leading-relaxed mb-8">
                    {review.quote}
                  </p>
                </div>
                <div className="border-t-2 border-cyan-500/20 pt-4 mt-auto">
                  <p className="text-white font-black tracking-[0.15em] text-sm mb-1">{review.source}</p>
                  <p className="text-cyan-300 font-bold tracking-[0.2em] text-xs">SCORE: {review.rating}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t-2 border-cyan-500/20 bg-black">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">THE GALAXY IS YOURS</h2>
        <button className="px-10 py-5 bg-cyan-400 text-black border-2 border-white font-black text-xs tracking-[0.3em] hover:bg-white transition-all shadow-[6px_6px_0px_0px_rgba(34,211,238,0.4)]">
          JOIN_COMMUNITY
        </button>
      </section>

      <footer className="border-t-2 border-cyan-500/30 py-10 text-center bg-gray-950 text-gray-500 text-[10px] tracking-[0.3em]">
        © {new Date().getFullYear()} IRONPULSE STUDIOS
      </footer>
    </div>
  );
}