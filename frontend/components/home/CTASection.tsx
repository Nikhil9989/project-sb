'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-obsidian-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-gold-500/10 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-gold-500/5 to-transparent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 max-w-4xl"
          >
            Ready to <span className="text-gold-500">Bridge the Gap</span> Between Education and Industry?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-10 max-w-3xl"
          >
            Join thousands of students who have transformed their careers through our domain-based learning approach.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Link
              href="/enroll"
              className="btn btn-gold px-10 py-4 font-medium text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              {/* Gold shimmer effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/about"
              className="btn btn-outline-gold px-10 py-4 font-medium text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;