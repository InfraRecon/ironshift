import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ISText from "./assets/IronpulseText.png";
import Footer from "./components/Footer";

import PFantom from "./assets/ProjectPhantom.png";
import PFAlien from "./assets/ProjectFallaceAlien.png";
import BTreas from "./assets/BrowserTreasure.png";
import PBS from "./assets/ProjectBreakerScreen1.png";

const games = [
  {
    name: "SUPER ASTRO BLAST",
    image: PBS,
    release: "2026",
    genre: ["SCI-FI", "ARCADE", "ACTION"],
    status: "IN DEVELOPMENT",
    slug: "super-astro-blast",
  },
  {
    name: "PROJECT PHANTOM",
    image: PFantom,
    release: "2027",
    genre: ["HORROR", "SURVIVAL", "ATMOSPHERIC"],
    status: "PRE-PRODUCTION",
    slug: "project-phantom",
  },
  {
    name: "PROJECT FALLACE",
    image: PFAlien,
    release: "2028",
    genre: ["SCI-FI", "HORROR", "ACTION"],
    status: "CONCEPT",
    slug: "project-fallace",
  },
  {
    name: "BROWSER TREASURE",
    image: BTreas,
    release: "2025",
    genre: ["BROWSER", "ADVENTURE"],
    status: "AVAILABLE",
    slug: "browser-treasure",
  },
];

