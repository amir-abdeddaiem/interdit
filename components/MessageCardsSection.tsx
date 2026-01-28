'use client';

import { motion } from 'framer-motion';

const messages = [
  {
    text: 'You don\'t just teach sustainability… you live it',
    emoji: '🌱',
  },
  {
    text: 'Innovation looks softer when it comes from you',
    emoji: '✨',
  },
  {
    text: 'Some people inspire without trying — you\'re one of them',
    emoji: '🌙',
  },
];

export default function MessageCardsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className="bg-[#0f1420]/60 backdrop-blur-md border border-[#4a9fd8]/30 rounded-2xl p-10 flex flex-col items-center gap-8 hover:border-[#a8d5f7]/60 hover:bg-[#0f1420]/80 transition-all duration-500 group"
            variants={cardVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
          >
            <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
              {message.emoji}
            </div>
            <p className="text-center text-lg md:text-xl font-light leading-relaxed text-[#e8e8f0]">
              {message.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
