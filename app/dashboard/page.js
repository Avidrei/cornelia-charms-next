'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import ClientLayout from '@/client-layout';

// Dashboard components
import WelcomeBanner from './components/WelcomeBanner';
import QuickOverview from './components/QuickOverview';
import QuickActions from './components/QuickActions';
import TopProductViews from './components/TopProductViews';
import ActivityLog from './components/ActivityLog';
import NewMessages from './components/NewMessages';
import TeamMembers from './components/TeamMembers';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      try {
        const decoded = jwtDecode(token);
        setUser({ email: decoded.email }); // You can add more user data if needed
      } catch (error) {
        console.error('Invalid token:', error);
        router.push('/login');
      }
    }
  }, []);

  if (!user) return <p className="p-4">Loading...</p>;

  return (
    <ClientLayout>
      <div className="px-4 space-y-8 text-sm">

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Left content: Overview, Actions, Top Products */}
          <div className="col-span-2 space-y-6">
            <WelcomeBanner />
            <QuickOverview />
          </div>

          {/* Right content: Activity Log, New Messages, Team Members */}
          <div className="space-y-6">
            <ActivityLog/>
          </div>

          
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Left content: Overview, Actions, Top Products */}
          <div className="col-span-2 space-y-6">
            <QuickActions/>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="col-span-2 space-y-6"><TopProductViews /></div>
              <TeamMembers /> 
            </div>
          </div>
          {/* Right content: Activity Log, New Messages, Team Members */}
          <div className="space-y-6">
            <NewMessages />
          </div>
          
        </div>
      </div>
    </ClientLayout>
  );
}
