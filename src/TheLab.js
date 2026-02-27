// TheLab.js
import React from 'react';
import { Link } from 'react-router-dom';
import LabModel from './components/LabModel';
import UnityGame from './components/UnityGame'; 

export default function TheLab() {
  const videos = [
    {
      title: 'Grand Theft Auto Loading Screen',
      description:
        'Experimenting with loading screen techniques, post processing and visuals for scene loading.',
      url: 'https://www.youtube.com/embed/KS6C793gyqc?si=P9gQ520ib-Y-pi8g',
      creator: 'Developed by Roberto Bliaja',
    },
    {
      title: 'VR Lightsabers',
      description:
        'Exploring the Interactivity and Graphical Performance of Lightsabers in Unity VR',
      url: 'https://www.youtube.com/embed/q4DDa6V4hxM?si=Qhquo5pVpLoqqH-7',
      creator: 'Developed by Roberto Bliaja',
    },
    {
      title: 'Real-time Vertex Path Finding',
      description: 'CPU-driven pathfinding for horde-like enemies',
      url: 'https://www.youtube.com/embed/kCVG6zdq8iM?si=YDMyaX-Qt-DQREwo',
      creator: 'Developed by Roberto Bliaja',
    },
    {
      title: 'Force Unleashed Star Destroyer Concept Scene',
      description: 'Experimenting with Higher Quality Production Values',
      url: 'https://www.youtube.com/embed/Wcyl-fs1NZY?si=bIIfoMyIxw-a_lr1',
      creator: 'Developed by Roberto Bliaja',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Lab</h1>
        <p className="text-gray-300 mb-6">
          The Lab is Iron Shift’s creative sandbox — a space to explore, experiment, and test the limits
          of what we can build. These projects aren’t tied to any specific game — they’re experiments in
          motion, lighting, and design that push our craft forward.
        </p>

        {/* Interactive 3D section */}
        <div className="mt-10 mb-14">
          <h2 className="text-2xl font-semibold mb-4">Interactive 3D Prototype</h2>
          <p className="text-gray-400 mb-6">
            A real-time interactive 3D experiment rendered directly in the browser using WebGL.
          </p>

          {/* Unity WebGL game – smaller, matches video size */}
          <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <UnityGame />
            </div>
          </div>

          {/* Existing LabModel below */}
          <div className="mt-8">
            <LabModel />
          </div>
        </div>


        {/* Video gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {videos.map((video, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{video.description}</p>
                <p className="text-gray-500 text-xs italic">{video.creator}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Outro */}
        <div className="mt-12 text-gray-300">
          <p className="mb-4">
            The Lab is where Iron Shift hones its edge — where innovation is forged through experimentation.
          </p>
          <p className="mb-6">We believe that every great idea starts with a spark — and this is where those sparks are born.</p>
        </div>

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
