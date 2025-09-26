import { Metadata } from 'next';
import { TimelineSection } from '@/components/about/TimelineSection';
import { LeadershipSection } from '@/components/about/LeadershipSection';
import { MissionSection } from '@/components/about/MissionSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our rich history, mission, and the dedicated leaders who guide our community.',
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <MissionSection />
      <TimelineSection />
      <LeadershipSection />
    </div>
  );
}