'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Target, TrendingUp, Users, Building, BookOpen, Award, CreditCard } from 'lucide-react';
import { projects } from '@/content/seed';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

const impactAreas = [
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Scholarships and educational support for deserving students',
    amount: 'Rs 150,000',
    impact: '15 students supported annually'
  },
  {
    icon: Building,
    title: 'Infrastructure',
    description: 'Improvements to school facilities and learning environments',
    amount: 'Rs 300,000',
    impact: 'New science lab and library expansion'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Support for families during challenging times',
    amount: 'Rs 75,000',
    impact: '25 families assisted during COVID'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Recognition and awards for outstanding achievements',
    amount: 'Rs 50,000',
    impact: 'Annual excellence awards program'
  }
];

const donationAmounts = [25, 50, 100, 250, 500, 1000];

export function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
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
            Support Our Mission
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your generous contributions help us continue our legacy of excellence and make a lasting impact on future generations.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-12">
            Current Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const progressPercentage = getProgressPercentage(project.raised, project.target);
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-8 h-8 text-yellow-400" />
                      <h3 className="text-white font-serif font-bold text-xl">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-yellow-400 font-semibold">
                          {project.currency}{project.raised.toLocaleString()} raised
                        </span>
                        <span className="text-gray-400">
                          {project.currency}{project.target.toLocaleString()} goal
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progressPercentage}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div className="text-right mt-2">
                        <span className="text-yellow-400 font-semibold text-sm">
                          {progressPercentage.toFixed(0)}% complete
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-400/10 rounded-lg p-4 mb-6">
                      <h4 className="text-yellow-400 font-semibold text-sm mb-2 flex items-center">
                        <TrendingUp size={16} className="mr-2" />
                        Expected Impact
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {project.impact}
                      </p>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      <Heart className="mr-2" size={20} />
                      Contribute Now
                    </Button>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Impact Areas */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-12">
            Where Your Money Goes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
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
                      {area.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {area.description}
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-yellow-400 font-semibold text-sm mb-1">
                        {area.amount}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {area.impact}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-8">
              Make a Donation
            </h2>

            {/* Donation Type */}
            <div className="flex justify-center mb-8">
              <div className="glass-card p-1 flex">
                <button
                  className={`px-6 py-2 rounded-lg transition-all ${
                    donationType === 'one-time'
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setDonationType('one-time')}
                >
                  One-time
                </button>
                <button
                  className={`px-6 py-2 rounded-lg transition-all ${
                    donationType === 'monthly'
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setDonationType('monthly')}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-4">
                Select Amount ({donationType})
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className={`p-3 rounded-lg border transition-all ${
                      selectedAmount === amount
                        ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                        : 'border-white/20 text-white hover:border-yellow-400/50'
                    }`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                  >
                    Rs {amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
              />
            </div>

            <Button className="w-full" size="lg">
              <CreditCard className="mr-2" size={20} />
              Donate {selectedAmount ? `Rs ${selectedAmount}` : customAmount ? `Rs ${customAmount}` : ''} 
              {donationType === 'monthly' && ' Monthly'}
            </Button>

            <p className="text-gray-400 text-sm text-center mt-4">
              Your donation is secure and helps us continue our mission of excellence and community service.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}