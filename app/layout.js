import './globals.css';
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
  icons: {
    icon: "/CC-ICON-PINK.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
