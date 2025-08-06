import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Optional, if using React Router

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white px-4 py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Logo + Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Pathshala</h2>
          <p className="text-gray-300 text-sm">Empowering lives through education & care.</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-5 text-sm font-medium">
          <a href="/about" className="hover:text-yellow-300">About</a>
          <a href="/volunteer" className="hover:text-yellow-300">Volunteer</a>
          <a href="/donate" className="hover:text-yellow-300">Donate</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </div>

        {/* Right: Contact Info with Icons */}
        <div className="text-center md:text-right text-sm text-gray-300 space-y-1">
          <p className="flex items-center justify-center md:justify-end gap-2">
            <FaEnvelope size={16} /> <a href="mailto:pathshala.ngo@email.com" className="hover:text-yellow-300">pathshala.ngo@email.com</a>
          </p>
          <p className="flex items-center justify-center md:justify-end gap-2">
            <FaPhone size={16} /> <a href="tel:+911234567890" className="hover:text-yellow-300">+91 12345 67890</a>
          </p>
          <p className="flex items-center justify-center md:justify-end gap-2">
            <FaMapMarkerAlt size={16} /> New Delhi, India
          </p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-400 mt-3">
        © {new Date().getFullYear()} Pathshala NGO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
