'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MoonSection() {
  const float = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-32 bg-gradient-to-b from-[#0a0e1a] via-[#0f1520] to-[#0a0e1a] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Starfield background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#a8d5f7] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Moon image */}
        <motion.div
          className="w-56 h-56 md:w-80 md:h-80"
          animate={float.animate}
        >
          <Image
            src="/moon.jpg"
            alt="Moon"
            width={320}
            height={320}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Text overlay */}
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-[#a8d5f7] leading-relaxed mb-8">
            May your dreams always stay bigger than your fears
          </h2>
          <p className="text-lg text-[#7a5fb8] font-light">
            Under the endless sky, may you find the strength to pursue everything your heart desires.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
