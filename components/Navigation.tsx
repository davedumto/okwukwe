"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon, StarIcon } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[var(--accent-blue)]/20 soft-shadow"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <StarIcon className="text-[var(--accent-blue)]" size={24} />
          <span
            className="text-2xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Okwukwe
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.path}
              href={link.path}
              className="relative text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {link.label}
              {pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-teal))'
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[var(--text-primary)]"
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-[var(--accent-blue)]/20"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(link => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-[var(--accent-blue)]'
                    : 'text-[var(--text-secondary)]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
