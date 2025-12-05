"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          required
          className="w-full px-6 py-4 card-bg bg-white border-2 border-[var(--accent-blue)]/20 focus:border-[var(--accent-blue)] outline-none transition-all duration-300 rounded-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
        <motion.label
          animate={{
            y: focusedField === 'name' || formData.name ? -40 : 0,
            scale: focusedField === 'name' || formData.name ? 0.85 : 1,
            color: focusedField === 'name' ? 'var(--accent-blue)' : 'var(--text-light)'
          }}
          className="absolute left-6 top-4 pointer-events-none origin-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Your Name
        </motion.label>
      </div>

      {/* Email Field */}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          required
          className="w-full px-6 py-4 card-bg bg-white border-2 border-[var(--accent-blue)]/20 focus:border-[var(--accent-blue)] outline-none transition-all duration-300 rounded-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
        <motion.label
          animate={{
            y: focusedField === 'email' || formData.email ? -40 : 0,
            scale: focusedField === 'email' || formData.email ? 0.85 : 1,
            color: focusedField === 'email' ? 'var(--accent-blue)' : 'var(--text-light)'
          }}
          className="absolute left-6 top-4 pointer-events-none origin-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Email Address
        </motion.label>
      </div>

      {/* Company Field */}
      <div className="relative">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onFocus={() => setFocusedField('company')}
          onBlur={() => setFocusedField(null)}
          className="w-full px-6 py-4 card-bg bg-white border-2 border-[var(--accent-blue)]/20 focus:border-[var(--accent-blue)] outline-none transition-all duration-300 rounded-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
        <motion.label
          animate={{
            y: focusedField === 'company' || formData.company ? -40 : 0,
            scale: focusedField === 'company' || formData.company ? 0.85 : 1,
            color: focusedField === 'company' ? 'var(--accent-blue)' : 'var(--text-light)'
          }}
          className="absolute left-6 top-4 pointer-events-none origin-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Company (Optional)
        </motion.label>
      </div>

      {/* Message Field */}
      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          required
          rows={5}
          className="w-full px-6 py-4 card-bg bg-white border-2 border-[var(--accent-blue)]/20 focus:border-[var(--accent-blue)] outline-none transition-all duration-300 rounded-2xl resize-none"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
        <motion.label
          animate={{
            y: focusedField === 'message' || formData.message ? -40 : 0,
            scale: focusedField === 'message' || formData.message ? 0.85 : 1,
            color: focusedField === 'message' ? 'var(--accent-blue)' : 'var(--text-light)'
          }}
          className="absolute left-6 top-4 pointer-events-none origin-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Your Message
        </motion.label>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 soft-shadow hover:soft-shadow-lg"
        style={{
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-teal))',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        Send Message
        <SendIcon size={20} />
      </motion.button>
    </form>
  );
}
