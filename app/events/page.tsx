import { Metadata } from 'next';
import { EventsSection } from '@/components/events/EventsSection';
import { NewsSection } from '@/components/events/NewsSection';

export const metadata: Metadata = {
  title: 'Events & News',
  description: 'Stay updated with our upcoming events, latest news, and community happenings.',
};

export default function EventsPage() {
  return (
    <div className="py-16">
      <EventsSection />
      <NewsSection />
    </div>
  );
}