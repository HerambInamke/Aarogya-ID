import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Store',
    description: 'Effortlessly organize medical records with one click',
    icon: <span className="inline-block w-8 h-8 bg-blue-100 rounded-full" />,
  },
  {
    title: 'We Do The Work',
    description: 'Let technology seamlessly manage backend tasks',
    icon: <span className="inline-block w-8 h-8 bg-blue-100 rounded-full" />,
  },
  {
    title: 'Get Timeline',
    description: 'Organize medical records effortlessly with timeline',
    icon: <span className="inline-block w-8 h-8 bg-blue-100 rounded-full" />,
  },
];

const FeatureCards = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <motion.div
          key={feature.title}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.12)' }}
          className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center shadow-sm transition-all cursor-pointer"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeatureCards;