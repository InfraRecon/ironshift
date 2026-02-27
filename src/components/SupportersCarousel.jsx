import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const supporterLogos = [
  'https://via.placeholder.com/150x80?text=Logo1',
  'https://via.placeholder.com/150x80?text=Logo2',
  'https://via.placeholder.com/150x80?text=Logo3',
  'https://via.placeholder.com/150x80?text=Logo4',
  'https://via.placeholder.com/150x80?text=Logo5',
];

export default function SupportersCarousel({ speed = 50 }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Duplicate logos for seamless loop
  const logos = [...supporterLogos, ...supporterLogos];

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2); // original width
    }
  }, []);

  if (!width) return null; // wait until width is measured

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-8"
        animate={{ x: [-0, -width] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: width / speed,
            ease: 'linear',
          },
        }}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img src={logo} alt={`Supporter ${index}`} className="h-20 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
