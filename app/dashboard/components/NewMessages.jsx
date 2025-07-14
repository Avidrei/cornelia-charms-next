'use client';

import { useEffect, useState } from 'react';

export default function NewMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('https://cornelia-charms-next-production.up.railway.app/api/messages');
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const sorted = data
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 3); // get latest 3
          setMessages(sorted);
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
        <h2 className="text-lg font-bold text-cornelia-jetblack poppins">New Messages</h2>
        <button className="text-sm font-semibold text-cornelia-darkpink">View More</button>
      </div>

      <div className="mt-2 space-y-3">
        {loading ? (
          <p className="text-sm">Loading...</p>
        ) : messages.length > 0 ? (
          messages.map((msg, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-4 space-y-1 bg-gradient-to-r poppins from-cornelia-darkpink to-cornelia-softpink rounded-xl"
            >
              <div className="px-4 py-2 font-semibold bg-white rounded-lg text-cornelia-jetblack">Name: {msg.name}</div>
              <p className="px-4 py-5 text-sm font-medium leading-tight bg-white rounded-lg ">{msg.message}</p>
              <div className="text-xs font-semibold text-right text-white">
                {new Date(msg.createdAt).toLocaleString()}
              </div>
            </div>
          ))
        ) : (
          <div className='h-[5.rem] p-4 bg-cornelia-softpink rounded-xl'>
            <div className="px-4 py-3 text-md poppins rounded-xl bg-cornelia-softwhite">No New Messages Yet.</div>
          </div>
        )}
      </div>
    </div>
  );
}
