"use client";
import Image from "next/image";
import { useState } from 'react';
import bgImage from '../assets/CONTACT-US-BG.png';
import Accordion from '../components/Accordion';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiShopee } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupColor, setPopupColor] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://cornelia-charms-next.onrender.com/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: '', message: '' });
        setPopupMessage('Your message has been sent to us successfully!');
        setPopupColor('text-jetblack');
        setShowPopup(true);
      } else {
        setPopupMessage('Failed to send message. Please try again.');
        setPopupColor('text-jetblack');
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setPopupMessage('Failed to send message. Please try again.');
      setPopupColor('text-red-500');
      setShowPopup(true);
    }

    setTimeout(() => setShowPopup(false), 6000);
  };

  return (
    <div>

      {/* Contact Us Section */}
      <section className=" mt-[72px] lg:mt-[116px] xl:mt-[108px] w-full bg-cornelia-softwhite">
        <div className="flex flex-col items-center justify-center px-10 xl:px-[160px] 2xl:px-[300px] py-7 xl:py-10 2xl:py-12">
          <h2 className="text-[3.2rem] md:text-[3.75rem] xl:text-[5.25rem] 2xl:text-[5.75rem] tracking-wide font-bold bebas text-cornelia-darkpink drop-shadow-2xl">Contact Us</h2>
          <p className="text-center text-[0.9rem] xl:text-[1.1rem] 2xl:text-[1.4rem] poppins font-semibold">
            Got questions or just want to say hi? 
            We’d love to hear from you! 
            Send us a message and we’ll get back to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 bg-center bg-no-repeat bg-cover h-[450px] xl:h-[600px]">
        <Image
        src={bgImage}
        alt="Background"
        fill
        className="z-0 object-cover"
        priority
        />  
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50" />

        {/* Left Info Side */}
        <div className="relative z-10 flex-col hidden text-2xl text-cornelia-softwhite p-14 xl:p-[90px] md:flex">
          <div className="flex flex-col mb-[40px] poppins">
            <h2 className='font-semibold xl:text-[2.25rem]'>Email</h2>
            <a className="mt-3 text-sm md:text-[1rem] xl:text-[1.4rem]">corneliacharms@gmail.com.ph</a>
          </div>
          <div className="xl:mt-5 flex flex-col mb-[40px] poppins">
            <h2 className="font-semibold xl:text-[2.25rem]">Contact Number</h2>
            <a className="mt-3 text-sm md:text-[1rem] xl:text-[1.4rem]">corneliacharms@gmail.com.ph</a>
          </div>
          <div className="flex flex-col poppins">
            <h2 className="text-[1.2rem] xl:text-[1.7rem] xl:mt-5 font-semibold">Follow us on other Social Media Platforms</h2>
            <div className="flex flex-row items-center justify-start gap-6 pt-2 xl:mt-2">
              <a href="https://www.tiktok.com/@corneliacharmsph"><FaTiktok className="border-2 border-cornelia-darkpink bg-cornelia-softwhite p-[0.6rem] xl:p-[1rem] rounded-full text-cornelia-darkpink h-[60px] w-[60px] xl:h-[90px] xl:w-[90px] hover:text-pink-800" /></a>
              <a href="https://www.facebook.com/nnejjjj"><FaFacebook className="border-2 border-cornelia-darkpink bg-cornelia-softwhite p-[0.6rem] xl:p-[1rem] rounded-full text-cornelia-darkpink h-[60px] w-[60px] xl:h-[90px] xl:w-[90px] hover:text-pink-800" /></a>
              <a href="https://www.instagram.com/corneliacharmsph/"><FaInstagram className="border-2 border-cornelia-darkpink bg-cornelia-softwhite p-[0.6rem] xl:p-[1rem] rounded-full text-cornelia-darkpink h-[60px] w-[60px] xl:h-[90px] xl:w-[90px] hover:text-pink-800" /></a>
              <a href="https://shopee.ph/corneliacharmsph"><SiShopee className="border-2 border-cornelia-darkpink bg-cornelia-softwhite p-[0.6rem] xl:p-[1rem] rounded-full text-cornelia-darkpink h-[60px] w-[60px] xl:h-[90px] xl:w-[90px] hover:text-pink-800" /></a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative z-10 flex items-center justify-center py-4 px-7">
          <form onSubmit={handleSubmit} className="w-full max-w-2xl px-6 py-10 xl:p-[50px] xl:h-[450px] bg-black bg-opacity-50 shadow-lg text-cornelia-softwhite rounded-xl">
            <h3 className="mb-3 text-[1.2rem] xl:text-[1.6rem] font-semibold text-center poppins">Send a Message</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name..."
              required
              className="w-full px-4 py-2 mb-4 text-sm font-light bg-transparent border-2 border-white rounded-lg xl:text-lg text-cornelia-softwhite focus:outline-none poppins placeholder-cornelia-softwhite"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here..."
              required
              className="w-full h-32 xl:h-[180px] p-4 mb-5 text-sm font-light bg-transparent border-2 border-white rounded-lg xl:text-lg text-cornelia-softwhite focus:outline-none poppins placeholder-cornelia-softwhite"
            />
            <div className='flex items-center justify-center'>
              <button type="submit" className="w-[45%] py-2 text-white rounded text-md xl:text-lg poppins bg-cornelia-softpink transition-all duration-300 hover:bg-cornelia-darkpink font-semibold">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col items-center justify-center w-full h-auto">
        <div className="px-7 pt-[40px] xl:pt-[80px] pb-[15px] xl:pb-[30px]">
          <h2 className="text-center leading-9 justify-center text-[2.5rem] md:text-[3.5rem] xl:text-[5.25rem] bebas tracking-wide font-semibold text-cornelia-darkpink">
            Frequently Asked <span className="text-cornelia-jetblack">Questions</span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-center xl:mt-7 xl:text-xl poppins text-cornelia-jetblack">
            Got a question? We&apos;ve got answers!
          </p>
        </div>
        <Accordion />
      </section>

      {/* Global Popup Notification */}
      {showPopup && (
        <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border rounded-lg px-6 py-3 z-50 ${popupColor} transition-opacity duration-500`}>
          <p className="font-semibold text-center poppins">{popupMessage}</p>
        </div>
      )}
    </div>
  );
}
