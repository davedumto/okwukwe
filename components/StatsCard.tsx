"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StatsCardProps {
  label: string;
  value: string;
  index: number;
}

export function StatsCard({ label, value, index }: StatsCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-bg p-6 soft-shadow hover:soft-shadow-lg transition-all duration-300"
    >
      <div
        className="text-sm text-[var(--text-light)] mb-2"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {label}
      </div>
      <div
        className="text-2xl font-bold text-[var(--text-primary)]"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        {value}
      </div>
    </motion.div>
  );
}
