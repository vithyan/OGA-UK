import './globals.css';
import type { Metadata } from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Old Girls\' Association | Dare to do right. Dare to be true.',
    template: '%s | OGA'
  },
  description: 'Celebrating 40 years of sisterhood, service, and excellence. Join our community of accomplished women making a difference since 1984.',
  keywords: ['Old Girls Association', 'OGA', 'Alumni', 'Women', 'Education', 'Community', 'Legacy'],
  authors: [{ name: 'Old Girls\' Association' }],
  creator: 'Old Girls\' Association',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oga.com',
    title: 'Old Girls\' Association | Dare to do right. Dare to be true.',
    description: 'Celebrating 40 years of sisterhood, service, and excellence.',
    siteName: 'Old Girls\' Association',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Old Girls\' Association',
    description: 'Celebrating 40 years of sisterhood, service, and excellence.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="min-h-screen bg-black text-white">
        <div className="gradient-mesh min-h-screen">
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}