"use client";

import { motion } from 'framer-motion';
import { MailIcon, InstagramIcon, RocketIcon } from 'lucide-react';
import { modelInfo } from '@/lib/data/portfolio';

const CONTACT_EMAIL = "okwukwemodelling@gmail.com";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <RocketIcon className="text-[var(--accent-blue)]" size={40} />
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--text-primary)]"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p
            className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Interested in working with Okwukwe? We&apos;d love to hear from you!
          </p>

          {/* Email Button */}
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 soft-shadow hover:soft-shadow-lg"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-teal))',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <MailIcon size={24} />
            Send us an Email
          </motion.a>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-bg p-8 soft-shadow"
          >
            <h3
              className="text-2xl font-bold mb-4 text-[var(--text-primary)]"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Location
            </h3>
            <p
              className="text-[var(--text-secondary)] text-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {modelInfo.representation.location}
            </p>
          </motion.div>

          {/* Follow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-bg p-8 soft-shadow"
          >
            <h3
              className="text-2xl font-bold mb-4 text-[var(--text-primary)]"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Follow Okwukwe
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-110 text-[var(--accent-blue)]"
              >
                <InstagramIcon size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="card-bg p-6 soft-shadow mt-8 text-center"
        >
          <p
            className="text-sm text-[var(--text-secondary)] leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We typically respond to inquiries within 24-48 hours. Thank you for your interest!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
