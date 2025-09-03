import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TactoUI - React Native UI Component Library',
  description: 'Beautiful, accessible React Native components built with NativeWind and Tailwind CSS.',
  keywords: ['react-native', 'ui', 'components', 'nativewind', 'tailwind'],
  authors: [{ name: 'TactoUI Team' }],
  openGraph: {
    title: 'TactoUI - React Native UI Component Library',
    description: 'Beautiful, accessible React Native components built with NativeWind and Tailwind CSS.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
