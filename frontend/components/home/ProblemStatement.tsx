'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUserGraduate, FaIndustry, FaLaptopCode } from 'react-icons/fa';

const problemStatements = [
  {
    icon: <FaChalkboardTeacher className="h-8 w-8" />,
    title: 'Fragmented Learning Ecosystem',
    description:
      'The Indian education system teaches subjects in isolation rather than fostering interdisciplinary expertise needed for real-world careers.',
  },
  {
    icon: <FaUserGraduate className="h-8 w-8" />,
    title: 'Theory-Practice Divide',
    description:
      'Only 25% of engineering graduates are considered employment-ready without additional training, creating a massive retraining burden on industries.',
  },
  {
    icon: <FaIndustry className="h-8 w-8" />,
    title: 'Industry Participation Deficit',
    description:
      'Despite being the ultimate beneficiaries of skilled talent, industries remain reluctant to invest significantly in curriculum development or training partnerships.',
  },
  {
    icon: <FaLaptopCode className="h-8 w-8" />,
    title: 'Unstructured Learning Resources',
    description:
      'Without clear learning paths connecting theoretical concepts to practical implementation, even motivated learners struggle to develop job-ready skills.',
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

const ProblemStatement = () => {
  return (
    <section className="bg-dark-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Skill Gap Crisis in Indian Education</h2>
          <p className="text-lg text-dark-600">
            Despite improvements, only 51.25% of Indian youth possess the necessary skills for employment, with stark disparities across regions and genders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemStatements.map((problem, index) => (
            <motion.div
              key={problem.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="bg-white rounded-lg shadow-card p-6 flex"
            >
              <div className="mr-4 text-primary-600 mt-1">{problem.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-dark-600">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary-700">
              The Impact of Inaction
            </h3>
            <p className="text-dark-700 mb-6">
              McKinsey Global Institute estimates that India could lose up to $1.97 trillion in GDP growth by 2030 due to skill mismatches. 
              This multifaceted crisis requires a comprehensive solution that addresses both structural and pedagogical challenges.
            </p>
            <div className="inline-block border-t-2 border-primary-200 w-16"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;