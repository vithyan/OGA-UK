'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Camera, Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryAlbums } from '@/content/seed';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

export function GallerySection() {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

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
            Memories Gallery
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our collection of cherished memories, milestones, and celebrations spanning decades of sisterhood.
          </p>
        </motion.div>

        {/* Gallery Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryAlbums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="cursor-pointer"
                onClick={() => setSelectedAlbum(album.id)}
              >
                <GlassCard className="p-0 overflow-hidden group">
                  <div className="relative h-64 md:h-80">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>

                  {/* Album info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        {album.year}
                      </span>
                      <div className="flex items-center space-x-1 text-white text-sm">
                        <ImageIcon size={16} />
                        <span>{album.imageCount} photos</span>
                      </div>
                    </div>
                    <h3 className="text-white font-serif font-semibold text-xl mb-2">
                      {album.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {album.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Gallery Preview */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-8">
            Featured Moments
          </h2>
          
          {/* 3D Slider Preview */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 pb-6 custom-scrollbar overflow-x-auto">
              {galleryAlbums.flatMap(album => 
                Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={`${album.id}-${i}`}
                    className="flex-shrink-0 w-64 h-40 relative rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05, rotateY: 15 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={album.coverImage}
                      alt={`${album.title} - Image ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-sm font-medium truncate">
                        {album.title}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </motion.div>

        {/* Album Modal (simplified version) */}
        <AnimatePresence>
          {selectedAlbum && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedAlbum(null)}
              />
              <motion.div
                className="relative max-w-4xl w-full glass-card p-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10"
                  onClick={() => setSelectedAlbum(null)}
                >
                  <X size={24} />
                </button>
                
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    {galleryAlbums.find(a => a.id === selectedAlbum)?.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Album viewer will be implemented with full image gallery functionality
                  </p>
                  <Button onClick={() => setSelectedAlbum(null)}>
                    Close Preview
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}