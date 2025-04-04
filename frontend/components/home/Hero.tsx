'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background Animation */}
      <div className="absolute inset-0 animated-gradient-bg opacity-10 z-0"></div>
      
      {/* Particle Animation (simulated with fixed divs) */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-500 opacity-20 animate-pulse-slow"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full inline-block mb-4 font-medium text-sm"
            >
              Revolutionizing Education in India
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 font-bold text-4xl sm:text-5xl md:text-6xl gradient-text"
            >
              Bridge the Gap Between <br className="hidden md:block" />
              <span className="text-primary-600">Education & Industry</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-dark-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              SKILL BRIDGE offers domain-based learning journeys that transform theoretical knowledge into practical, industry-ready expertise through personalized mentorship and project-based learning.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="/learning-paths"
                className="btn btn-primary px-8 py-3 text-base sm:text-lg"
              >
                Explore Learning Paths
              </Link>
              <Link 
                href="/about"
                className="btn btn-outline px-8 py-3 text-base sm:text-lg"
              >
                Learn More
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 flex items-center justify-center lg:justify-start text-sm text-dark-500"
            >
              <div className="flex -space-x-2 mr-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-dark-100 flex items-center justify-center"
                  >
                    <span className="text-xs font-medium">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <span>Joined by <strong>5000+</strong> learners across India</span>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 relative z-10">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative w-full h-[300px] sm:h-[400px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-200 to-accent-200">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎓</div>
                      <div className="text-primary-700 font-medium">Learning Platform Image</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent-100 rounded-lg -rotate-6 z-0"></div>
            <div className="absolute bottom-12 -left-4 w-8 h-8 bg-primary-200 rounded-lg rotate-12 z-0"></div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-100 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;