'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Full Stack Developer',
    company: 'TechNova Solutions',
    image: '/images/testimonials/testimonial-1.jpg',
    quote: 'SKILL BRIDGE transformed my career. The domain-based approach gave me a complete understanding of web development, not just fragments of knowledge. Within 4 months of completing my training, I secured a job with a 70% higher salary.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Data Scientist',
    company: 'Analytics Insight',
    image: '/images/testimonials/testimonial-2.jpg',
    quote: 'As someone from a tier-3 city, I never had access to quality tech education. SKILL BRIDGE's hybrid model allowed me to learn from industry experts without relocating. Their personalized learning path helped me transition from a non-tech background to data science seamlessly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Digital Marketing Specialist',
    company: 'Global Reach Media',
    image: '/images/testimonials/testimonial-3.jpg',
    quote: 'The mentorship I received at SKILL BRIDGE was invaluable. My mentor guided me through real-world marketing challenges and helped me build a portfolio that actually impressed employers. The 1-on-1 sessions made all the difference in my learning journey.',
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            What Our <span className="text-gold-500">Students</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our alumni who have successfully transformed their careers through our domain-based learning approach
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 text-gold-500/10">
            <Quote size={80} />
          </div>
          
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                display: activeIndex === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="bg-obsidian-800 rounded-xl p-8 md:p-10 shadow-xl border border-gold-500/10 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-obsidian-700 flex items-center justify-center text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gold-500">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
              
              <div className="flex justify-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-2xl ${i < testimonial.rating ? 'text-gold-500' : 'text-gray-600'}`}>
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-gold-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;