'use client';

import { motion } from 'framer-motion';

export default function RelationshipSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center px-4 py-32 bg-gradient-to-b from-[#0a0e1a] via-[#1a2a50]/40 to-[#0a0e1a]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.p
          className="text-3xl md:text-5xl font-light text-[#a8d5f7] leading-relaxed mb-12"
          variants={itemVariants}
        >
          Some connections don{'\''}t need names.
        </motion.p>

        <motion.p
          className="text-2xl md:text-4xl font-light text-[#7a5fb8] leading-relaxed mb-12"
          variants={itemVariants}
        >
          Not simple. Not ordinary.
        </motion.p>

        <motion.p
          className="text-3xl md:text-4xl font-light text-[#e8e8f0] leading-relaxed"
          variants={itemVariants}
        >
          Just real.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-20 h-px bg-gradient-to-r from-transparent via-[#4a9fd8]/40 to-transparent"
          variants={itemVariants}
        />
      </motion.div>
    </motion.section>
  );
}
