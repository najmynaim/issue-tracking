import '@radix-ui/themes/styles.css';
import './theme.config.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import './globals.css';
import Navbar from './Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Issue What?',
  description: 'What is your issue?',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Theme appearance='light' accentColor='violet'>
          <Navbar />
          <main className='p-5 text-zinc-900 relative overflow-hidden flex space-x-6 items-center max-container padding-container'>
            {children}
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
