import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import ISText from './assets/IronpulseText.png';
import HeroImage from './assets/AboutUsHero.jpg';
import TeamImage from './assets/OurTeam.jpg';
import ValuesImage from './assets/OurValues.jpg';
import LegacyImage from './assets/Legacy.jpg';

export default function AboutUs() {
  const sections = [
    {
      subtitle: "// 01_ORIGINS",
      title: "Our Team",
      image: TeamImage,
      content: [
        "We began with a single developer in 2023 — learning, experimenting, and building prototypes without funding or industry connections. Passion and creativity drove everything forward.",
        "Like-minded friends soon joined — a small team of dreamers, developers, and storytellers. Together, we founded Iron Shift to make games with passion and purpose."
      ],
    },
    {
      subtitle: "// 02_CORE_DIRECTIVES",
      title: "Our Values",
      image: ValuesImage,
      content: [
        "Unyielding Passion & Creativity: The kind that keeps you up at night and drives you just a little crazy — in the best way possible.",
        "Uniquely Driven Development: Fueled by purpose and curiosity — the spark that makes you wake up each day ready to build something new.",
        "Collaboration & Community: Whether introvert or extrovert, there’s a place here. We grow stronger together.",
        "Relentless Innovation: Determined, bold, and maybe a bit stubborn — we push boundaries until they break."
      ],
    },
    {
      subtitle: "// 03_LONG_TERM_VISION",
      title: "The Legacy",
      image: LegacyImage,
      content: [
        "We aim to prove that passion outlives budget. The experiences we create leave lasting impressions and inspire new ambitions.",
        "We refuse to chase trends or compete with industry giants. It’s all about the craft and the feeling we fell in love with as gamers.",
        "Anyone can make a game, but only the passionate can be great."
      ],
    },
  ];

  const fadeInLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
  const fadeInRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };

  return (
    <div className="relative min-h-screen bg-black font-mono text-gray-100 flex flex-col selection:bg-cyan-400 selection:text-black overflow-hidden">
      
      {/* RETRO CRT OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />

      {/* GLOBAL DOT MATRIX GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      {/* AMBIENT GLOWS */}
      <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[200px] pointer-events-none" />

      {/* HEADER */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b-2 border-cyan-500/30 bg-black/85 px-8 py-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
        <Link to="/">
          <img src={ISText} alt="IronShift Logo" className="w-36 drop-shadow-[2px_2px_0px_rgba(34,211,238,0.5)] transition-transform hover:scale-105" />
        </Link>
        <Link
          to="/"
          className="border-2 border-cyan-500/40 px-4 py-2 text-xs font-black tracking-[0.2em] text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
        >
          RETURN_HOME
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[65vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-50 contrast-110 scale-105"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-400 text-[10px] tracking-[0.4em] font-black uppercase">
            // STUDIO_MANIFESTO
          </motion.p>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            ABOUT IRON SHIFT
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto border-l-4 border-cyan-500 pl-6 text-left"
          >
            Independent game studio based in South Africa, fueled by passion, creativity, and the drive to forge unique interactive experiences.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      <main className="max-w-7xl mx-auto px-6 space-y-20 relative z-10 py-20">
        {sections.map((sec, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.section
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col lg:flex-row bg-gray-950 border-2 border-cyan-500/40 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.2)] overflow-hidden"
            >
              {/* IMAGE PANEL */}
              <motion.div
                variants={isLeft ? fadeInLeft : fadeInRight}
                transition={{ duration: 0.6 }}
                className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-auto bg-gray-950 border-cyan-500/40 p-2 overflow-hidden group flex"
              >
                <div className="relative w-full h-full border-2 border-cyan-500/30 overflow-hidden">
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500 filter contrast-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  
                  {/* Retro Corner Notches */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
                </div>
              </motion.div>

              {/* TEXT PANEL */}
              <motion.div
                variants={isLeft ? fadeInRight : fadeInLeft}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 px-8 sm:px-12 py-10 sm:py-14 space-y-6 flex flex-col justify-center bg-black/40"
              >
                <div>
                  <span className="text-cyan-400 text-[10px] tracking-[0.4em] font-black block mb-2">{sec.subtitle}</span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {sec.content.map((c, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed border-l-4 border-cyan-500 pl-4"
                    >
                      {c}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </motion.section>
          );
        })}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}