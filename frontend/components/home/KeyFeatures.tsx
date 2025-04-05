'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Users, 
  Briefcase, 
  LineChart, 
  Trophy 
} from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      title: 'Personalized Learning Paths',
      description: 'AI-powered skill assessment creates a customized roadmap based on your strengths and career goals.',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: 'Industry-Aligned Projects',
      description: 'Build real-world projects that solve actual business problems and showcase your skills to employers.',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'Expert Mentorship',
      description: '1-on-1 guidance from industry professionals who provide personalized feedback and career advice.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Incremental Skill Development',
      description: 'Progress from beginner to advanced through our structured 0% → 90% domain mastery framework.',
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: 'Placement Assistance',
      description: 'Resume optimization, interview preparation, and direct connections to our hiring partner network.',
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: 'Accelerated Career Growth',
      description: 'Gain the skills and confidence to advance your career in just 3-6 months with our intensive program.',
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-obsidian-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Why Choose <span className="text-gold-500">SKILL BRIDGE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our unique approach combines the best of personalized learning, expert guidance, and practical application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-obsidian-800 rounded-xl p-6 shadow-xl border border-gold-500/10 hover:border-gold-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6 text-gold-500">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-obsidian-800 rounded-xl p-8 shadow-xl border border-gold-500/20 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-heading mb-6">Ready to Transform Your Skills?</h3>
          <p className="text-gray-400 mb-8">
            Join our next cohort and start your journey towards mastering industry-relevant skills with expert guidance.
          </p>
          <a 
            href="/enroll"
            className="btn btn-gold px-8 py-3 font-medium inline-flex items-center"
          >
            Apply Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;