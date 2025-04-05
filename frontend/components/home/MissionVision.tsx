'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-20 bg-obsidian-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-obsidian-800 rounded-xl p-8 shadow-xl border border-gold-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/20 to-transparent rounded-bl-3xl"></div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Our Mission</h3>
            <p className="text-gray-300 mb-4 relative z-10">
              To bridge the gap between theoretical education and industry demands by providing structured, domain-based learning that transforms students into job-ready professionals.
            </p>
            <p className="text-gray-300 relative z-10">
              We believe in making quality education accessible to all, especially in tier-2 and tier-3 cities where resources are often limited but talent is abundant.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-obsidian-800 rounded-xl p-8 shadow-xl border border-gold-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/20 to-transparent rounded-bl-3xl"></div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Our Vision</h3>
            <p className="text-gray-300 mb-4 relative z-10">
              To create a world where every student, regardless of their geographical location or socioeconomic background, has access to industry-relevant education that enables them to thrive in their careers.
            </p>
            <p className="text-gray-300 relative z-10">
              We envision a future where the gap between education and industry is seamlessly bridged, creating a workforce that is adaptable, skilled, and ready for the challenges of tomorrow.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-6 font-heading">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-obsidian-800 rounded-lg p-6 border border-gold-500/10">
              <h4 className="text-lg font-bold mb-3">Excellence</h4>
              <p className="text-gray-400 text-sm">We strive for excellence in every aspect of our educational approach.</p>
            </div>
            <div className="bg-obsidian-800 rounded-lg p-6 border border-gold-500/10">
              <h4 className="text-lg font-bold mb-3">Inclusion</h4>
              <p className="text-gray-400 text-sm">We create learning environments where everyone feels welcome and valued.</p>
            </div>
            <div className="bg-obsidian-800 rounded-lg p-6 border border-gold-500/10">
              <h4 className="text-lg font-bold mb-3">Innovation</h4>
              <p className="text-gray-400 text-sm">We constantly innovate our teaching methods to improve learning outcomes.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;