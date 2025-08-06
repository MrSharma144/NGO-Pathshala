import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import hamburgerIcon from '../../assets/menu.png'; 


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold tracking-wide hover:text-green-300 transition-colors">
          NGO PathShala
        </NavLink>
        {/* Hamburger Icon */}
        <button
  className="md:hidden flex items-center px-3 py-2 border rounded text-white border-green-300 hover:text-green-300 hover:border-green-300"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation"
>
  <img src={hamburgerIcon } alt="Menu" className="h-6 w-6" />
</button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold underline"
                  : "hover:text-green-300 transition-colors"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold underline"
                  : "hover:text-green-300 transition-colors"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/volunteer"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold underline"
                  : "hover:text-green-300 transition-colors"
              }
            >
                  Volunteer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold underline"
                  : "hover:text-green-300 transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-300 text-green-900 px-4 py-2 rounded-lg font-semibold shadow"
                  : "bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 font-semibold shadow transition-colors"
              }
            >
              Donate
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 px-2 pt-2 pb-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold block px-2 py-1"
                  : "hover:text-green-300 transition-colors block px-2 py-1"
              }
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold block px-2 py-1"
                  : "hover:text-green-300 transition-colors block px-2 py-1"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/volunteer"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold block px-2 py-1 underline"
                  : "hover:text-green-300 transition-colors block px-2 py-1"
              }
              onClick={() => setMenuOpen(false)}
            >
              Volunteer
            </NavLink> 
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 font-semibold block px-2 py-1 underline"
                  : "hover:text-green-300 transition-colors block px-2 py-1"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-300 text-green-900 px-4 py-2 rounded-lg font-semibold shadow block "
                  : "bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 font-semibold shadow transition-colors block"
              }
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

