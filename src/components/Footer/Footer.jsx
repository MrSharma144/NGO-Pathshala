import React from 'react';
import 'animate.css';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-200 via-green-300 to-green-400 backdrop-blur-md text-gray-900 py-16 px-8 animate__animated animate__fadeInUp shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-green-800">Pathshala</h2>
          <p className="text-lg font-medium leading-relaxed">
            Empowering underprivileged children through quality education and compassion. Join us to spread light and opportunity.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg font-semibold">
            <li><a href="#about" className="hover:underline hover:text-green-900 transition-all">About</a></li>
            <li><a href="#volunteer" className="hover:underline hover:text-green-900 transition-all">Volunteer</a></li>
            <li><a href="#donate" className="hover:underline hover:text-green-900 transition-all">Donate</a></li>
            <li><a href="#contact" className="hover:underline hover:text-green-900 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Contact</h3>
          <p className="text-lg font-medium">📧 <a href="mailto:info@pathshala.org" className="underline">info@pathshala.org</a></p>
          <p className="text-lg font-medium">📞 <a href="tel:+919999999999" className="underline">+91 99999 99999</a></p>
          <p className="text-lg font-medium">📍 New Delhi, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 border-t border-green-400 pt-6 text-center text-md font-semibold text-green-800 tracking-wide">
        © {new Date().getFullYear()} Pathshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
