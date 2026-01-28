'use client';

import { motion } from 'framer-motion';

export default function IdentitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center px-4 py-32 bg-gradient-to-b from-[#0a0e1a] via-[#0f1520] to-[#0a0e1a]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="max-w-3xl text-center flex flex-col items-center gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-6xl md:text-7xl font-light text-[#a8d5f7]"
          variants={itemVariants}
        >
          Eya Kallel
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-[#4a9fd8] font-light tracking-wide"
          variants={itemVariants}
        >
          Creative mind. Sustainable soul. Quiet strength.
        </motion.p>

        <motion.div
          className="text-base md:text-lg text-[#e8e8f0] leading-relaxed space-y-8 max-w-2xl"
          variants={containerVariants}
        >
          <motion.p className="font-light" variants={itemVariants}>
            You don{'\''}t just teach sustainability—you live it. Every choice, every project, every conversation reflects your deep commitment to creating a better world for those who come after us.
          </motion.p>

          <motion.p className="font-light" variants={itemVariants}>
            Your creativity flows effortlessly, transforming ideas into meaningful action. You inspire others not through grand gestures, but through the quiet authenticity of who you are and what you stand for.
          </motion.p>

          <motion.p className="font-light" variants={itemVariants}>
            Your ambition to always grow, to always do better, to always reach higher—it{'\''}s a light that illuminates everyone around you. You are constantly becoming, and that journey is beautiful to witness.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
