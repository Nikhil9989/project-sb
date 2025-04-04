'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaProjectDiagram, 
  FaUserFriends, 
  FaLaptopCode, 
  FaChartLine, 
  FaComments 
} from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain className="h-10 w-10" />,
    title: 'AI-Powered Personalized Learning',
    description:
      'Customized learning paths adapt to your individual strengths, weaknesses, and career goals to optimize your learning journey.',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: <FaProjectDiagram className="h-10 w-10" />,
    title: 'Industry-Aligned Projects',
    description:
      'Work on real-world capstone projects that solve actual business problems, reviewed by hiring managers and industry leaders.',
    color: 'bg-secondary-50 text-secondary-600',
  },
  {
    icon: <FaUserFriends className="h-10 w-10" />,
    title: '1-on-1 Expert Mentorship',
    description:
      'Receive personalized guidance from industry professionals who provide feedback, career strategy, and technical support.',
    color: 'bg-accent-50 text-accent-600',
  },
  {
    icon: <FaLaptopCode className="h-10 w-10" />,
    title: 'Hybrid Learning Model',
    description:
      'Combine the flexibility of online learning with the support of in-person sessions at our partner institutions.',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: <FaChartLine className="h-10 w-10" />,
    title: 'Placement Assistance',
    description:
      'Get matched with relevant employers through our AI-driven job recommendations and network of hiring partners.',
    color: 'bg-secondary-50 text-secondary-600',
  },
  {
    icon: <FaComments className="h-10 w-10" />,
    title: 'Community-Driven Learning',
    description:
      'Collaborate with peers through code reviews, group projects, and knowledge sharing to enhance your learning experience.',
    color: 'bg-accent-50 text-accent-600',
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features of SKILL BRIDGE</h2>
          <p className="text-lg text-dark-600">
            Our comprehensive approach combines the best of expert guidance, peer collaboration, and AI-powered personalization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-card p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className={`${feature.color} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-dark-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/features"
            className="btn btn-primary px-8 py-3 text-base inline-flex items-center"
          >
            Explore All Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;