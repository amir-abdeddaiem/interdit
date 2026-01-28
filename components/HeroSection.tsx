'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const jellyVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const float = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#0f1520] to-[#1a2a50] flex flex-col items-center justify-center px-4">
      {/* Floating jellyfish background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-25"
        animate={{
          y: [0, -30, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
          <Image
            src="/jellyfish (2).png"
            alt="Floating jellyfish"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a] opacity-50" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl flex flex-col items-center gap-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-base md:text-lg text-[#a8d5f7] font-light tracking-widest"
          variants={itemVariants}
        >
          Tonight isn{'\''}t just another night… 🌙
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-light leading-tight text-[#e8e8f0]"
          variants={itemVariants}
        >
          It{'\''}s the day someone special was born ✨
        </motion.h1>

        <motion.p
          className="text-4xl md:text-6xl font-light text-[#4a9fd8] tracking-wider"
          variants={itemVariants}
        >
          Happy Birthday, Ayou 🤍
        </motion.p>

        <motion.div
          className="mt-16 text-xs md:text-sm text-[#7a5fb8] tracking-widest opacity-70"
          variants={itemVariants}
        >
          <p>Scroll to continue the journey</p>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-[#4a9fd8] text-2xl">↓</div>
      </motion.div>
    </section>
  );
}
