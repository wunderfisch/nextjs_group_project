import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const updateCurrentDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false, 
      };
      const formattedDateTime = now.toLocaleDateString(undefined, options);
      setCurrentDateTime(formattedDateTime);
    };

    const interval = setInterval(updateCurrentDateTime, 1000);

    updateCurrentDateTime();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const email = "contact@yourdomain.com";
  const phoneNumber = "+1 (123) 456-7890";

  return (
    <div className="bg-gray-800 text-white py-8">
      <footer className="container mx-auto relative">
        <div className="w-full p-4">
          <p className="text-stone-50 flex justify-center">
            &copy; {new Date().getFullYear()} Created by Purple Phoenixes
          </p>
          <p className="text-white text-xl font-bold flex justify-center py-4">
            {currentDateTime.slice(0, -2)}
            <span>{currentDateTime.slice(-2, -1)}</span>
            <span>{currentDateTime.slice(-1)}</span>
          </p>

          <div className="flex justify-center space-x-4 py-4">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} color="#ffffff" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} color="#ffffff" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#ffffff" />
            </a>
          </div>

          {/* Subscription Section */}
          <div className="flex justify-center py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi deserunt eos placeat,
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex justify-center py-4">
          <p className="text-white">
            <FaEnvelope className="inline mr-2" />
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p className="text-white ml-4">
            <FaPhone className="inline mr-2" />
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
