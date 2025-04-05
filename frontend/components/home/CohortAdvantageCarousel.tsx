'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Star, Clock, LightbulbIcon, Briefcase } from 'lucide-react';

const advantages = [
  {
    id: 1,
    title: 'Peer Learning',
    description: 'Learn alongside motivated peers with different perspectives to enhance understanding and collaboration.',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'Structured Timeline',
    description: 'Follow a well-defined learning path with milestone-based progress to keep you on track toward mastery.',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 3,
    title: 'Accountability',
    description: 'Stay motivated with regular check-ins, deadlines, and support from mentors and peers.',
    icon: <Star className="w-6 h-6" />,
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 4,
    title: 'Collaborative Learning',
    description: 'Engage in group projects that mimic real workplace environments and develop teamwork skills.',
    icon: <LightbulbIcon className="w-6 h-6" />,
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 5,
    title: 'Industry Exposure',
    description: 'Get direct interaction with hiring managers and industry experts throughout your learning journey.',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-indigo-500/20 to-violet-500/20',
  },
];

const CohortAdvantageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === advantages.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? advantages.length - 1 : prevIndex - 1));
  };
  
  // Auto slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const currentAdvantage = advantages[currentIndex];
  
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
          <span className="cohort-badge mb-4">COHORT-BASED LEARNING</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            The <span className="text-gold-500">Cohort Advantage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our cohort-based approach enhances learning through community, structure, and accountability
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-obsidian-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gold-500/10 relative overflow-hidden min-h-[300px]">
            {/* Background gradient */}
            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${currentAdvantage.color} opacity-20 rounded-2xl`}></div>
            
            <motion.div
              key={currentAdvantage.id}
              initial={{ 
                opacity: 0, 
                x: direction > 0 ? 100 : -100 
              }}
              animate={{ 
                opacity: 1, 
                x: 0 
              }}
              exit={{ 
                opacity: 0, 
                x: direction > 0 ? -100 : 100 
              }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                  {currentAdvantage.icon}
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">{currentAdvantage.title}</h3>
                  <p className="text-gray-300 text-lg">{currentAdvantage.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-obsidian-800 border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-obsidian-700 transition-colors focus:outline-none"
              aria-label="Previous advantage"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-obsidian-800 border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-obsidian-700 transition-colors focus:outline-none"
              aria-label="Next advantage"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-gold-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to advantage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CohortAdvantageCarousel;