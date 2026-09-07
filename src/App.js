import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StaticImageSection from './components/StaticImageSection';

import WorkWithUs from './WorkWithUs';
import Games from './Games';
import AboutUs from './AboutUs';
import TheLab from './TheLab';
import SuperAstroBlast from './SuperAstroBlast';

import ISText from './assets/IronpulseText.png';
import FBIcon from './assets/AstroAssault.png';
import PBS from './assets/ProjectBreakerScreen1.png';
import PFantom from './assets/ProjectPhantom.png';
import BTreas from './assets/BrowserTreasure.png';
import PFAlien from './assets/ProjectFallaceAlien.png';
import PhantomPath from './assets/ProjectPhantomPath.png';

import TeamImage from './assets/TeamCollaboration.jpg';
import ValuesImage from './assets/GameDevelopment.jpg';
import LegacyImage from './assets/StudioWorkspace.jpg';

function AnimatedRoutes({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}

/* ================= AUTOMATIC SUPPORTERS CAROUSEL (FILM STRIP LOOP) ================= */
function SupportersCarousel() {
  const supporters = [
    { name: "INFRARECON", badge: "https://yt3.ggpht.com/1xI0oPX_ZgzNJJFFgYpCMX8do3K3d_kGUdRE2peRRE6KuGaloH55lUG7bpdfD5gJB2KWBsnUPg=s176-c-k-c0x00ffffff-no-rj-mo?w=150&auto=format&fit=crop&q=80" },
    { name: "N4G MAG", badge: "https://techsceneza.co.za/wp-content/uploads/2023/11/qM7QhW_r_400x400.jpg?w=150&auto=format&fit=crop&q=80" },
    { name: "GEMINI", badge: "https://www.nyu.edu/life/information-technology/artificial-intelligence-at-nyu/generative-ai-services/gemini/_jcr_content/root/container/nyu_column_control/c2/nyu_image.coreimg.82.1000.jpeg/1771883243645/logo-gemini.jpeg?w=150&auto=format&fit=crop&q=80" },
    { name: "UNITY", badge: "https://avatars.githubusercontent.com/u/426196?w=150&auto=format&fit=crop&q=80" },
  ];

  // Quadrupling ensures zero pop/stutter across ultra-wide monitors on loop reset (-25%)
  const extendedSupporters = [...supporters, ...supporters, ...supporters, ...supporters];

  return (
    <div className="w-full overflow-hidden relative py-8">
      {/* Film strip sprocket holes simulation top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(#22d3ee_40%,transparent_40%)] bg-[length:16px_8px] opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[radial-gradient(#22d3ee_40%,transparent_40%)] bg-[length:16px_8px] opacity-40" />

      {/* Gradient fade masks on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-25%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 28,
        }}
      >
        {extendedSupporters.map((sup, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-6 py-3.5 bg-gray-950 border-2 border-cyan-500/40 shadow-[4px_4px_0px_0px_rgba(34,211,238,0.3)] hover:border-cyan-300 hover:shadow-[4px_4px_0px_0px_rgba(34,211,238,0.8)] transition-all shrink-0 group relative"
          >
            {/* Retro corner notches */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400" />

            <img
              src={sup.badge}
              alt={sup.name}
              className="w-10 h-10 object-cover border border-cyan-400/60 group-hover:scale-105 transition-transform"
            />
            <span className="text-xs font-black tracking-[0.25em] text-cyan-200 group-hover:text-white">
              {sup.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================= RETRO STATIC IMAGE SECTION ================= */
function ImageTextSection({ image, heading, text, reverse = false }) {
  return (
    <section className="relative w-full overflow-hidden py-32 bg-gradient-to-b from-black via-gray-950 to-black border-t-2 border-cyan-500/20">
      {/* Retro Dot Matrix Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 gap-12 relative z-10">
        <div
          className={`flex-1 w-full h-[400px] relative border-2 border-cyan-500/50 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.2)] group ${
            reverse ? 'lg:order-2' : ''
          }`}
        >
          <img src={image} alt={heading} className="w-full h-full object-cover filter contrast-110 brightness-90 group-hover:brightness-100 transition-all duration-500" />
          <div
            className={`absolute inset-0 ${
              reverse
                ? 'bg-gradient-to-l from-black/80 via-black/40 to-transparent'
                : 'bg-gradient-to-r from-black/80 via-black/40 to-transparent'
            }`}
          />
          {/* Retro Corner brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
        </div>

        <div className="flex-1 text-left text-gray-100">
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-xs tracking-[0.3em] font-black block mb-3">// ARCADE_LOG //</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {heading}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg leading-relaxed text-gray-300 font-sans border-l-4 border-cyan-500 pl-6 bg-cyan-950/20 py-4"
          >
            {text}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeGame, setActiveGame] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const mainCarousel = [
    {
      id: 'breaker',
      title: 'SUPER ASTRO BLAST',
      cover: FBIcon,
      splashImages: [PBS],
      platforms: ['IOS', 'Android', 'Itch.io'],
      release: '2026',
      status: 'IN DEVELOPMENT',
    },
    {
      id: 'fallace',
      title: 'PROJECT FALLACE',
      cover: PFAlien,
      splashImages: [PFAlien],
      platforms: ['PC'],
      release: '2028',
      status: 'PRE-PRODUCTION',
    },
    {
      id: 'phantom',
      title: 'PROJECT PHANTOM',
      cover: PhantomPath,
      splashImages: [PFantom],
      platforms: ['PC', 'GOG', 'SWITCH'],
      release: '2027',
      status: 'PRE-PRODUCTION',
    },
  ];

  const games = [...mainCarousel];

  const updates = [
    {
      id: 'u1',
      date: 'NOV 30, 2025',
      title: 'Project Breaker: Entered Development Phase',
      excerpt: 'We are working hard to bring Project Breaker to life. Stay tuned for more updates!',
    },
    {
      id: 'u2',
      date: 'NOV 20, 2025',
      title: 'Project Fallace — Concept',
      excerpt: 'Science Fiction Horror Action begins to take shape.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainCarousel.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [mainCarousel.length]);

  return (
    <Router>
      <AnimatedRoutes>
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="min-h-screen bg-black text-gray-100 antialiased tracking-wider font-mono relative overflow-x-hidden selection:bg-cyan-400 selection:text-black">

                {/* CRT Scanline Overlay Effect */}
                <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />

                {/* HEADER */}
                <header className="w-full fixed z-40 top-0 left-0 px-6 lg:px-12 py-5 flex items-center justify-between bg-black/85 backdrop-blur-md border-b-2 border-cyan-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  <Link to="/">
                    <img src={ISText} alt="IronShift Logo" className="w-36 md:w-40 drop-shadow-[2px_2px_0px_rgba(34,211,238,0.5)] transition-transform hover:scale-105" />
                  </Link>

                  <nav className="hidden md:flex items-center gap-8 font-black text-xs tracking-[0.25em] text-gray-300">
                    <a href="#games" className="hover:text-cyan-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">GAMES</a>
                    <a href="#updates" className="hover:text-cyan-300 transition-colors">NEWS</a>
                    <Link to="/the-lab" className="hover:text-cyan-300 transition-colors">THE LAB</Link>
                    <Link to="/work-with-us" className="hover:text-cyan-300 transition-colors">JOIN US</Link>
                    <Link to="/about-us" className="hover:text-cyan-300 transition-colors">ABOUT</Link>
                  </nav>

                  <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyan-300 text-2xl p-2 focus:outline-none">
                      {menuOpen ? '✕' : '☰'}
                    </button>
                  </div>

                  {menuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 w-full bg-black border-b-2 border-cyan-500/50 shadow-2xl flex flex-col p-4 gap-3 md:hidden z-50"
                    >
                      <a href="#games" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 px-4 py-2 text-gray-300 border-b border-gray-900">GAMES</a>
                      <a href="#updates" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 px-4 py-2 text-gray-300 border-b border-gray-900">NEWS</a>
                      <Link to="/the-lab" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 px-4 py-2 text-gray-300 border-b border-gray-900">THE LAB</Link>
                      <Link to="/work-with-us" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 px-4 py-2 text-gray-300 border-b border-gray-900">JOIN US</Link>
                      <Link to="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 px-4 py-2 text-gray-300">ABOUT</Link>
                    </motion.div>
                  )}
                </header>

                {/* HERO CAROUSEL */}
                <section className="relative w-full h-screen overflow-hidden">
                  {mainCarousel.map((slide, index) => (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                      <img src={slide.splashImages[0]} alt={slide.title} className="w-full h-full object-cover filter brightness-75 contrast-110 scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                      
                      {/* Retro Grid Accent Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-15 pointer-events-none" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto z-10">
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-3 px-5 py-2 bg-cyan-950 border-2 border-cyan-400 text-cyan-300 text-xs font-black tracking-widest mb-6 shadow-[4px_4px_0px_0px_rgba(34,211,238,0.5)]"
                        >
                          <span className="w-2.5 h-2.5 bg-cyan-400 animate-pulse" />
                          <span>{slide.status}</span>
                          <span>//</span>
                          <span>EST. {slide.release}</span>
                        </motion.div>

                        <motion.h1 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                        >
                          {slide.title}
                        </motion.h1>

                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="flex flex-wrap justify-center gap-6"
                        >
                          <button className="px-8 py-4 bg-cyan-400 text-black font-black text-xs tracking-[0.25em] border-2 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:bg-cyan-300 hover:shadow-[6px_6px_0px_0px_rgba(34,211,238,0.8)] transition-all transform hover:-translate-y-1">
                            WISHLIST NOW
                          </button>
                          <button className="px-8 py-4 bg-black text-cyan-300 font-black text-xs tracking-[0.25em] border-2 border-cyan-400 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.4)] hover:bg-cyan-950 transition-all">
                            WATCH TRAILER
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Carousel HUD Indicators */}
                  <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-30">
                    {mainCarousel.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-3 transition-all border border-cyan-400 ${
                          idx === currentSlide ? 'w-10 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]' : 'w-3 bg-black'
                        }`}
                      />
                    ))}
                  </div>
                </section>

                {/* STATIC SECTION */}
                <StaticImageSection
                  image={PFantom}
                  heading="GAMES BEYOND DREAMS"
                  paragraph="We craft immersive worlds, bold narratives and unforgettable gameplay."
                />

                {/* GAMES GRID */}
                <section id="games" className="max-w-7xl mx-auto px-6 py-32 relative">
                  <div className="text-center mb-20">
                    <span className="text-cyan-400 text-xs tracking-[0.3em] font-black block mb-3">// PORTFOLIO_CATALOG //</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      OUR GAMES
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games.map((g) => (
                      <motion.article
                        key={g.id}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-950 border-2 border-cyan-500/40 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] hover:border-cyan-300 hover:shadow-[8px_8px_0px_0px_rgba(34,211,238,0.6)] transition-all flex flex-col relative group"
                      >
                        <div className="relative h-64 overflow-hidden border-b-2 border-cyan-500/40">
                          <img src={g.cover} alt={g.title} className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500" />
                          <span className="absolute top-4 right-4 px-3 py-1 bg-black border border-cyan-400 text-xs text-cyan-300 font-black shadow-[2px_2px_0px_rgba(34,211,238,0.5)]">
                            {g.release}
                          </span>
                        </div>
                        <div className="p-6 flex flex-col flex-grow justify-between text-center">
                          <div>
                            <h4 className="text-lg font-black text-cyan-200 tracking-wide mb-2">{g.title}</h4>
                            <p className="text-xs text-cyan-400 mb-6 tracking-widest">{g.status}</p>
                          </div>
                          <button
                            onClick={() => setActiveGame(g)}
                            className="w-full py-3.5 bg-cyan-950 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black font-black text-xs tracking-[0.2em] transition-all shadow-[4px_4px_0px_0px_rgba(34,211,238,0.4)]"
                          >
                            VIEW DETAILS
                          </button>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {/* Browser Games */}
                  <div className="text-center mt-36 mb-16">
                    <span className="text-cyan-400 text-xs tracking-[0.3em] font-black block mb-3">// QUICK_LAUNCH //</span>
                    <h3 className="text-3xl md:text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                      BROWSER GAMES
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div 
                      whileHover={{ y: -6 }}
                      className="bg-gray-950 border-2 border-cyan-500/40 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] hover:border-cyan-300 transition-all"
                    >
                      <div className="relative h-64 overflow-hidden border-b-2 border-cyan-500/40">
                        <img src={BTreas} alt="Browser Fun" className="w-full h-full object-cover filter contrast-110" />
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-bold mb-4 text-cyan-200">Browser Fun</h4>
                        <button className="w-full py-3.5 bg-cyan-400 text-black border-2 border-white font-black text-xs tracking-[0.2em] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:bg-cyan-300 transition-all">
                          PLAY NOW
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* NEWS */}
                <section id="updates" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black border-y-2 border-cyan-500/20 relative">
                  <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                      <span className="text-cyan-400 text-xs tracking-[0.3em] font-black block mb-3">// STUDIO_COMMUNIQUÉ //</span>
                      <h2 className="text-4xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                        LATEST NEWS
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {updates.map((u) => (
                        <motion.div 
                          key={u.id} 
                          whileHover={{ scale: 1.01 }}
                          className="bg-gray-950 p-8 border-2 border-cyan-500/30 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] hover:border-cyan-400 transition-all"
                        >
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-cyan-400 mb-4 gap-2">
                            <span className="font-black text-base text-cyan-200">{u.title}</span>
                            <span className="px-3 py-1 bg-black border border-cyan-500 text-xs">{u.date}</span>
                          </div>
                          <p className="text-gray-300 font-sans leading-relaxed">{u.excerpt}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* CORE LORE / SECTIONS */}
                <ImageTextSection image={TeamImage} heading="Our Team" text="We began with a single developer in 2023 — learning, experimenting, and building prototypes in quiet determination, without funding or industry connections. Despite never having worked in a studio before, a deep passion for games and an unshakable drive to create pushed him forward." />

                <ImageTextSection image={ValuesImage} heading="Our Values" text="Unyielding passion, creativity, collaboration, and innovation drive everything we do. We believe in making games with heart, imagination, and meaningful experiences for our players." reverse />

                <ImageTextSection image={LegacyImage} heading="The Legacy" text="Our goal is to revive the spirit of gaming — where creativity supersedes all including profit, and imagination drives innovation. Anyone can make a game, but only the passionate can be great." />

                <StaticImageSection
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  heading="OUR SUPPORTERS"
                  paragraph="Powered by community. Driven by passion."
                >
                  <div className="mt-12">
                    <SupportersCarousel />
                  </div>
                </StaticImageSection>

                {/* FOOTER */}
                <footer className="bg-black border-t-2 border-cyan-500/30 pt-20 pb-12 px-6 lg:px-12 relative overflow-hidden">
                  <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                      <div className="lg:col-span-2">
                        <img src={ISText} alt="IronShift Studios" className="w-40 mb-6 drop-shadow-[2px_2px_0px_rgba(34,211,238,0.5)]" />
                        <p className="text-gray-400 text-sm max-w-md font-sans leading-relaxed">
                          IronShift Studios is an independent game development studio crafting immersive worlds, powerful narratives, and unforgettable gameplay experiences.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-black tracking-widest mb-6 text-cyan-300">// STUDIO</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-sans">
                          <li><Link to="/about-us" className="hover:text-cyan-300 transition-colors">About Us</Link></li>
                          <li><Link to="/work-with-us" className="hover:text-cyan-300 transition-colors">Careers</Link></li>
                          <li><Link to="/the-lab" className="hover:text-cyan-300 transition-colors">The Lab</Link></li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-black tracking-widest mb-6 text-cyan-300">// GAMES</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-sans">
                          <li className="hover:text-cyan-300 transition-colors cursor-pointer">Project Breaker</li>
                          <li className="hover:text-cyan-300 transition-colors cursor-pointer">Project Phantom</li>
                          <li className="hover:text-cyan-300 transition-colors cursor-pointer">Project Fallace</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-black tracking-widest mb-6 text-cyan-300">// CONTACT</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-sans">
                          <li className="hover:text-cyan-300 transition-colors cursor-pointer">Email: ironshiftgames@hotmail.com</li>
                          <li className="hover:text-cyan-300 transition-colors cursor-pointer">Press Kit</li>
                          <li className="hover:text-cyan-300 transition-colors cursor-pointer">Support</li>
                        </ul>
                      </div>

                    </div>

                    <div className="border-t border-cyan-500/20 mt-16 pt-8 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-4 font-sans">
                      <span>© {new Date().getFullYear()} IronShift Studios. All rights reserved.</span>
                      <span className="space-x-4">
                        <a href="#privacy" className="hover:text-cyan-300 transition-colors">Privacy</a>
                        <span>•</span>
                        <a href="#terms" className="hover:text-cyan-300 transition-colors">Terms</a>
                        <span>•</span>
                        <a href="#cookies" className="hover:text-cyan-300 transition-colors">Cookies</a>
                      </span>
                    </div>
                  </div>
                </footer>

              </div>
            </motion.div>
          }
        />

        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/the-lab" element={<TheLab />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/super-astro-blast" element={<SuperAstroBlast />} />
      </AnimatedRoutes>
    </Router>
  );
}