import { Metadata } from 'next';
import { MembershipSection } from '@/components/membership/MembershipSection';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Join our community of accomplished women. Explore membership benefits and connect with sisters worldwide.',
};

export default function MembershipPage() {
  return (
    <div className="py-16">
      <MembershipSection />
    </div>
  );
}