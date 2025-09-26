import { Metadata } from 'next';
import { DonationSection } from '@/components/donate/DonationSection';

export const metadata: Metadata = {
  title: 'Donate & Support',
  description: 'Support our mission and make a lasting impact through your generous contributions.',
};

export default function DonatePage() {
  return (
    <div className="py-16">
      <DonationSection />
    </div>
  );
}