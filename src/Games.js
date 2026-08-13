import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ISText from './assets/IronpulseText.png';

import FBIcon from './assets/AstroAssault.png';
import PFantom from './assets/ProjectPhantom.png';
import PFAlien from './assets/ProjectFallaceAlien.png';
import BTreas from './assets/BrowserTreasure.png';
import PBS from './assets/ProjectBreakerScreen1.png';

/* ================= GAME DATA ================= */
const genreSections = [
  {
    title: 'FEATURED',
    games: [
      {
        name: 'SUPER ASTRO BLAST',
        image: PBS,
        release: '2026',
        slug: 'super-astro-blast',
      },
      {
        name: 'PROJECT PHANTOM',
        image: PFantom,
        release: '2027',
        slug: 'project-phantom',
      },
      {
        name: 'PROJECT FALLACE',
        image: PFAlien,
        release: '2028',
        slug: 'project-fallace',
      },
    ],
  },
  {
    title: 'SCI-FI',
    games: [
      {
        name: 'SUPER ASTRO BLAST',
        image: FBIcon,
        release: '2026',
        slug: 'super-astro-blast',
      },
      {
        name: 'PROJECT FALLACE',
        image: PFAlien,
        release: '2028',
        slug: 'project-fallace',
      },
    ],
  },
  {
    title: 'HORROR',
    games: [
      {
        name: 'PROJECT PHANTOM',
        image: PFantom,
        release: '2027',
        slug: 'project-phantom',
      },
      {
        name: 'PROJECT FALLACE',
        image: PFAlien,
        release: '2028',
        slug: 'project-fallace',
      },
    ],
  },
  {
    title: 'BROWSER GAMES',
    games: [
      {
        name: 'BROWSER TREASURE',
        image: BTreas,
        release: '2025',
        slug: 'browser-treasure',
      },
    ],
  },
];

/* ================= GAME CARD ================= */
function GameCard({ game }) {
  return (
    <Link to={`/games/${game.slug}`}>
      <motion.div
        whileHover={{ scale: 1.04, y: -5 }}
        transition={{ duration: 0.25 }}
        className="min-w-[320px] h-[420px] relative rounded-2xl overflow-hidden border border-cyan-500/10 bg-gray-950 shadow-[0_0_30px_rgba(34,211,238,0.08)] group cursor-pointer"
      >
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 w-full">
          <p className="text-xs tracking-[0.25em] text-cyan-300 mb-2">
            RELEASE • {game.release}
          </p>

          <h3 className="text-2xl font-bold tracking-wide text-white mb-4">
            {game.name}
          </h3>

          <div className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-md text-sm font-semibold shadow-[0_0_20px_rgba(34,211,238,0.25)] transition inline-block">
            VIEW GAME
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ================= GENRE ROW ================= */
function GenreRow({ title, games }) {
  return (
    <section className="mb-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-cyan-300">
          {title}
        </h2>

        <button className="text-sm tracking-widest text-gray-400 hover:text-cyan-300 transition">
          VIEW ALL
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 pb-4 min-w-max">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */
export default function GamesPage() {
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
          <Link to="/games" className="text-cyan-300">GAMES</Link>
          <Link to="/the-lab" className="hover:text-cyan-300 transition">THE LAB</Link>
          <Link to="/work-with-us" className="hover:text-cyan-300 transition">JOIN US</Link>
          <Link to="/about-us" className="hover:text-cyan-300 transition">ABOUT</Link>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">

        <img
          src={PBS}
          alt="Games Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-[0.35em] text-cyan-300 mb-8"
          >
            OUR GAMES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Explore worlds forged through imagination, passion, and relentless creativity.
          </motion.p>
        </div>
      </section>

      {/* ================= GAME SECTIONS ================= */}
      <main className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-10 py-24">
        {genreSections.map((section, index) => (
          <GenreRow key={index} title={section.title} games={section.games} />
        ))}
      </main>

      {/* ================= CTA ================= */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black border-t border-cyan-500/10 border-b border-cyan-500/10 overflow-hidden">

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-cyan-300 mb-8">
            THE FUTURE OF IRONPULSE
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            We are building immersive worlds beyond imagination.
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-8 py-4 bg-cyan-600 rounded-md">
              JOIN COMMUNITY
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            <div className="lg:col-span-2">
              <img src={ISText} className="w-40 mb-6" />
              <p className="text-gray-400 text-sm max-w-md">
                Ironpulse Studios builds cinematic sci-fi experiences.
              </p>
            </div>

            <div>
              <h4 className="text-cyan-300 mb-6">STUDIO</h4>
              <ul className="text-gray-400 space-y-3">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/work-with-us">Careers</Link></li>
                <li><Link to="/the-lab">The Lab</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-300 mb-6">GAMES</h4>
              <ul className="text-gray-400 space-y-3">
                <li>Project Breaker</li>
                <li>Project Phantom</li>
                <li>Project Fallace</li>
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-300 mb-6">CONTACT</h4>
              <ul className="text-gray-400 space-y-3">
                <li>Email: contact@ironpulse-studios.com</li>
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
  );
}