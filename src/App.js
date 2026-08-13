import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SupportersCarousel from './components/SupportersCarousel';
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

/* ================= STATIC IMAGE SECTION WITH OFFSET ================= */
function ImageTextSection({ image, heading, text, reverse = false }) {
  return (
    <section className="relative w-full overflow-hidden py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 gap-12">
        <div
          className={`flex-1 w-full h-96 relative rounded-xl overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.08)] ${
            reverse ? 'lg:order-2' : ''
          }`}
        >
          <img src={image} alt={heading} className="w-full h-full object-cover" />
          <div
            className={`absolute inset-0 ${
              reverse
                ? 'bg-gradient-to-l from-black/70 to-transparent'
                : 'bg-gradient-to-r from-black/70 to-transparent'
            }`}
          />
        </div>

        <div className="flex-1 text-left text-gray-100">
          <motion.h2
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-cyan-300"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl leading-relaxed text-gray-300"
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
      status: 'In Development',
    },
    {
      id: 'fallace',
      title: 'PROJECT FALLACE',
      cover: PFAlien,
      splashImages: [PFAlien],
      platforms: ['PC'],
      release: '2028',
      status: 'Pre-production',
    },
    {
      id: 'phantom',
      title: 'PROJECT PHANTOM',
      cover: PhantomPath,
      splashImages: [PFantom],
      platforms: ['PC', 'GOG', 'SWITCH'],
      release: '2027',
      status: 'Pre-production',
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
              <div className="min-h-screen bg-black text-gray-100 antialiased tracking-wide font-mono">

                {/* HEADER */}
                <header className="w-full fixed z-50 top-0 left-0 px-6 py-8 flex items-center justify-between bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-md border-b border-cyan-500/10">

                  <img src={ISText} alt="Logo" className="w-40 drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]" />

                  <nav className="hidden md:flex gap-10 font-bold text-xs tracking-widest text-gray-300">
                    <a href="#games" className="hover:text-cyan-300 transition">GAMES</a>
                    <a href="#updates" className="hover:text-cyan-300 transition">NEWS</a>
                    <Link to="/the-lab" className="hover:text-cyan-300 transition">THE LAB</Link>
                    <Link to="/work-with-us" className="hover:text-cyan-300 transition">JOIN US</Link>
                    <Link to="/about-us" className="hover:text-cyan-300 transition">ABOUT</Link>
                  </nav>

                  <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyan-300 text-xl">
                      ☰
                    </button>
                  </div>

                  {menuOpen && (
                    <div className="absolute top-full right-6 mt-2 w-52 bg-black border border-cyan-500/20 rounded-lg shadow-lg flex flex-col p-2 gap-2 backdrop-blur-md">
                      <a href="#games" className="hover:text-cyan-300 px-3 py-2 text-gray-300">Games</a>
                      <a href="#updates" className="hover:text-cyan-300 px-3 py-2 text-gray-300">News</a>
                      <Link to="/about-us" className="hover:text-cyan-300 px-3 py-2 text-gray-300">About</Link>
                    </div>
                  )}
                </header>

                {/* HERO */}
                <section className="relative w-full h-screen overflow-hidden">
                  {mainCarousel.map((slide, index) => (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                      <img src={slide.splashImages[0]} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-[0.3em] mb-6 text-cyan-300">
                          {slide.title}
                        </h1>

                        <p className="text-gray-300 mb-8">
                          {slide.status} • {slide.release}
                        </p>

                        <div className="flex gap-6">
                          <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-md text-sm shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                            Wishlist
                          </button>
                          <button className="px-6 py-3 border border-cyan-400/40 rounded-md text-sm hover:bg-cyan-400/10">
                            Trailer
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </section>

                {/* STATIC SECTION */}
                <StaticImageSection
                  image={PFantom}
                  heading="GAMES BEYOND DREAMS"
                  paragraph="We craft immersive worlds, bold narratives and unforgettable gameplay."
                />

                {/* GAMES GRID */}
                <section id="games" className="max-w-7xl mx-auto px-6 py-24">
                  <h2 className="text-4xl font-bold text-center mb-16 tracking-widest text-cyan-300">
                    OUR GAMES
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {games.map((g) => (
                      <motion.article
                        key={g.id}
                        whileHover={{ scale: 1.04 }}
                        className="bg-gray-900 rounded-2xl overflow-hidden border border-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                      >
                        <img src={g.cover} className="w-full h-56 object-cover" />
                        <div className="p-6 text-center">
                          <h4 className="text-lg font-semibold text-cyan-200">{g.title}</h4>
                          <p className="text-sm text-gray-400 mt-2">{g.status}</p>
                          <button
                            onClick={() => setActiveGame(g)}
                            className="mt-4 px-4 py-2 bg-cyan-600 rounded-md text-sm hover:bg-cyan-500"
                          >
                            Details
                          </button>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {/* Browser Games */}
                  <h3 className="text-3xl font-bold text-center mt-24 mb-12 tracking-wider text-cyan-300">
                    BROWSER GAMES
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-cyan-500/10">
                      <img src={BTreas} className="w-full h-56 object-cover" />
                      <div className="p-6 text-center">
                        <h4 className="text-lg font-semibold">Browser Fun</h4>
                        <button className="mt-4 px-4 py-2 bg-cyan-600 rounded-md text-sm">
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* NEWS */}
                <section id="updates" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
                  <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 tracking-widest text-cyan-300">
                      LATEST NEWS
                    </h2>

                    <div className="space-y-6">
                      {updates.map((u) => (
                        <div key={u.id} className="bg-gray-900 p-6 rounded-xl border border-cyan-500/10">
                          <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>{u.title}</span>
                            <span>{u.date}</span>
                          </div>
                          <p className="text-gray-300">{u.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* EVERYTHING BELOW KEPT EXACTLY */}
                <ImageTextSection image={TeamImage} heading="Our Team" text="We began with a single developer in 2023 — learning, experimenting, and building prototypes in quiet determination, without funding or industry connections. Despite never having worked in a studio before, a deep passion for games and an unshakable drive to create pushed him forward." />

                <ImageTextSection image={ValuesImage} heading="Our Values" text="Unyielding passion, creativity, collaboration, and innovation drive everything we do. We believe in making games with heart, imagination, and meaningful experiences for our players." reverse />

                <ImageTextSection image={LegacyImage} heading="The Legacy" text="Our goal is to revive the spirit of gaming — where creativity supersedes all including profit, and imagination drives innovation. Anyone can make a game, but only the passionate can be great." />

                <StaticImageSection
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  heading="OUR SUPPORTERS"
                  paragraph="Powered by community. Driven by passion."
                >
                  <div className="mt-12">
                    <SupportersCarousel speed={50} />
                  </div>
                </StaticImageSection>

                {/* FOOTER (UNCHANGED CONTENT, ONLY STYLED) */}
                <footer className="bg-black border-t border-cyan-500/10 pt-20 pb-10 px-6">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                      <div className="lg:col-span-2">
                        <img src={ISText} className="w-40 mb-6" />
                        <p className="text-gray-400 text-sm max-w-md">
                          Ironpulse Studios is an independent game development studio crafting immersive worlds, powerful narratives, and unforgettable gameplay experiences.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold tracking-widest mb-6 text-cyan-300">STUDIO</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                          <li><Link to="/about-us">About Us</Link></li>
                          <li><Link to="/work-with-us">Careers</Link></li>
                          <li><Link to="/the-lab">The Lab</Link></li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold tracking-widest mb-6 text-cyan-300">GAMES</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                          <li>Project Breaker</li>
                          <li>Project Phantom</li>
                          <li>Project Fallace</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold tracking-widest mb-6 text-cyan-300">CONTACT</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                          <li>Email: contact@ironpulse-studios.com</li>
                          <li>Press Kit</li>
                          <li>Support</li>
                        </ul>
                      </div>

                    </div>

                    <div className="border-t border-cyan-500/10 mt-16 pt-8 text-xs text-gray-500 flex justify-between">
                      <span>© {new Date().getFullYear()} Ironpulse Studios</span>
                      <span>Privacy • Terms • Cookies</span>
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