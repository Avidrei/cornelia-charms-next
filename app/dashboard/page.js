'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      try {
        const decoded = jwtDecode(token);
        console.log('🔍 Decoded JWT:', decoded); // ✅ add this line
        setUser({ email: decoded.email });
      } catch (error) {
        console.error('Invalid token:', error);
        router.push('/login');
      }
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
