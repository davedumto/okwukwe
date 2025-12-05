"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '@/lib/data/portfolio';
import { PortfolioCard } from '@/components/PortfolioCard';
import { GalleryViewer } from '@/components/GalleryViewer';
import { StarIcon } from 'lucide-react';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('all');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const categories = ['all', 'editorial', 'commercial', 'catalog', 'lifestyle'];
  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  const allImages = portfolioItems.map(item => item.image);

  const openGallery = (index: number) => {
    const item = filteredItems[index];
    const globalIndex = portfolioItems.findIndex(p => p.id === item.id);
    setGalleryIndex(globalIndex);
    setGalleryOpen(true);
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <StarIcon className="text-[var(--accent-blue)]" size={40} />
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--text-primary)]"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Okwukwe&apos;s <span className="text-gradient">Portfolio</span>
          </h1>
          <p
            className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A collection of work across editorial, commercial, catalog, and
            lifestyle projects
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'text-white soft-shadow-lg'
                  : 'bg-white text-[var(--text-primary)] soft-shadow hover:soft-shadow-lg'
              }`}
              style={{
                background: filter === category
                  ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-teal))'
                  : 'white',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => openGallery(index)}
            />
          ))}
        </motion.div>
      </div>

      <GalleryViewer
        images={allImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryIndex}
      />
    </div>
  );
}
