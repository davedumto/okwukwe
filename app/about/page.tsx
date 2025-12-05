"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { modelInfo } from '@/lib/data/portfolio';
import { StatsCard } from '@/components/StatsCard';
import { RocketIcon, StarIcon, SmileIcon } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const { ref: bioRef, isVisible: bioVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollAnimation();

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <RocketIcon className="text-[var(--accent-blue)] mx-auto" size={48} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--text-primary)]"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            About <span className="text-gradient">Okwukwe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[var(--text-secondary)] leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {modelInfo.tagline}
          </motion.p>
        </div>
      </section>

      {/* Bio */}
      <section ref={bioRef} className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bioVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-bg p-12 md:p-16 soft-shadow"
          >
            <div className="flex items-center gap-2 mb-6">
              <StarIcon className="text-[var(--accent-blue)]" size={28} />
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Meet Okwukwe
              </h2>
            </div>
            <p
              className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {modelInfo.bio}
            </p>
            <div className="pt-6 border-t border-[var(--accent-blue)]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span
                    className="text-[var(--text-light)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Represented by
                  </span>
                  <div
                    className="font-semibold mt-1 text-[var(--text-primary)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {modelInfo.representation.agency}
                  </div>
                </div>
                <div>
                  <span
                    className="text-[var(--text-light)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Based in
                  </span>
                  <div
                    className="font-semibold mt-1 text-[var(--text-primary)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {modelInfo.representation.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={statsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--text-primary)]"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Details
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatsCard label="Age" value={modelInfo.stats.age} index={0} />
            <StatsCard label="Height" value={modelInfo.stats.height} index={1} />
            <StatsCard label="Hair" value={modelInfo.stats.hair} index={2} />
            <StatsCard label="Eyes" value={modelInfo.stats.eyes} index={3} />
            <StatsCard label="Clothing" value={modelInfo.stats.clothing} index={4} />
            <StatsCard label="Shoes" value={modelInfo.stats.shoes} index={5} />
          </div>
        </div>
      </section>

      {/* Interests */}
      <section ref={interestsRef} className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={interestsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-bg p-12 md:p-16 soft-shadow"
          >
            <div className="flex items-center gap-2 mb-8">
              <SmileIcon className="text-[var(--accent-blue)]" size={28} />
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Okwukwe Loves
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modelInfo.interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={interestsVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-teal)] mt-2 flex-shrink-0" />
                  <span
                    className="text-[var(--text-secondary)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {interest}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section ref={experienceRef} className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-bg p-12 md:p-16 soft-shadow"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modelInfo.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={experienceVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-teal)] mt-2 flex-shrink-0" />
                  <span
                    className="text-[var(--text-secondary)]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {exp}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-bg p-12 soft-shadow"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Let&apos;s Work Together!
            </h2>
            <p
              className="text-[var(--text-secondary)] text-lg mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Interested in booking Okwukwe for your next project? We&apos;d love to hear
              from you!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 soft-shadow hover:soft-shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-teal))',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
