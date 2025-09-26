'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { news } from '@/content/seed';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

export function NewsSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      achievements: 'bg-green-500/20 text-green-400',
      fundraising: 'bg-blue-500/20 text-blue-400',
      sports: 'bg-orange-500/20 text-orange-400',
      community: 'bg-purple-500/20 text-purple-400',
    } as const;
    
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section className="py-20" id="news">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Latest News
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay updated with the latest achievements, developments, and stories from our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-0 overflow-hidden h-full hover:scale-105 transition-transform">
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      <Tag size={12} className="inline mr-1" />
                      {article.category}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(article.date)}
                  </div>

                  <h3 className="text-white font-serif font-semibold text-lg mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Button variant="ghost" size="sm" className="p-0 h-auto text-yellow-400 hover:text-yellow-300">
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}