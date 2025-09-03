import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ 
  variable: '--font-inter',
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
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
