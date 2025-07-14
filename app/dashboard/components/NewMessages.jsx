'use client';

import { useEffect, useState } from 'react';

export default function NewMessages() {
  const [latestMessage, setLatestMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('https://cornelia-charms-next-production.up.railway.app/api/messages');
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          // Sort messages by date and get the latest one
          const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setLatestMessage(sorted[0]);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-cornelia-jetblack poppins">New Message</h2>
        <button className="text-sm font-semibold text-cornelia-darkpink">View More</button>
      </div>

      <div className="p-4 mt-2 space-y-2 text-white bg-gradient-to-r from-cornelia-darkpink to-cornelia-softpink rounded-xl">
        {loading ? (
          <p className="text-sm">Loading...</p>
        ) : latestMessage ? (
          <>
            <div className="font-bold">{latestMessage.sender}</div>
            <p className="text-sm leading-tight">{latestMessage.message}</p>
          </>
        ) : (
          <p className="text-sm leading-tight">No new messages yet.</p>
        )}
      </div>
    </div>
  );
}
