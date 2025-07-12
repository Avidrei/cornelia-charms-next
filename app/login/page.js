"use client";

import bgImage from '../assets/LOGIN-BG.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ClientLayout from '../client-layout';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
     const res = await fetch('https://cornelia-charms-next-production.up.railway.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
      } else {
        setError(data.msg || 'Login failed');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <ClientLayout>
    <div className="mt-[72px] lg:mt-[116px] xl:mt-[128px] flex flex-col lg:grid lg:grid-cols-2 h-screen">

      {/* Background Image for Log In */}
      <div className="relative w-full h-[30vh] lg:h-screen bg-center bg-no-repeat bg-cover">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 z-0 bg-cornelia-jetblack bg-opacity-40" />
      </div>

      <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-white">
        <div className="relative flex flex-col items-center justify-center max-w-md">

          {/* Background Circles */}
          <div className="absolute lg:-top-[140%] lg:right-[70%] -top-[130%] right-[60%] min-[500px]:-top-[140%]  min-[500px]:right-[100%] xl:-top-[130%] xl:right-[110%] rounded-full w-[450px] h-[450px]  bg-gradient-to-b from-cornelia-softpink to-cornelia-softwhitemix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div style={{ animationDelay: "4s" }} className="absolute -top-[20%] -right-[5%] min-[500px]:-right-[30%] min-[500px]:-top-[30%] w-40 h-40 rounded-full bg-gradient-to-bl from-cornelia-darkpink to-cornelia-softwhite sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div style={{ animationDelay: "2s" }} className="absolute top-[135%] -right-[50%] min-[500px]:top-[160%] min-[500px]:-right-[70%] lg:-right-[80%] lg:top-[160%] xl:-right-[110%] xl:top-[130%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-cornelia-darkpink to-cornelia-softwhite  mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

          {/* Login Form Header */}
          <div className="flex flex-col items-center justify-center leading-none text-cornelia-jetblack poppins">
            <h1 className="text-[1.5rem] lg:text-[2.1rem] xl:text-[2.3rem] mb-3 font-semibold">Log in your Account</h1>
            <p className="text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-normal">Please sign in your details.</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="py-3 mt-3 px-9 md:px-0 md:py-0 xl:mt-9">
              <label className="text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] mb-2 font-medium poppins text-cornelia-jetblack">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 xl:p-4 mt-2 mb-5 border text-[0.85rem] lg:text-[1rem] xl:text-[1.1rem] border-gray-300 rounded-lg poppins focus:outline-none focus:ring-2 focus:ring-cornelia-darkpink"
              />

              <label className="text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] mb-2 font-medium poppins text-cornelia-jetblack">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 xl:p-4 mt-2 mb-5 border text-[0.85rem] lg:text-[1rem] xl:text-[1.1rem] border-gray-300 rounded-lg poppins focus:outline-none focus:ring-2 focus:ring-cornelia-darkpink"
              />

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] font-normal text-cornelia-jetblack poppins">
                  <input type="checkbox" className="accent-cornelia-darkpink poppins" />
                  Remember me
                </label>
                <a href="#" className="text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] font-medium poppins text-cornelia-darkpink hover:underline">
                  Forgot password?
                </a>
              </div>

              {error && (
                <p className="mb-4 text-sm text-red-500 poppins">{error}</p>
              )}

              <button
                type="submit"
                className="w-full p-2 font-semibold transition-colors duration-300 rounded-lg text-cornelia-softwhite text-md xl:text-lg lg:p-3 bg-cornelia-softpink poppins hover:bg-cornelia-darkpink"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </ClientLayout>
  );
}
