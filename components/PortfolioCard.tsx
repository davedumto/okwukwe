"use client";

import { motion } from 'framer-motion';
import { PortfolioItem } from '@/lib/data/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}

export function PortfolioCard({ item, index, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-white soft-shadow hover:soft-shadow-lg transition-all duration-300">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
