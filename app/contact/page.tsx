import { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Old Girls\' Association. We\'d love to hear from you.',
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <ContactSection />
    </div>
  );
}