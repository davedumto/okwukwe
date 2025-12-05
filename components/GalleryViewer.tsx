"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface GalleryViewerProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function GalleryViewer({
  images,
  isOpen,
  onClose,
  initialIndex = 0
}: GalleryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[var(--text-primary)] hover:text-[var(--accent-coral)] transition-colors z-10 p-2 rounded-full bg-white soft-shadow"
          >
            <XIcon size={32} />
          </button>

          <button
            onClick={e => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 text-[var(--text-primary)] hover:text-[var(--accent-coral)] transition-colors z-10 p-3 rounded-full bg-white soft-shadow"
          >
            <ChevronLeftIcon size={40} />
          </button>

          <button
            onClick={e => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 text-[var(--text-primary)] hover:text-[var(--accent-coral)] transition-colors z-10 p-3 rounded-full bg-white soft-shadow"
          >
            <ChevronRightIcon size={40} />
          </button>

          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-3xl soft-shadow-lg"
            onClick={e => e.stopPropagation()}
          />

          <div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[var(--text-secondary)] text-sm px-4 py-2 rounded-full bg-white soft-shadow"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
