'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      // Later: verify token or fetch user info
      setUser({ email: 'admin@cornelia.com' }); // dummy email for now
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <p>Logged in as: {user.email}</p>
    </div>
  );
}
