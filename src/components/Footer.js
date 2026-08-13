// ./src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import ISText from '../assets/IronpulseText.png';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Column 1 — Studio */}
          <div className="lg:col-span-2">
            <img src={ISText} alt="Ironpulse Studios" className="w-40 mb-6" />

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Ironpulse Studios is an independent game development studio crafting 
              immersive worlds, powerful narratives, and unforgettable gameplay experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-gray-400">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">YouTube</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Discord</a>
            </div>
          </div>

          {/* Column 2 — Studio Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6 text-white">
              STUDIO
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about-us" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/work-with-us" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/the-lab" className="hover:text-white transition">The Lab</Link></li>
              <li><a href="#updates" className="hover:text-white transition">News</a></li>
            </ul>
          </div>

          {/* Column 3 — Games */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6 text-white">
              GAMES
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#games" className="hover:text-white transition">Project Breaker</a></li>
              <li><a href="#games" className="hover:text-white transition">Project Phantom</a></li>
              <li><a href="#games" className="hover:text-white transition">Project Fallace</a></li>
              <li><a href="#games" className="hover:text-white transition">Browser Games</a></li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6 text-white">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Email: contact@ironpulse-studios.com</li>
              <li>Business Inquiries</li>
              <li>Press Kit</li>
              <li>Support</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Ironpulse Studios. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}