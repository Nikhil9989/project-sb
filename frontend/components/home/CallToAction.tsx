'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Bridge the Skill Gap?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are transforming their careers through our domain-based learning approach. Take the first step toward becoming industry-ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="btn px-8 py-4 text-base md:text-lg font-medium bg-white text-primary-600 hover:bg-white/90 transition-colors"
              >
                Start Your Journey
              </Link>
              
              <Link
                href="/contact"
                className="btn px-8 py-4 text-base md:text-lg font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-white/80 text-sm"
          >
            <p>No credit card required. Start with a free consultation.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;