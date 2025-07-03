import './globals.css';
import PublicNavbar from '@/components/PublicNavbar';
import Footer from './components/Footer';
import { Poppins, Bebas_Neue } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata = {
  title: 'Cornelia Charms',
  description: 'Handmade accessories store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PublicNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
