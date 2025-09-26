'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { siteConfig } from '@/content/seed';
import { Button } from '@/components/ui/button';

const footerLinks = {
  about: [
    { name: 'Our History', href: '/about#history' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Mission', href: '/about#mission' },
    { name: 'Past Presidents', href: '/about#past-presidents' },
  ],
  community: [
    { name: 'Events', href: '/events' },
    { name: 'News', href: '/events#news' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/#testimonials' },
  ],
  support: [
    { name: 'Membership', href: '/membership' },
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/contact?subject=volunteer' },
    { name: 'Sponsor Events', href: '/contact?subject=sponsorship' },
  ],
  connect: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Join WhatsApp', href: `https://wa.me/${siteConfig.contact.whatsapp}` },
    { name: 'Newsletter', href: '/membership#newsletter' },
    { name: 'Member Portal', href: '/membership/login' },
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: siteConfig.social.facebook },
  { name: 'Instagram', icon: Instagram, href: siteConfig.social.instagram },
  { name: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin },
  { name: 'YouTube', icon: Youtube, href: siteConfig.social.youtube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-black font-bold text-xl font-serif">OGA</span>
              </div>
              <div>
                <div className="text-white font-serif text-lg font-bold">
                  Old Girls' Association
                </div>
                <div className="text-yellow-400 text-sm italic">
                  {siteConfig.motto}
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {siteConfig.tagline}. Connecting accomplished women across generations and continents.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-yellow-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-yellow-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-yellow-400" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-yellow-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/membership">
                <Heart size={16} className="mr-2" />
                Join Our Family
              </Link>
            </Button>
          </div>
        </div>

        {/* Social links and newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-white font-medium">Follow Us:</span>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors p-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-yellow-400 font-medium text-sm mb-1">
                Celebrating {siteConfig.anniversary} Years
              </p>
              <p className="text-gray-400 text-sm">
                {siteConfig.founded} - {siteConfig.currentYear}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Use</Link>
              </div>
            </div>
            <p className="text-center">
              Made with <Heart size={14} className="inline text-red-500 mx-1" /> for our sisterhood
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}