'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { siteConfig } from '@/content/seed';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
    description: 'Call during business hours'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: siteConfig.contact.whatsapp,
    link: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\s+/g, '')}`,
    description: 'Quick messages and updates'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: siteConfig.contact.address,
    link: '#',
    description: 'Visit our office'
  }
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions, want to get involved, or simply want to connect with fellow sisters, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 hover:scale-105 transition-transform">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {method.description}
                        </p>
                        <a
                          href={method.link}
                          className="text-yellow-400 hover:text-yellow-300 transition-colors break-all"
                          target={method.link.startsWith('http') ? '_blank' : undefined}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-white font-semibold text-lg">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((hours, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-300">{hours.day}</span>
                      <span className="text-yellow-400">{hours.hours}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="events">Events & Activities</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donations">Donations & Fundraising</option>
                    <option value="alumni">Alumni Connections</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-8">
            Visit Our Office
          </h2>
          <GlassCard className="p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-yellow-400" />
              <h3 className="text-white font-semibold text-lg">
                Interactive Map
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              An interactive map showing our office location will be integrated here using Leaflet or Google Maps.
            </p>
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-lg p-12 border border-yellow-400/20">
              <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <p className="text-white font-medium mb-2">
                {siteConfig.contact.address}
              </p>
              <p className="text-gray-400 text-sm">
                Map integration will show exact location with directions
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}