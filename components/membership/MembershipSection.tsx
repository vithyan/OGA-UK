'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Crown, Users, Calendar, Mail, Globe, Star, Heart } from 'lucide-react';
import { membershipTiers } from '@/content/seed';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Users,
    title: 'Global Network',
    description: 'Connect with accomplished women across continents'
  },
  {
    icon: Calendar,
    title: 'Exclusive Events',
    description: 'Priority access to networking and social gatherings'
  },
  {
    icon: Mail,
    title: 'Monthly Updates',
    description: 'Stay informed with our newsletter and community news'
  },
  {
    icon: Globe,
    title: 'International Chapters',
    description: 'Access to OGA chapters worldwide'
  },
  {
    icon: Star,
    title: 'Mentorship Programs',
    description: 'Give back and receive guidance from experienced professionals'
  },
  {
    icon: Heart,
    title: 'Legacy Projects',
    description: 'Participate in meaningful community initiatives'
  }
];

export function MembershipSection() {
  const [activeTab, setActiveTab] = useState('benefits');

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
            Join Our Sisterhood
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Become part of a distinguished community of women who dare to do right and dare to be true.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-1 flex space-x-1">
            {['benefits', 'pricing', 'register'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-lg transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-yellow-400 text-black font-semibold'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-12">
              Why Join the OGA?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="text-center h-full">
                      <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-yellow-400" />
                      </div>
                      <h3 className="text-white font-serif font-semibold text-lg mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {benefit.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-12">
              Membership Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {membershipTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Crown size={16} />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  <GlassCard className={`text-center h-full ${tier.popular ? 'border-yellow-400/50' : ''}`}>
                    <h3 className="text-white font-serif font-bold text-2xl mb-2">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-yellow-400">
                        {tier.currency}{tier.price}
                      </span>
                      <span className="text-gray-300 text-sm ml-2">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-6">
                      {tier.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={tier.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      Choose {tier.name}
                    </Button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Register Tab */}
        {activeTab === 'register' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl mx-auto">
              <GlassCard className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-8">
                  Registration Form
                </h2>
                <div className="text-center text-gray-300 py-12">
                  <Users className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-4">Registration System</h3>
                  <p className="mb-6">
                    Our comprehensive membership registration system will include:
                  </p>
                  <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
                    <li>• Personal information and graduation year</li>
                    <li>• Professional details and achievements</li>
                    <li>• Membership tier selection</li>
                    <li>• Payment processing integration</li>
                    <li>• Email verification and welcome process</li>
                  </ul>
                  <Button size="lg">
                    Get Started
                  </Button>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}