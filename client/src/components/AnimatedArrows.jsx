import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedArrows = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 flex items-center justify-center">
      {/* Left to Right Arrows */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`horizontal-${index}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: [0, 50, 100, 150, 200],
              opacity: [0, 1, 1, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: index * 0.3,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="text-blue-500"
          >
            <ArrowRight className="h-6 w-6" />
          </motion.div>
        ))}
      </div>

      {/* Circular Center with Clockwise Arrows */}
      <div className="relative w-64 h-64 rounded-full border-4 border-blue-200 bg-white shadow-lg flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">AI Processing</h3>
          <p className="text-gray-600 text-sm">Real-time Analysis</p>
        </div>

        {/* Clockwise rotating arrows around the circle */}
        {[...Array(8)].map((_, index) => {
          const angle = (index * 45) - 90; // Start from top and go clockwise
          const radius = 140;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={`circular-${index}`}
              className="absolute text-teal-500"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`
              }}
              animate={{
                rotate: [angle + 90, angle + 450] // 360 degrees clockwise rotation
              }}
              transition={{
                duration: 4,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          );
        })}

        {/* Pulse effect for center circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-blue-300"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Data Flow Indicators */}
      <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium"
        >
          Input Documents
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-1/4 transform translate-x-1/2">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium"
        >
          Extracted Data
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedArrows; 