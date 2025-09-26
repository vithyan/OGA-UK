'use client';

import { motion } from 'framer-motion';
import { Crown, Users, FileText, DollarSign, Calendar } from 'lucide-react';
import { leadership, pastPresidents } from '@/content/seed';
import { GlassCard } from '@/components/ui/glass-card';

export function LeadershipSection() {
  return (
    <section className="py-20" id="leadership">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Current Leadership */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-4">
            Executive Committee
          </h2>
          <p className="text-gray-300 text-center text-lg mb-12 max-w-2xl mx-auto">
            Meet the dedicated leaders guiding our association with vision, commitment, and excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center p-6 hover:scale-105 transition-transform">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    {leader.role === 'Patron' && (
                      <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
                    )}
                  </div>
                  <h3 className="text-white font-serif font-semibold text-lg mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-yellow-400 font-medium text-sm mb-2">
                    {leader.role}
                  </p>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                    <Calendar size={12} />
                    <span>{leader.tenure}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Presidents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          id="past-presidents"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
            Past Presidents
          </h2>
          <GlassCard className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastPresidents.map((president, index) => (
                <motion.div
                  key={president.name}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      {president.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {president.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}