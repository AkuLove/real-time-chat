import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  fallback: ['Poppins'],
  variable: '--font-poppins',
});

const roboto = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  fallback: ['Poppins'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'AkuChat',
  description: 'Better than telegram',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Telegram'],
  authors: [{ name: 'Marat Nikolaev', url: 'https://github.com/AkuLove' }],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <Header />
        <main>
          <AuthContext>
            <ToasterContext />
            {children}
          </AuthContext>
        </main>
        <Footer />
      </body>
    </html>
  );
}
