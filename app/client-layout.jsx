'use client';

import { usePathname } from 'next/navigation';
import PublicNavbar from '@/components/PublicNavbar';
import PrivateNavbar from '@/components/PrivateNavbar';
import Footer from './components/Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isPrivate = pathname.startsWith('/dashboard');

  if (isPrivate) {
    // Private layout (Dashboard)
    return (
      <div className="flex flex-col min-h-screen lg:flex-row">
        <PrivateNavbar />
        <main className="transition-all duration-300 sm:pt-[5rem] lg:pt-5 lg:ml-[6rem]">
          {children}
        </main>
      </div>
    );
  }

  // Public layout
  return (
    <>
      <PublicNavbar />
      <main className="min-h-[calc(100vh-64px)] px-4 py-6">{children}</main>
      <Footer />
    </>
  );
}
