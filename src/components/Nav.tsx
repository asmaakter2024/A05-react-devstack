import Logo from "../assets/logo-text.png";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="m-2 md:m-7.5 lg:sticky lg:top-0 lg:z-50 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-0">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-10 h-1 bg-gray-500 rounded"></span>
            <span className="w-10 h-1 bg-gray-500 rounded"></span>
            <span className="w-10 h-1 bg-gray-500 rounded"></span>
          </button>

          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-36 md:w-auto" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-7.25 items-center">
            <li className="text-[14px] text-pink-600">Home</li>
            <li>
              <a
                href="#"
                className="text-[14px]  transition hover:text-pink-500"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] transition hover:text-pink-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] transition hover:text-pink-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] transition hover:text-pink-500"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button className="font-semibold text-gray-700">Sign In</button>

            <button className="btn btn-secondary rounded-full px-5 hover:bg-linear-to-r from-[#F97316] to-[#EC4899]">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-5 py-5 border-t">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
