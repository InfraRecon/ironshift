import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkWithUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Back to Home Button */}
        <div className="text-left mb-6">
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-md transition"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Work With Us</h1>
        <p className="text-gray-300 mb-4">
          Iron Shift thrives on passion, creativity, and collaboration. We are a small, independent studio,
          building games with what we have — skill, dedication, and imagination.
        </p>

        <p className="text-gray-300 mb-4">
          We currently do <strong>not offer paid roles</strong>. Contributors may be eligible to receive a
          <strong> share of the project upon completion</strong>, based on their involvement.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Who we’re looking for</h2>
        <p className="text-gray-300 mb-4">
          We do not base our decisions on skills or experience alone. We are looking for unique individuals 
          with creative talents, ideas, or perspectives. Experienced developers are also welcome if interested.
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Individuals with genuine passion for game development</li>
          <li>Motivated contributors willing to commit time and effort</li>
          <li>Team players who enjoy collaborative work and creative problem-solving</li>
        </ul>

        <p className="text-gray-300 mb-6">
          If you’re interested in joining, please fill out our application form:
        </p>

        <a
          href="https://docs.google.com/forms/d/YOUR_FORM_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-medium transition"
        >
          Apply via Google Form
        </a>

        <p className="text-gray-500 mt-6 text-sm">
          By submitting, you acknowledge that this is a volunteer opportunity and participation 
          is at your own discretion.
        </p>
      </div>
    </div>
  );
}