function GameCard({ game, featured = false }) {
  return (
    <Link to={`/games/${game.slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className={`
          group
          relative
          overflow-hidden
          bg-gray-950
          border-2
          border-cyan-500/40
          shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)]
          hover:border-cyan-300
          hover:shadow-[8px_8px_0px_0px_rgba(34,211,238,0.6)]
          transition-all
          duration-300
          ${featured ? "h-[600px]" : "h-[520px]"}
        `}
      >
        {/* Retro Corner Notches */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />

        <img
          src={game.image}
          alt={game.name}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
            filter
            contrast-110
            brightness-90
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        {/* Retro Dot Matrix Grid Detail */}
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-full p-8 z-10">
          <p className="mb-3 text-xs tracking-[0.3em] text-cyan-400 font-black">
            // {game.status}
          </p>

          <h3
            className={`font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] ${
              featured ? "text-3xl md:text-5xl mb-6" : "text-2xl md:text-3xl mb-4"
            }`}
          >
            {game.name}
          </h3>

          <div className="mb-6 flex flex-wrap gap-2">
            {game.genre.map((tag) => (
              <span
                key={tag}
                className="
                  border
                  border-cyan-400/60
                  bg-black
                  px-3
                  py-1
                  text-xs
                  tracking-widest
                  text-cyan-300
                  font-black
                  shadow-[2px_2px_0px_rgba(34,211,238,0.4)]
                "
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t-2 border-cyan-500/40 pt-5">
            <span className="text-xs tracking-[0.2em] text-cyan-400 font-black">
              RELEASE // {game.release}
            </span>

            <span className="text-xs font-black tracking-[0.2em] text-cyan-300 group-hover:text-white transition-colors">
              ENTER_UNIVERSE →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function GamesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black font-mono text-gray-100 selection:bg-cyan-400 selection:text-black">
      
      {/* CRT Scanline Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />

      {/* GLOBAL DOT MATRIX GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b-2 border-cyan-500/30 bg-black/85 px-8 py-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
        <Link to="/">
          <img src={ISText} alt="IronShift Studios" className="w-36 drop-shadow-[2px_2px_0px_rgba(34,211,238,0.5)] transition-transform hover:scale-105" />
        </Link>

        <nav className="hidden gap-8 text-xs font-black tracking-[0.25em] text-gray-300 md:flex">
          <Link to="/" className="hover:text-cyan-300 transition-colors">
            HOME
          </Link>
          <Link to="/games" className="text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            GAMES
          </Link>
          <Link to="/the-lab" className="hover:text-cyan-300 transition-colors">
            THE LAB
          </Link>
          <Link to="/work-with-us" className="hover:text-cyan-300 transition-colors">
            JOIN US
          </Link>
          <Link to="/about-us" className="hover:text-cyan-300 transition-colors">
            ABOUT
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-6 text-center pt-32">
        <div className="max-w-5xl space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-950 border-2 border-cyan-400 text-cyan-300 text-xs font-black tracking-widest shadow-[4px_4px_0px_0px_rgba(34,211,238,0.5)] mx-auto"
          >
            <span className="w-2.5 h-2.5 bg-cyan-400 animate-pulse" />
            <span>IRONSHIFT_STUDIOS_CATALOGUE</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            WE DON'T MAKE GAMES.
            <br />
            WE BUILD WORLDS.
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-300 font-sans border-l-4 border-cyan-500 pl-6 bg-cyan-950/20 py-4 text-left md:text-center"
          >
            Explore cinematic universes forged through science fiction, horror, imagination, and relentless technical creativity.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-xs tracking-[0.3em] text-cyan-300 font-black pt-4"
          >
            <span className="px-4 py-2 bg-black border-2 border-cyan-500/40 shadow-[4px_4px_0px_0px_rgba(34,211,238,0.3)]">SCI-FI</span>
            <span className="px-4 py-2 bg-black border-2 border-cyan-500/40 shadow-[4px_4px_0px_0px_rgba(34,211,238,0.3)]">HORROR</span>
            <span className="px-4 py-2 bg-black border-2 border-cyan-500/40 shadow-[4px_4px_0px_0px_rgba(34,211,238,0.3)]">ACTION</span>
          </motion.div>
        </div>
      </section>

      {/* FEATURED UNIVERSE */}
      <section className="relative z-10 mx-auto mb-32 max-w-7xl px-6">
        <div className="mb-12 flex items-center">
          <div className="h-0.5 flex-1 bg-cyan-500/30" />
          <span className="px-6 text-xs tracking-[0.4em] text-cyan-300 font-black">
            // FEATURED_UNIVERSE
          </span>
          <div className="h-0.5 flex-1 bg-cyan-500/30" />
        </div>

        <GameCard game={games[0]} featured />
      </section>

      {/* PROJECTS MANIFEST TABLE */}
      <section className="relative z-10 mx-auto mb-32 max-w-7xl px-6">
        <div className="mb-12 flex items-center">
          <div className="h-0.5 flex-1 bg-cyan-500/30" />
          <span className="px-6 text-xs tracking-[0.4em] text-cyan-300 font-black">
            // ACTIVE_PROJECTS_MANIFEST
          </span>
          <div className="h-0.5 flex-1 bg-cyan-500/30" />
        </div>

        <div className="space-y-4 bg-gray-950 border-2 border-cyan-500/40 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.2)] p-8 md:p-12">
          {games.map((game) => (
            <Link
              to={`/games/${game.slug}`}
              key={game.name}
              className="
                group
                flex
                flex-col
                items-start
                justify-between
                gap-4
                border-b-2
                border-cyan-500/20
                pb-6
                pt-4
                transition-all
                hover:border-cyan-400
                hover:pl-2
                md:flex-row
                md:items-center
              "
            >
              <div>
                <h3 className="mb-1 text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  {game.name}
                </h3>
                <p className="text-xs tracking-[0.3em] text-cyan-400 font-black">
                  // {game.status}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-xs tracking-[0.3em] text-cyan-300 font-black">
                  RELEASE: {game.release}
                </div>
                <span className="text-xs font-black tracking-[0.2em] text-gray-500 group-hover:text-cyan-300 transition-colors">
                  ACCESS →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ALL GAMES GRID */}
      <section className="relative z-10 mx-auto mb-32 max-w-7xl px-6">
        <div className="mb-12 flex items-center">
          <div className="h-0.5 flex-1 bg-cyan-500/30" />
          <span className="px-6 text-xs tracking-[0.4em] text-cyan-300 font-black">
            // COMPLETE_CATALOGUE
          </span>
          <div className="h-0.5 flex-1 bg-cyan-500/30" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative border-y-2 border-cyan-500/30 bg-gradient-to-b from-black via-gray-950 to-black py-32">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8 relative z-10">
          <span className="text-cyan-400 text-xs tracking-[0.4em] font-black block">// COMMUNITY_LINK</span>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            JOIN THE JOURNEY
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            The next generation of IronShift worlds is already in development. Become part of our growing network.
          </p>

          <div className="pt-4">
            <Link
              to="/work-with-us"
              className="inline-block bg-cyan-400 text-black border-2 border-white px-10 py-5 font-black text-xs tracking-[0.25em] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:bg-cyan-300 hover:shadow-[6px_6px_0px_0px_rgba(34,211,238,0.8)] transition-all transform hover:-translate-y-1"
            >
              JOIN COMMUNITY / TEAM
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}