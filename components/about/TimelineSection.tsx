'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Star, Trophy, Globe, Computer, Users, Sparkles } from 'lucide-react';
import { timeline } from '@/content/seed';
import { GlassCard } from '@/components/ui/glass-card';

const iconMap = {
  1834: Calendar,
  1984: Users,
  1990: Star,
  2000: Globe,
  2010: Computer,
  2020: Users,
  2024: Sparkles
} as const;

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20" id="history">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-gray-300 text-lg">
            From humble beginnings to a global community of accomplished women
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20">
            <motion.div
              className="w-full bg-gradient-to-b from-yellow-400 to-yellow-600 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = iconMap[item.year as keyof typeof iconMap] || Calendar;
              
              return (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-yellow-400 rounded-full z-10 shadow-lg">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30" />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <GlassCard className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <span className="text-yellow-400 font-bold text-lg font-serif">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-white font-serif font-semibold text-xl mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}