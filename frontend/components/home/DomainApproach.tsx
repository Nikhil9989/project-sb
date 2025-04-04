'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaChartLine, FaCode } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const progressSteps = [
  {
    level: '10%',
    name: 'Foundation',
    description: 'Build a solid understanding of core concepts and fundamental principles',
    icon: <FaLightbulb />,
    color: 'from-primary-100 to-primary-200 text-primary-700',
  },
  {
    level: '30%',
    name: 'Application',
    description: 'Apply concepts to solve basic problems and develop initial skills',
    icon: <FaCode />,
    color: 'from-primary-200 to-primary-300 text-primary-800',
  },
  {
    level: '50%',
    name: 'Integration',
    description: 'Connect multiple skills to build more complex solutions',
    icon: <FaUsers />,
    color: 'from-primary-300 to-primary-400 text-primary-900',
  },
  {
    level: '70%',
    name: 'Mastery',
    description: 'Develop advanced applications and industry-standard projects',
    icon: <FaRocket />,
    color: 'from-primary-400 to-primary-500 text-white',
  },
  {
    level: '90%',
    name: 'Excellence',
    description: 'Create innovative solutions and lead complex projects',
    icon: <FaChartLine />,
    color: 'from-primary-500 to-primary-600 text-white',
  },
];

const DomainApproach = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Domain-Based Learning Approach</h2>
          <p className="text-lg text-dark-600">
            Unlike traditional course-based programs that teach skills in isolation, our domain-based 
            workshops deliver comprehensive understanding of interrelated skills within professional domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Progress Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-100 to-primary-600 rounded-full hidden md:block"></div>
            
            {/* Steps */}
            {progressSteps.map((step, index) => (
              <motion.div
                key={step.level}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 relative"
              >
                {/* Step Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl z-10`}>
                  {step.icon}
                </div>
                
                {/* Step Content */}
                <div className="bg-white md:ml-4 p-4 rounded-lg shadow-sm border border-dark-100 flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{step.name}</h3>
                    <span className="text-lg font-semibold text-primary-600">{step.level}</span>
                  </div>
                  <p className="text-dark-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-accent-50 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-accent-700">
              Why Domain-Based Learning Works
            </h3>
            <p className="text-dark-700 mb-4">
              Real-world careers require proficiency in multiple interconnected skills simultaneously. 
              Our approach ensures you develop holistic expertise rather than disconnected knowledge.
            </p>
            <p className="text-dark-700 italic">
              "The domain-based approach helped me understand how different technologies work together in real projects. 
              It's completely different from learning individual subjects in isolation."
            </p>
            <p className="mt-2 font-semibold">— Riya S., Full-Stack Developer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainApproach;