import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sweet Dental | Gentle Family & Pediatric Care in San Juan, TX',
  description:
    'Gentle, expert family and pediatric dental care in San Juan, TX with evening and Saturday hours, backed by over 760 five-star reviews.',
  openGraph: {
    title: 'Sweet Dental | Gentle Family & Pediatric Care in San Juan, TX',
    description:
      'Gentle, expert family and pediatric dental care in San Juan, TX with evening and Saturday hours, backed by over 760 five-star reviews.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweet Dental | Gentle Family & Pediatric Care in San Juan, TX',
    description:
      'Gentle, expert family and pediatric dental care in San Juan, TX with evening and Saturday hours, backed by over 760 five-star reviews.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} scroll-smooth`}>
      <body
        className="min-h-screen flex flex-col bg-[#F9F8F4] text-[#2D3A31] font-sans antialiased selection:bg-[#8C9A84]/20 selection:text-[#2D3A31]"
        suppressHydrationWarning
      >
        {/* Mandatory Botanical Paper Grain Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.018]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        <Navbar />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
