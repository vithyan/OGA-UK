'use client';

import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Award } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { siteConfig } from '@/content/seed';

const values = [
  {
    icon: Heart,
    title: 'Service',
    description: 'Dedicated to serving our community and supporting those in need through various charitable initiatives.'
  },
  {
    icon: Users,
    title: 'Sisterhood',
    description: 'Building lifelong connections and supporting each other through all stages of life and career.'
  },
  {
    icon: BookOpen,
    title: 'Excellence',
    description: 'Maintaining the highest standards in education, professional development, and personal growth.'
  },
  {
    icon: Award,
    title: 'Legacy',
    description: 'Preserving our proud heritage while adapting to meet the needs of future generations.'
  }
];

export function MissionSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            About Our Association
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-yellow-400 font-serif italic mb-6">
              "{siteConfig.motto}"
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              For {siteConfig.anniversary} years, the Old Girls' Association has been the beating heart 
              of our alumni community, connecting generations of accomplished women who continue 
              to make their mark on the world.
            </p>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassCard className="text-center p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To foster lifelong connections among our alumni, support the educational excellence 
              of our alma mater, and empower women to make meaningful contributions to society 
              while upholding the values and traditions that define our shared heritage.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
          </GlassCard>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="text-center h-full p-6 hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-white font-serif font-semibold text-xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}