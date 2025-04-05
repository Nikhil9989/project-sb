'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DomainApproach = () => {
  const domains = [
    {
      title: 'Web Development',
      description: 'Learn full-stack web development from frontend to backend with progressive skill acquisition.',
      levels: ['HTML/CSS Fundamentals', 'JavaScript & React', 'Backend with Node.js', 'Database Integration', 'DevOps & Deployment'],
      icon: '🌐',
    },
    {
      title: 'Data Science',
      description: 'Master data analysis, visualization, and machine learning for real-world business applications.',
      levels: ['Data Analysis Basics', 'Statistics & Visualization', 'Machine Learning Foundations', 'Deep Learning', 'MLOps & Deployment'],
      icon: '📊',
    },
    {
      title: 'Digital Marketing',
      description: 'Build expertise in digital marketing strategy, analytics, and campaign optimization.',
      levels: ['Marketing Fundamentals', 'SEO & Content Strategy', 'Paid Advertising', 'Analytics & Optimization', 'Full-funnel Strategy'],
      icon: '📱',
    },
  ];

  return (
    <section className="py-20 bg-obsidian-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Our <span className="text-gold-500">Domain-Based</span> Approach
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We build skills incrementally through practical, industry-aligned pathways instead of fragmented courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-obsidian-800 rounded-xl p-6 shadow-xl border border-gold-500/10 hover:border-gold-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">{domain.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-3">{domain.title}</h3>
              <p className="text-gray-400 mb-6">{domain.description}</p>
              
              <div className="space-y-2">
                {domain.levels.map((level, i) => (
                  <div key={level} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${i === 0 ? 'bg-gold-400' : i < 3 ? 'bg-gold-500/70' : 'bg-gold-600/50'}`}></div>
                    <span className="text-sm text-gray-300">{level}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href={`/domains/${domain.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gold-500 hover:text-gold-400 font-medium text-sm flex items-center"
                >
                  Explore Path
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/learning-paths"
            className="btn btn-gold px-8 py-3 font-medium inline-flex items-center"
          >
            View All Learning Paths
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainApproach;