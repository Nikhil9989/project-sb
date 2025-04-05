'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSectionImproved = () => {
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
            Get in <span className="text-gold-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our programs? We're here to help you on your learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-start">
              <MapPin className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Address</h4>
                <p className="text-gray-400">123 Education Street, Bangalore, Karnataka 560001</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-gray-400">info@skillbridge.edu</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-bold mb-3">Office Hours</h4>
              <p className="text-gray-400">Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="bg-obsidian-800 rounded-xl p-8 shadow-xl border border-gold-500/10">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-obsidian-900 border border-obsidian-700 text-white rounded-lg focus:ring-gold-500 focus:border-gold-500 block w-full p-3"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-obsidian-900 border border-obsidian-700 text-white rounded-lg focus:ring-gold-500 focus:border-gold-500 block w-full p-3"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="bg-obsidian-900 border border-obsidian-700 text-white rounded-lg focus:ring-gold-500 focus:border-gold-500 block w-full p-3"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="bg-obsidian-900 border border-obsidian-700 text-white rounded-lg focus:ring-gold-500 focus:border-gold-500 block w-full p-3"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-gold px-6 py-3 font-medium w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionImproved;