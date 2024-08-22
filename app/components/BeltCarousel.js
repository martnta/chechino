'use client';

import { motion } from 'framer-motion';

const beltColors = ['white', 'orange', 'blue', 'yellow', 'red', 'brown', 'black'];

export default function BeltCarousel() {
  return (
    <motion.section 
      className="bg-white py-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex space-x-4"
          animate={{
            x: [0, -100],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...beltColors, ...beltColors].map((color, index) => (
            <motion.div
              key={`${color}-${index}`}
              className={`w-20 h-8 rounded-full flex-shrink-0`}
              style={{ backgroundColor: color }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}