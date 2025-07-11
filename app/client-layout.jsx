'use client';

import { usePathname } from 'next/navigation';
import PublicNavbar from '@/components/PublicNavbar';
import PrivateNavbar from '@/components/PrivateNavbar';
import Footer from './components/Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isPrivate = pathname.startsWith('/dashboard');

  return (
    <>
      {isPrivate ? <PrivateNavbar /> : <PublicNavbar />}
      <main>{children}</main>
      {!isPrivate && <Footer />}
    </>
  );
}
