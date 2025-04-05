import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-obsidian-900 border-t border-obsidian-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6">SKILL<span className="text-gold-500">BRIDGE</span></h3>
            <p className="text-gray-400 mb-6">
              Transforming education with domain-based learning pathways that bridge the gap between theory and industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Learning Paths', 'Mentorship', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-gold-500 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Domains */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Our Domains</h3>
            <ul className="space-y-3">
              {['Web Development', 'Data Science', 'Digital Marketing', 'UX/UI Design', 'DevOps'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/domains/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-gold-500 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@skillbridge.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-obsidian-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SKILL BRIDGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;