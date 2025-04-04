import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Learning',
      links: [
        { name: 'Learning Paths', href: '/learning-paths' },
        { name: 'Courses', href: '/courses' },
        { name: 'Mentorship', href: '/mentorship' },
        { name: 'Projects', href: '/projects' },
        { name: 'Community', href: '/community' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Help Center', href: '/help' },
        { name: 'Partners', href: '/partners' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-white font-heading font-bold text-2xl">
                SKILL<span className="text-accent-400">BRIDGE</span>
              </span>
            </Link>
            <p className="text-dark-300 mb-4 max-w-xs">
              Bridging the skill gap in education through personalized, industry-aligned learning journeys.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 my-8"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            &copy; {currentYear} SKILL BRIDGE. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-dark-400 hover:text-primary-400 transition-colors text-sm mx-3"
            >
              Sitemap
            </a>
            <a
              href="#"
              className="text-dark-400 hover:text-primary-400 transition-colors text-sm mx-3"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;