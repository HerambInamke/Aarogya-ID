import React from 'react';
import { motion } from 'framer-motion';
import AnimatedDiagram from './AnimatedDiagram';

const HeroSection = () => (
  <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
      >
        your health at your fingertips
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 text-center mb-10 max-w-2xl"
      >
        empower your health journey with seamless care
      </motion.p>
      <AnimatedDiagram />
    </div>
  </section>
);

export default HeroSection;