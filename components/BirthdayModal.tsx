'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface BirthdayModalProps {
  onClose: () => void;
}

export default function BirthdayModal({ onClose }: BirthdayModalProps) {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 300 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="relative bg-gradient-to-br from-[#0f1420] via-[#1a2a40] to-[#0f1420] border border-[#4a9fd8]/50 rounded-3xl p-8 md:p-16 max-w-2xl w-full shadow-2xl shadow-[#4a9fd8]/20"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#7a5fb8] hover:text-[#a8d5f7] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* Content */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-light text-[#a8d5f7]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Happy Birthday, Eya.
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-[#e8e8f0] leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              May this year be softer, brighter, and closer to everything you deserve.
            </motion.p>

            <motion.div
              className="pt-6 border-t border-[#4a9fd8]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-base text-[#7a5fb8] font-light pt-6">
                Here{'\''}s to another year of growth, dreaming bigger, and becoming more of who you were meant to be.
              </p>
            </motion.div>

            {/* Decorative stars */}
            <motion.div
              className="flex justify-center gap-6 text-4xl pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
              >
                ✨
              </motion.span>
              <motion.span
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              >
                🌙
              </motion.span>
              <motion.span
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
              >
                💫
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
