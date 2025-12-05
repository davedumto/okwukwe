"use client";

import { motion } from 'framer-motion';
import { ChevronDownIcon, RocketIcon } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero4.JPG"
          alt="Okwukwe"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50" />
        {/* Additional bottom gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[var(--accent-blue)]/30"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[var(--accent-teal)]/30"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-[var(--accent-orange)]/30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block mb-6"
          >
            <RocketIcon className="text-[var(--accent-blue)]" size={48} />
          </motion.div>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none text-white drop-shadow-lg"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Hi, I&apos;m
            <br />
            <span className="text-gradient drop-shadow-lg">Okwukwe!</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          6 years old • Child Model • Ready for adventure! 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-white/95 backdrop-blur-sm rounded-full font-semibold text-[var(--text-primary)] soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-teal))',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDownIcon className="text-white/80 drop-shadow-md" size={32} />
        </motion.div>
      </motion.div>
    </div>
  );
}
