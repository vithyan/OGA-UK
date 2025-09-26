import { Metadata } from 'next';
import { GallerySection } from '@/components/gallery/GallerySection';

export const metadata: Metadata = {
  title: 'Memories Gallery',
  description: 'Explore our collection of cherished memories, milestones, and celebrations.',
};

export default function GalleryPage() {
  return (
    <div className="py-16">
      <GallerySection />
    </div>
  );
}