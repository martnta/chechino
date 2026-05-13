'use client';

import { motion } from 'framer-motion';

const beltColors = [
  { color: '#FFFFFF', name: 'White' },
  { color: '#FF8C00', name: 'Orange' },
  { color: '#2563EB', name: 'Blue' },
  { color: '#EAB308', name: 'Yellow' },
  { color: '#DC2626', name: 'Red' },
  { color: '#16A34A', name: 'Green' },
  { color: '#78350F', name: 'Brown' },
  { color: '#171717', name: 'Black' },
];

export default function BeltCarousel() {
  const belts = [...beltColors, ...beltColors, ...beltColors];

  return (
    <section className="bg-neutral-900 py-6 overflow-hidden border-y border-white/5">
      <motion.div 
        className="flex gap-3"
        animate={{ x: [0, -320] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
      >
        {belts.map((belt, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-16 h-3 rounded-sm opacity-60"
            style={{ backgroundColor: belt.color }}
          />
        ))}
      </motion.div>
    </section>
  );
}