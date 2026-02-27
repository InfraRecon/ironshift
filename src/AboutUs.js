import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <h1 className="text-4xl font-bold mb-6">About Iron Shift</h1>

        {/* Story / mission */}
        <p className="text-gray-300 mb-4">
          Iron Shift is an independent game studio based in South Africa, built on a young developers vison to develope high quality indie titles within the Unity Engine. Fueled by undying will, and passion.
        </p>

        <p className="text-gray-300 mb-4">
          We create games with heart, imagination, and a deep respect for our gamers, no microtransactions, no DLC's or scummy practices, just games entertainment.
        </p>

        <p className="text-gray-300 mb-4">
          We don’t rely on big budgets or large teams. Our focus is on crafting meaningful, diverse, and fun experiences 
          that resonate with players that are fans of the Playstation 2, and Original XBOX era with a much modern graphics to bring teh uniquness of games back in to the new.
        </p>

        {/* Values / what makes you unique */}
        <h2 className="text-2xl font-semibold mt-12 mb-3">Our Team</h2>
        <p className="text-gray-300 mb-4">
            We began with a single developer in 2023 — learning, experimenting, and building prototypes in quiet determination, without funding or industry connections. Despite never having worked in a studio before, a deep passion for games and an unshakable drive to create pushed him forward. Where he lacked in experience, he made up for in creativity, resourcefulness, and vision.
        </p>
        <p className="text-gray-300 mb-4">
            After months of persistence and late nights, a like-minded friends joined the journey — people of different skill sets but shared the same drive for development. Together, we founded Iron Shift: a small, independent team of dreamers, developers, and storytellers who simply love games — from competitive shooters to deep single-player adventures.
        </p>
        <p className="text-gray-300 mb-4">
            What unites us isn’t just our craft, but our purpose: to leave behind a legacy. To build something meaningful, memorable, and uniquely ours — games made with passion, heart, and a little bit of chaos.
        </p>

        {/* Values / what makes you unique */}
        <h2 className="text-2xl font-semibold mt-12 mb-3">Our Values</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <h2 className="text-2xl font-thin mt-0 mb-1">Unyielding Passion & Creativity</h2>
          <li>The kind that keeps you up at night and drives you just a little crazy — in the best way possible.</li>
           <h3 className="text-2xl font-thin mt-6 mb-1">Uniquely Driven Development</h3>
          <li>Fueled by purpose and curiosity — the spark that makes you wake up each day ready to build something new.</li>
           <h3 className="text-2xl font-thin mt-6 mb-1">Collaboration & Community</h3>
          <li>Whether you’re an introvert, extrovert, or somewhere in between — there’s a place for you here. We grow stronger together.</li>
           <h3 className="text-2xl font-thin mt-6 mb-1">Relentless Innovation</h3>
          <li>We don’t stop until the vision is real. Determined, bold, and maybe a bit stubborn — we push boundaries until they break.</li>
        </ul>

        {/* Team / optional */}
        <h2 className="text-2xl font-semibold mt-12 mb-3">The Legacy</h2>
        <p className="text-gray-300 mb-4">
            As a Team we aim to prove that passion outlives budget.
            What we create will mean something — the experiences we make wil leave a lasting impression making you want more with every hour. The projects we build will lead us to greator and more ambitious titles that not only bring back the classic games we all feel have been lost, but new experiences the industry would hav enever been able to conceive. 
            Our goal is to Revive the spirit of gaming — where creativity superseeds all including profit, and imagination drives innovation.
        </p>

        <p className="text-gray-300 mb-4">
            We refuse to chase trends or compete with industry giants.
            It’s all about the craft, the experiences, that feeling we fell in love with when we first laid our hands on the controller.
            In the future we hope to inspire — the dreamers, the late-night coders, the artists — to believe that creativity is journey that can chosen and not paid for.
        </p>

        <p className="text-gray-300 mb-4">
            Our legacy wont be Revenue, but the worlds we create...
        </p>

        <p className="text-gray-300 font-semibold mb-4">
            Anyone can make a game, but only the passionate can be great.
        </p>

        {/* Call to action / Back to Home */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md text-sm font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
