'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-12 bg-obsidian-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-obsidian-800 to-obsidian-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-gold-500/20 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-repeat bg-[length:100px_100px]"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
                Join Our Next Cohort and Transform Your Career
              </h2>
              <p className="text-gray-300 mb-6">
                Application deadline for the next batch is April 30, 2025. Limited seats available.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/enroll"
                  className="btn btn-gold px-8 py-3 font-medium inline-flex items-center group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/learning-paths"
                  className="btn btn-outline-gold px-8 py-3 font-medium"
                >
                  Explore Domains
                </Link>
              </div>
            </div>
            
            <div className="bg-obsidian-800/80 backdrop-blur-sm rounded-xl p-6 border border-gold-500/10 w-full md:w-auto">
              <h3 className="text-xl font-bold mb-4 text-center">Next Cohort Details</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                  <span>Batch Starts: May 15, 2025</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                  <span>Duration: 3-6 months</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                  <span>Available Seats: 24</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 mr-3"></div>
                  <span>Flexible Payment Options</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;