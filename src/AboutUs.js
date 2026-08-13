// ./src/AboutUs.js
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
      title: "Our Team",
      image: TeamImage,
      content: [
        "We began with a single developer in 2023 — learning, experimenting, and building prototypes without funding or industry connections. Passion and creativity drove everything forward.",
        "Like-minded friends soon joined — a small team of dreamers, developers, and storytellers. Together, we founded Iron Shift to make games with passion and purpose."
      ],
    },
    {
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
      title: "The Legacy",
      image: LegacyImage,
      content: [
        "We aim to prove that passion outlives budget. The experiences we create leave lasting impressions and inspire new ambitions.",
        "We refuse to chase trends or compete with industry giants. It’s all about the craft and the feeling we fell in love with as gamers.",
        "Anyone can make a game, but only the passionate can be great."
      ],
    },
  ];

  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 antialiased font-sans flex flex-col relative overflow-hidden">

      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* HEADER */}
      <header className="w-full fixed z-50 top-0 left-0 px-6 py-4 flex items-center justify-between bg-black/70 backdrop-blur-md border-b border-white/10">
        <img src={ISText} alt="Logo" className="w-32 md:w-36" />

        <Link
          to="/"
          className="px-4 py-2 text-xs md:text-sm font-semibold text-indigo-300 border border-white/10 rounded-md hover:text-white hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] transition"
        >
          Back Home
        </Link>
      </header>

      {/* HERO */}
      <section
        className="pt-28 relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          minHeight: '60vh',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            About Iron Shift
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Independent game studio based in South Africa, fueled by passion, creativity, and the drive to make unique experiences.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24 md:space-y-32 relative z-10 py-16 md:py-24">

        {sections.map((sec, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.section
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-[#111118] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)]"
            >

              {/* IMAGE */}
              <motion.div
                variants={isLeft ? fadeInLeft : fadeInRight}
                className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden"
              >
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.3),transparent_70%)]" />
              </motion.div>

              {/* TEXT */}
              <motion.div
                variants={isLeft ? fadeInRight : fadeInLeft}
                className="w-full lg:w-1/2 px-6 sm:px-10 py-10 sm:py-14 space-y-5 flex flex-col justify-center"
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {sec.title}
                </h2>

                {sec.content.map((c, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed break-words"
                  >
                    {c}
                  </motion.p>
                ))}
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