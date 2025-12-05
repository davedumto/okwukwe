"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { portfolioItems, modelInfo } from '@/lib/data/portfolio';
import { PortfolioCard } from '@/components/PortfolioCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRightIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { GalleryViewer } from '@/components/GalleryViewer';

export default function HomePage() {
  const {
    ref: featuredRef,
    isVisible: featuredVisible
  } = useScrollAnimation();
  const {
    ref: aboutRef,
    isVisible: aboutVisible
  } = useScrollAnimation();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const featuredWork = portfolioItems.filter(item => item.featured);
  const allImages = portfolioItems.map(item => item.image);

  const openGallery = (index: number) => {
    const globalIndex = portfolioItems.findIndex(item => item.id === featuredWork[index].id);
    setGalleryIndex(globalIndex);
    setGalleryOpen(true);
  };

  return (
    <div>
      <Hero />

      {/* Featured Work */}
      <section ref={featuredRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuredVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <StarIcon className="text-[var(--accent-blue)]" size={32} />
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Recent <span className="text-gradient">Work</span>
            </h2>
            <p
              className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Some of Okwukwe&apos;s favorite recent projects and photoshoots
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredWork.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => openGallery(index)}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full font-semibold text-[var(--text-primary)] soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              View All Work
              <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#E3F2FD] to-[#E0F7F4]">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text-primary)]"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              About <span className="text-gradient">Okwukwe</span>
            </h2>
            <p
              className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {modelInfo.bio}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full font-semibold text-[var(--text-primary)] soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Learn More
              <ArrowRightIcon size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <GalleryViewer
        images={allImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryIndex}
      />
    </div>
  );
}
