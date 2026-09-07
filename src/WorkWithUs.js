import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import ISText from './assets/IronpulseText.png';
import HeroImage from './assets/WorkWithUsBackground.jpg';
import LeftImage from './assets/TeamCollaboration.jpg';
import MiddleImage from './assets/GameDevelopment.jpg';
import RightImage from './assets/StudioWorkspace.jpg';

export default function WorkWithUs() {
  const roles = [
    {
      role: "Programmer (C#)",
      qualification: "BSc Computer Science / Software Engineering / IT",
      requirements: [
        "At least 1 portfolio project (game, tool, or system)",
        "Minimum 2 years hobbyist or professional experience",
        "Familiarity with C#, Unity, or similar frameworks"
      ]
    },
    {
      role: "Artist",
      qualification: "Diploma/Degree in Digital Art, Fine Arts, Graphic Design, or Animation",
      requirements: [
        "At least 1 portfolio project (artwork, concepts, UI, etc.)",
        "Minimum 2 years hobbyist or professional experience",
        "Strong understanding of composition, style, and creativity"
      ]
    },
    {
      role: "3D Designer & Animator",
      qualification: "Diploma/Degree in 3D Animation, Game Design, Multimedia, or Motion Design",
      requirements: [
        "At least 1 portfolio project (models, rigs, or animations)",
        "Minimum 2 years hobbyist or professional experience",
        "Experience with Blender, Maya, or similar tools preferred"
      ]
    }
  ];

  const valueSections = [
    { 
      img: LeftImage, 
      title: "Individuals with genuine passion",
      text: "We are looking for team members who are passionate about crafting games and bringing creative ideas to life.", 
      reverse: false 
    },
    { 
      img: MiddleImage, 
      title: "Motivated contributors",
      text: "Collaboration is key. We seek contributors who are committed and motivated to see projects through.", 
      reverse: true 
    },
    { 
      img: RightImage, 
      title: "Collaborative problem-solvers",
      text: "We value communication, creative problem-solving, and teamwork to make our games the best they can be.", 
      reverse: false 
    }
  ];

  return (
    <div className="relative min-h-screen bg-black font-mono text-gray-100 flex flex-col selection:bg-cyan-400 selection:text-black">
      
      {/* RETRO CRT OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />

      {/* GLOBAL DOT MATRIX GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

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
      <section className="relative w-full min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-50 contrast-110 scale-105"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-400 text-[10px] tracking-[0.4em] font-black uppercase">
            // RECRUITMENT_PHASE_ACTIVE
          </motion.p>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            WORK WITH US
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto border-l-4 border-cyan-500 pl-6 text-left"
          >
            Iron Shift thrives on passion, creativity, and collaboration. We are an independent studio, building games with what we have — skill, dedication, and imagination.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="inline-block p-4 border-2 border-cyan-500/40 bg-cyan-950/60 shadow-[4px_4px_0px_rgba(34,211,238,0.3)] text-xs font-black tracking-wider"
          >
            We currently do <strong className="text-cyan-300">not offer paid roles</strong>. Contributors may be eligible to receive a <strong className="text-cyan-400">share of the project upon completion</strong>.
          </motion.div>
        </div>
      </section>

      {/* INTRO + TABLE */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-16">
        <div className="text-center">
          <span className="text-cyan-400 text-[10px] tracking-[0.4em] font-black block mb-3">// OPEN_POSITIONS</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            WHO WE’RE LOOKING FOR
          </h2>
        </div>

        {/* HUD TABLE CONTAINER */}
        <div className="bg-gray-950 border-2 border-cyan-500/40 shadow-[8px_8px_0px_0px_rgba(34,211,238,0.2)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-black border-b-2 border-cyan-500/40">
                <tr>
                  <th className="px-8 py-5 text-cyan-400 font-black text-xs tracking-[0.3em]">ROLE</th>
                  <th className="px-8 py-5 text-cyan-400 font-black text-xs tracking-[0.3em]">RECOMMENDED QUALIFICATION</th>
                  <th className="px-8 py-5 text-cyan-400 font-black text-xs tracking-[0.3em]">REQUIREMENTS</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-cyan-500/20">
                {roles.map((item, idx) => (
                  <tr key={idx} className="hover:bg-cyan-500/10 transition-colors">
                    <td className="px-8 py-6 font-black text-cyan-300 tracking-wider">{item.role}</td>
                    <td className="px-8 py-6 text-gray-300 text-sm font-sans">{item.qualification}</td>
                    <td className="px-8 py-6 text-gray-400 text-sm font-sans leading-relaxed">
                      {item.requirements.map((req, i) => (
                        <div key={i} className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-2 bg-cyan-400 flex-shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-300 text-center text-base md:text-lg max-w-3xl mx-auto font-sans leading-relaxed border-l-4 border-cyan-500 pl-6 text-left">
          We do not base decisions on skills or experience alone. We look for unique individuals with creative talents, ideas, or fresh perspectives. Experienced devs are welcome to apply.
        </p>

        {/* CTA BUTTON */}
        <div className="text-center pt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfge8MEBEkNNpZNG4oc7HqbQkdeB-I8tGOzegSoWi29iBJX_g/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 text-black border-2 border-white px-10 py-5 font-black text-xs tracking-[0.25em] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:bg-cyan-300 hover:shadow-[6px_6px_0px_0px_rgba(34,211,238,0.8)] transition-all transform hover:-translate-y-1"
          >
            APPLY VIA GOOGLE FORM
          </a>

          <p className="text-gray-500 mt-6 text-xs font-sans tracking-wide">
            By submitting, you acknowledge that this is a volunteer opportunity and participation is at your discretion.
          </p>
        </div>
      </section>

      {/* VALUE SECTIONS WITH CYBER HUD ACCENTS */}
      {valueSections.map((section, i) => (
        <section key={i} className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
            
            <div className="flex-1 w-full h-[350px] relative bg-gray-950 border-2 border-cyan-500/40 p-2 shadow-[6px_6px_0px_0px_rgba(34,211,238,0.2)] group">
              <img src={section.img} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-110 brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              
              {/* Retro Corner Notches */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
            </div>

            <div className="flex-1 text-center lg:text-left space-y-4">
              <span className="text-cyan-400 text-[10px] tracking-[0.4em] font-black block">// CORE_VALUE_0{i+1}</span>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                {section.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg font-sans leading-relaxed border-l-4 border-cyan-500 pl-6">
                {section.text}
              </p>
            </div>

          </div>
        </section>
      ))}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}