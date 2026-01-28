'use client';

import { motion } from 'framer-motion';

interface SurpriseSectionProps {
  onOpen: () => void;
}

export default function SurpriseSection({ onOpen }: SurpriseSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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
        className="max-w-2xl text-center flex flex-col items-center gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.p
          className="text-3xl md:text-5xl font-light text-[#a8d5f7] leading-relaxed"
          variants={itemVariants}
        >
          Another year. Another version of you.
        </motion.p>

        <motion.p
          className="text-2xl md:text-4xl font-light text-[#7a5fb8]"
          variants={itemVariants}
        >
          Still becoming. Still growing.
        </motion.p>

        <motion.p
          className="text-2xl md:text-4xl font-light text-[#e8e8f0]"
          variants={itemVariants}
        >
          Still inspiring.
        </motion.p>

        <motion.button
          onClick={onOpen}
          className="mt-12 px-10 py-4 rounded-full bg-[#4a9fd8]/20 border border-[#4a9fd8]/60 text-[#e8e8f0] font-light text-lg hover:bg-[#4a9fd8]/40 hover:border-[#a8d5f7] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(74,159,216,0.3)]"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          For Ayou 🤍
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
