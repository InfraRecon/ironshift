// ./src/WorkWithUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import ISText from './assets/IronpulseText.png';
import HeroImage from './assets/WorkWithUsBackground.jpg';
import LeftImage from './assets/TeamCollaboration.jpg';
import MiddleImage from './assets/GameDevelopment.jpg';
import RightImage from './assets/StudioWorkspace.jpg';

export default function WorkWithUs() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-[Inter] flex flex-col">

      {/* HEADER */}
      <header className="w-full fixed z-50 top-0 left-0 px-6 py-6 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent backdrop-blur">
        <img src={ISText} alt="Logo" className="w-36" />
        <Link
          to="/"
          className="px-4 py-2 text-sm font-semibold text-cyan-400 hover:text-white transition"
        >
          Back Home
        </Link>
      </header>

      {/* HERO SECTION */}
      <section
        className="pt-28 relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          minHeight: '75vh',
        }}
      >
        <div className="absolute inset-0 bg-black/80 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 py-20">
          <h1 className="text-5xl md:text-6xl font-[Orbitron] font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            Work With Us
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Iron Shift thrives on passion, creativity, and collaboration. We are a small, independent studio,
            building games with what we have — skill, dedication, and imagination.
          </p>

          <p className="text-gray-300 text-lg">
            We currently do <strong className="text-purple-400">not offer paid roles</strong>. Contributors may be eligible to receive a
            <strong className="text-cyan-400"> share of the project upon completion</strong>, based on their involvement.
          </p>
        </div>
      </section>

      {/* INTRO + TABLE */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center space-y-10">
        <h2 className="text-3xl font-[Orbitron] text-purple-400 tracking-wide">
          Who we’re looking for
        </h2>

        {/* TABLE */}
        <div className="bg-[#11111a] border border-cyan-500/20 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.1)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-black/60">
                <tr>
                  <th className="px-6 py-4 text-cyan-400 font-semibold">Role</th>
                  <th className="px-6 py-4 text-cyan-400 font-semibold">Recommended Qualification</th>
                  <th className="px-6 py-4 text-cyan-400 font-semibold">Requirements</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-gray-800 hover:bg-cyan-500/5 transition">
                  <td className="px-6 py-5 font-medium text-white">Programmer (C#)</td>
                  <td className="px-6 py-5 text-gray-300">
                    BSc Computer Science / Software Engineering / Information Technology
                  </td>
                  <td className="px-6 py-5 text-gray-400 text-sm leading-relaxed">
                    • At least 1 portfolio project (game, tool, or system)<br/>
                    • Minimum 2 years hobbyist or professional experience<br/>
                    • Familiarity with C#, Unity, or similar frameworks
                  </td>
                </tr>

                <tr className="border-t border-gray-800 hover:bg-cyan-500/5 transition">
                  <td className="px-6 py-5 font-medium text-white">Artist</td>
                  <td className="px-6 py-5 text-gray-300">
                    Diploma/Degree in Digital Art, Fine Arts, Graphic Design, or Animation
                  </td>
                  <td className="px-6 py-5 text-gray-400 text-sm leading-relaxed">
                    • At least 1 portfolio project (artwork, concepts, UI, etc.)<br/>
                    • Minimum 2 years hobbyist or professional experience<br/>
                    • Strong understanding of composition, style, and creativity
                  </td>
                </tr>

                <tr className="border-t border-gray-800 hover:bg-cyan-500/5 transition">
                  <td className="px-6 py-5 font-medium text-white">3D Designer & Animator</td>
                  <td className="px-6 py-5 text-gray-300">
                    Diploma/Degree in 3D Animation, Game Design, Multimedia, or Motion Design
                  </td>
                  <td className="px-6 py-5 text-gray-400 text-sm leading-relaxed">
                    • At least 1 portfolio project (models, rigs, or animations)<br/>
                    • Minimum 2 years hobbyist or professional experience<br/>
                    • Experience with Blender, Maya, or similar tools preferred
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          We do not base our decisions on skills or experience alone. We are looking for unique individuals 
          with creative talents, ideas, or perspectives. Experienced developers are also welcome if interested.
        </p>

        {/* CTA */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfge8MEBEkNNpZNG4oc7HqbQkdeB-I8tGOzegSoWi29iBJX_g/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-xl font-semibold text-lg 
          bg-gradient-to-r from-cyan-500 to-purple-500 
          hover:scale-105 transition shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        >
          Apply via Google Form
        </a>

        <p className="text-gray-500 mt-6 text-sm">
          By submitting, you acknowledge that this is a volunteer opportunity and participation 
          is at your own discretion.
        </p>
      </section>

      {/* SECTIONS */}
      {[ 
        { img: LeftImage, title: "Individuals with genuine passion for game development",
          text: "We are looking for team members who are passionate about crafting games and bringing creative ideas to life.", reverse: false },
        { img: MiddleImage, title: "Motivated contributors willing to commit time and effort",
          text: "Collaboration is key. We seek contributors who are committed and motivated to see projects through.", reverse: true },
        { img: RightImage, title: "Team players who enjoy collaborative work and creative problem-solving",
          text: "We value collaboration, problem-solving, and creative teamwork to make our games the best they can be.", reverse: false }
      ].map((section, i) => (
        <section key={i} className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center max-w-7xl mx-auto px-6 py-20 gap-10`}>
          <div className="flex-1 h-80 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)]">
            <img src={section.img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-[Orbitron] text-cyan-400 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-300 text-lg">
              {section.text}
            </p>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}