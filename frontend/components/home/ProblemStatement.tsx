'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-obsidian-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The <span className="text-gold-500">Skill Gap</span> Problem
            </h2>
            <p className="text-xl text-gray-400">
              Why traditional education fails to create industry-ready professionals
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-obsidian-800 rounded-xl p-8 shadow-xl border border-gold-500/10"
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Indian education system primarily focuses on teaching individual subjects and concepts in isolation rather than fostering an all-round, industry-grade skill set. As a result, students graduate with theoretical knowledge but lack the interdisciplinary expertise required to thrive in real-world industries.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              For instance, a career in web development demands proficiency in multiple technologies simultaneously—front-end and back-end development, databases, security, and deployment. However, the standard UGC syllabus, workshops, and training programs tend to focus on single technologies in a fragmented manner.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Reports indicate that in India, a laborer with no degree is often more likely to secure employment than a degree holder, highlighting the severity of the skill gap. The current system fails to address this gap effectively.
            </p>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="/about" 
                className="inline-flex items-center text-gold-500 hover:text-gold-400 font-medium transition-colors"
              >
                Learn more about the problem
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;