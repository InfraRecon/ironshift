// ./src/components/StaticImageSection.js
import React from 'react';
import { motion } from 'framer-motion';

export default function StaticImageSection({ image, heading, paragraph, height = "650px", children }) {
  return (
    <section
      className="relative w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        height,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      <div className="relative z-10 max-w-4xl px-6">
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-wider mb-6"
          >
            {heading}
          </motion.h2>
        )}

        {paragraph && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  );
}