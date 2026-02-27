import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SupportersCarousel from './components/SupportersCarousel';

import WorkWithUs from './WorkWithUs';
import AboutUs from './AboutUs';
import TheLab from './TheLab';

import ISText from './assets/IronpulseText.png';
import FBIcon from './assets/AstroAssault.png';
import PBS from './assets/ProjectBreakerScreen1.png';
import PFantom from './assets/ProjectPhantom.png';
import BTreas from './assets/BrowserTreasure.png';
import PFAlien from './assets/ProjectFallaceAlien.png';
import PhantomPath from './assets/ProjectPhantomPath.png';

// =================== ANIMATED ROUTES WRAPPER ===================


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
// =================== PARALLAX SECTION COMPONENT ===================

function CombinedParallaxSection({ image, children, height = "500px", scrollSpeed = 0.2 }) {
  const sectionRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate scroll relative to section center
      const scrollRelative =
        ((windowHeight / 2 - rect.top - rect.height / 2) * scrollSpeed) || 0;
      setOffsetY(scrollRelative);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial call
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollSpeed]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden" style={{ height }}>
      <motion.div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "110%" }}
        animate={{
          backgroundPositionX: ["50%", "50.2%", "49.8%", "50%"], // subtle horizontal drift
          backgroundPositionY: [
            `${50 + offsetY}%`,
            `${50 + offsetY + 1}%`,
            `${50 + offsetY - 1}%`,
            `${50 + offsetY}%`,
          ], // combines scroll + subtle floating
          backgroundSize: ["150%", "150%", "150%"], // subtle zoom
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        {children}
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
      title: 'PROJECT BREAKER',
      cover: FBIcon,
      splashImages: [
        PBS,
        PBS,
        PBS,
      ],
      platforms: ['IOS', 'Android', 'Itch.io'],
      release: '2026',
      status: 'In Development',
    },
    {
      id: 'fallace',
      title: 'PROJECT FALLACE',
      cover: PFAlien,
      splashImages: [
        PFAlien,
        PFAlien,
        PFAlien,
      ],
      platforms: ['PC'],
      release: '2028',
      status: 'Pre-production',
    },
    {
      id: 'phantom',
      title: 'PROJECT PHANTOM',
      cover: PhantomPath,
      splashImages: [
        PFantom,
        PFantom,
        PFantom,
      ],
      platforms: ['PC', 'GOG', 'SWITCH'],
      release: '2027',
      status: 'Pre-production',
    },
  ];

  const games = [
    ...mainCarousel,
    // {
    //   id: 'browser1',
    //   title: 'Browser Chicken',
    //   tagline: 'A simple browser game',
    //   cover: 'https://images.unsplash.com/photo-1584270354949-6a3c7d5a7a7f?auto=format&fit=crop&w=1400&q=80',
    //   release: '2025',
    //   status: 'Released',
    //   features: ['Clicking', 'Simple', 'Fun'],
    // },
  ];

  const updates = [
    {
      id: 'u1',
      date: 'NOV 30, 2025',
      title: 'Project Breaker: Entered Developement Phase',
      excerpt: 'We are working hard to bring Project Breaker to Kick start our experience. Stay tuned for more updates!',
    },
    {
      id: 'u2',
      date: 'Nove 20, 2025',
      title: 'Project Fallace — Concept',
      excerpt: 'Project Fallace has entered the concept phase...and it seems ww have found a great concept, Science Fiction Horror Action!',
    },
        {
      id: 'u1',
      date: 'TBC',
      title: 'Project Phantom - Concept',
      excerpt: 'This one has been in the room for a long time, and its finally going to take shape. An adventure game with a RPG twist!',
    },
  ];

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainCarousel.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [mainCarousel.length]);

  return (
    <Router>
      <AnimatedRoutes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <div className="min-h-screen bg-gray-900 text-gray-100 antialiased font-sans">
              {/* HEADER */}
              <header className="w-full fixed z-50 top-0 left-0 px-6 py-8 flex items-center justify-between bg-gradient-to-b from-black to-transparent">
                <div className="flex items-center gap-4">
                  <div>
                    {/* <h1 className="text-xl font-semibold tracking-tight">IRON SHIFT</h1> */}
                      <img
                        src={ISText}
                        alt="IS Text"
                        className="w-40 h-15"
                      />
                    {/* <p className="text-xs font-semibold text-white-400">GAMES</p> */}
                  </div>
                </div>

                {/* Desktop Nav */}
                  <nav className="hidden md:flex gap-10 font-bold items-center text-xs text-blue-400">
                    <a href="#games" className="hover:text-white">GAMES</a>
                    <a href="#updates" className="hover:text-white">UPDATES</a>
                    <Link to="/the-lab" className="hover:text-white">THE LAB</Link>
                    <a href="#contact" className="hover:text-white">CONTACT</a>
                    <Link to="/work-with-us" className="hover:text-white">JOIN US</Link>
                    <Link to="/about-us" className="hover:text-white">ABOUT US</Link>
                  </nav>

                  {/* Mobile Hamburger */}
                  <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300">
                      {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Mobile Dropdown Menu */}
                  {menuOpen && (
                    <div className="absolute top-full right-6 mt-2 w-48 bg-gray-900 border border-white/10 rounded-lg shadow-lg flex flex-col p-2 gap-2">
                      <a href="#games" className="hover:text-white px-3 py-2 rounded-md text-gray-300">Games</a>
                      <a href="#updates" className="hover:text-white px-3 py-2 rounded-md text-gray-300">Updates</a>
                      <Link to="/the-lab" className="hover:text-white px-3 py-2 rounded-md text-gray-300">The Lab</Link>
                      <a href="#contact" className="hover:text-white px-3 py-2 rounded-md text-gray-300">Contact</a>
                      <Link to="/work-with-us" className="hover:text-white px-3 py-2 rounded-md text-gray-300">Work With Us</Link>
                      <Link to="/about-us" className="hover:text-white px-3 py-2 rounded-md text-gray-300">About Us</Link>
                    </div>
                  )}
                </header>

                {/* FULLSCREEN CAROUSEL */}
                <section className="relative w-full h-screen overflow-hidden">
                  {mainCarousel.map((slide, index) => (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* Main Splash Image */}
                      <img
                        src={slide.splashImages[0]}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Left-side info panel */}
                      <div className="absolute left-5 top-3/4 -translate-y-1/2 flex items-center gap-6 p-6 rounded-1xl shadow-2xl bg-black/70"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent, black 0%, black 80%, transparent), radial-gradient(circle, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 0%, black 100%, transparent), radial-gradient(circle, black 80%, transparent 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'destination-in',
                      }}
                    >
                        {/* Cover Image */}
                        <div className="flex-shrink-0 w-48 h-48 overflow-hidden shadow-lg">
                          <img
                            src={slide.cover}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Title & Platforms */}
                        <div className="flex-1 flex flex-col justify-center gap-2">
                          <h3 className="text-2xl font-bold">{slide.title}</h3>
                          <p className="text-sm font-bold text-gray-300">
                            Available on: {slide.platforms.join(', ')}
                          </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3">
                          <button className="px-4 py-2 bg-indigo-600 rounded-md text-sm text-white hover:bg-indigo-700">
                            Wishlist / Buy Now
                          </button>
                          <button className="px-4 py-2 bg-indigo-600 rounded-md text-sm text-white hover:bg-indigo-700">
                            Watch Trailer
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Carousel dots */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {mainCarousel.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
                      />
                    ))}
                  </div>
                </section>

                {/* PARALLAX SECTION */}
                <CombinedParallaxSection image={PFantom} height="500px">
                  <h2 className="text-3xl font-bold text-white">GAMES BEYOND DREAMS</h2>
                </CombinedParallaxSection>


                {/* GAMES GRID */}
                <section id="games" className="max-w-7xl mx-auto px-6 py-12">
                  <h3 className="text-2xl font-semibold mb-6">Games</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games.map((g) => (
                      <motion.article
                      key={g.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      whileHover={{
                        scale: [1, 1.03, 1], // pulse while hovering
                        transition: { duration: 0.6, ease: "easeInOut" },
                      }}
                      className="bg-gray-850 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    >
                      <div className="relative">
                        <img src={g.cover} alt={g.title} className="w-full h-56 object-cover" />
                        <div className="absolute left-4 top-4">
                          <span className="bg-black/60 px-3 py-1 rounded-full text-xs">{g.status}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold">{g.title}</h4>
                        {g.tagline && <p className="text-sm text-gray-400 mt-2">{g.tagline}</p>}
                        <div className="mt-4 flex items-center justify-between">
                          {g.release && <div className="text-sm text-gray-300">{g.release}</div>}
                          <div className="flex gap-2">
                            <button
                              onClick={() => setActiveGame(g)}
                              className="px-3 py-2 bg-indigo-600 rounded-md text-sm"
                            >
                              Details
                            </button>
                            <button className="px-3 py-2 border border-gray-700 rounded-md text-sm">
                              Wishlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                    ))}
                  </div>

                  {/* Browser Games Example */}
                  <h3 className="text-2xl font-semibold mt-12 mb-6">Browser Games</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.article
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      whileHover={{
                        scale: [1, 1.03, 1], // subtle pulse
                        transition: { duration: 0.6, ease: "easeInOut" },
                      }}
                      className="bg-gray-850 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    >
                      <div className="relative">
                        <img src={BTreas} alt="Browser Game" className="w-full h-56 object-cover" />
                        <div className="absolute left-4 top-4">
                          <span className="bg-black/60 px-3 py-1 rounded-full text-xs">Released</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold">Browser Fun</h4>
                        <p className="text-sm text-gray-400 mt-2">Simple fun in your browser.</p>
                        <div className="mt-4 flex gap-2">
                          <button className="px-3 py-2 bg-indigo-600 rounded-md text-sm">Play Now</button>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                </section>

                {/* UPDATES */}
                <section id="updates" className="bg-gradient-to-b from-black/60 to-transparent border-t border-white/6">
                  <div className="max-w-7xl mx-auto px-6 py-12">
                    <h3 className="text-2xl font-semibold mb-6">Latest Updates</h3>
                    <ul className="space-y-4">
                      {updates.map((u) => (
                        <li key={u.id} className="bg-gray-900/40 p-4 rounded-lg border border-white/4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold">{u.title}</h4>
                              <p className="text-sm text-gray-400 mt-1">{u.excerpt}</p>
                            </div>
                            <div className="text-xs text-gray-400">{u.date}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* PARALLAX BEFORE FOOTER */}
                <CombinedParallaxSection
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
                  height="500px"
                >
                  <div className="flex flex-col items-center justify-center gap-6 w-full px-6">
                    <h2 className="text-3xl font-bold text-white">OUR SUPPORTERS</h2>
                    <div className="w-full">
                      <SupportersCarousel speed={50} />
                    </div>
                  </div>
                </CombinedParallaxSection>




                {/* FOOTER */}
                <footer id="contact" className="bg-gray-900 text-gray-100 py-16 border-t border-white/6">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo & Info */}
                    <div className="flex flex-col gap-3">
                                       <img
                        src={ISText}
                        alt="IS Text"
                        className="w-40 h-15"
                      />
                      <p className="text-sm font-bold text-gray-400">IRON SHIFT GAMES</p>
                      <p className="text-sm text-gray-400">South Africa</p>
                      <p className="text-sm text-gray-400">hello@ironshift.games</p>
                    </div>

                    {/* Games */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">GAMES</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>Project Breaker</li>
                        <li>Project Fallace</li>
                        <li>Project Phantom</li>
                      </ul>
                    </div>

                    {/* Careers */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">CAREERS</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>Open Positions</li>
                      </ul>
                    </div>

                    {/* Support */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">SUPPORT</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>FAQ</li>
                        <li>Contact Support</li>
                      </ul>
                    </div>

                    {/* Platforms & Social */}
                    <div className="mt-8">
                      <h3 className="text-1xl font-bold mb-6 text-white">PLATFORMS & SOCIAL</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Platforms */}
                        <div>
                          <h4 className="text-sx font-semibold mb-4 text-white">PLATFORMS</h4>
                          <div className="flex flex-wrap items-center gap-4">
                            <img
                              src="https://cdn.simpleicons.org/steam/white"
                              alt="Steam"
                              className="w-8 h-8"
                            />
                            <img
                              src="https://cdn.simpleicons.org/itchdotio/white"
                              alt="Itch.io"
                              className="w-8 h-8"
                            />
                            <img
                              src="https://cdn.simpleicons.org/gogdotcom/white"
                              alt="GOG"
                              className="w-8 h-8"
                            />
                            <img
                              src="https://cdn.simpleicons.org/googleplay/white"
                              alt="Google Play"
                              className="h-8"
                            />
                          </div>
                        </div>

                        {/* Follow Us */}
                        <div>
                          <h4 className="text-sx font-semibold mb-4 text-white">FOLLOW US</h4>
                          <div className="flex flex-wrap items-center gap-4">
                            <a href="#">
                              <img
                                src="https://cdn.simpleicons.org/x/white"
                                alt="Twitter"
                                className="w-8 h-8 hover:opacity-80 transition"
                              />
                            </a>
                            <a href="#">
                              <img
                                src="https://cdn.simpleicons.org/instagram/white"
                                alt="Instagram"
                                className="w-8 h-8 hover:opacity-80 transition"
                              />
                            </a>
                            <a href="#">
                              <img
                                src="https://cdn.simpleicons.org/steam/white"
                                alt="Steam"
                                className="w-8 h-8 hover:opacity-80 transition"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Iron Shift. All rights reserved.
                  </div>

                  <div className="mt-2 text-center text-xs text-gray-500">
                    powered by GitHub Pages
                  </div>
                </footer>


                {/* MODAL */}
                <AnimatePresence>
                  {activeGame && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 flex items-center justify-center p-6"
                    >
                      <motion.div
                        initial={{ scale: 0.98, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.98, y: 10 }}
                        className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-white/6 shadow-2xl"
                      >
                        <div className="flex gap-6">
                          <div className="w-1/3">
                            <img
                              src={activeGame.cover}
                              alt={activeGame.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-6 flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-2xl font-semibold">{activeGame.title}</h3>
                                <p className="text-sm text-gray-400 mt-2">{activeGame.tagline}</p>
                              </div>
                              <button onClick={() => setActiveGame(null)} className="text-sm text-gray-400">
                                Close
                              </button>
                            </div>
                            <p className="mt-4 text-gray-300">{activeGame.description}</p>
                            {activeGame.features && (
                              <div className="mt-6">
                                <h5 className="text-sm text-gray-300 font-semibold">Key Features</h5>
                                <ul className="mt-2 flex flex-wrap gap-2">
                                  {activeGame.features.map((f, i) => (
                                    <li key={i} className="text-xs bg-white/6 px-3 py-1 rounded-md">{f}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                      <div className="fixed inset-0 bg-black/60" onClick={() => setActiveGame(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <style>{`.bg-gray-850 { background-color: rgba(18,18,20,1); }`}</style>
              </div>
            </motion.div>
          }
        />

        {/* Work With Us Page */}
        <Route
          path="/work-with-us"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <WorkWithUs />
            </motion.div>
          }
        />

        {/* About Us Page */}
        <Route
          path="/about-us"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <AboutUs />
            </motion.div>
          }
        />

        {/* The Lab Page */}
        <Route
          path="/the-lab"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <TheLab />
            </motion.div>
          }
        />
      </AnimatedRoutes>
    </Router>
  );
}
