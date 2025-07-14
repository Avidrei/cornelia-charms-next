"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, Package, Lock, Ticket, LogOut } from 'lucide-react';
import logo from "../assets/CC-ICON-WHITE.png";

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={25} /> },
  { label: 'Products', href: '/dashboard/products', icon: <Package size={25} /> },
  { label: 'Access', href: '/login', icon: <Lock size={25} /> },
  { label: 'Tickets', href: '/banners', icon: <Ticket size={25} /> },
];

export default function PrivateNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="flex flex-row lg:flex-col items-center justify-between lg:m-4 w-full lg:w-20 h-16 lg:h-screen px-4 lg:px-0 py-2 lg:py-9 bg-cornelia-darkpink text-cornelia-softwhite shadow-lg lg:rounded-[1.5rem]">

      {/* Top section (logo + nav items) */}
      <div className="flex flex-row items-center flex-1 gap-4 lg:flex-col lg:gap-6">

        {/* Logo */}
        <Image
          src={logo}
          alt="Cornelia Logo"
          className="w-auto h-8 lg:h-[2.5rem] transition-all rounded-xl"
        />

        {/* Navigation Items */}
        {menuItems.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <div className="relative group">
              <div className="p-2 transition cursor-pointer lg:p-3 rounded-xl hover:bg-cornelia-softpink">
                {item.icon}
              </div>
              <span className="absolute z-10 hidden px-2 py-1 text-xs text-white transition -translate-y-1/2 bg-gray-900 rounded opacity-0 lg:block group-hover:opacity-100 whitespace-nowrap left-14 top-1/2">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Logout Button (bottom on lg, last on mobile) */}
      <div className="relative group">
        <button
          onClick={handleLogout}
          className="p-2 transition lg:p-3 rounded-xl hover:bg-cornelia-softpink"
          aria-label="Logout"
        >
          <LogOut size={25} />
        </button>
        <span className="absolute z-10 hidden px-2 py-1 text-xs text-white transition -translate-y-1/2 bg-gray-900 rounded opacity-0 lg:block group-hover:opacity-100 whitespace-nowrap left-14 top-1/2">
          Logout
        </span>
      </div>

    </div>
  );
}
