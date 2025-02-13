import { useState } from "react";
import logo from "../assets/Group.png";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  fixed top-0 left-0 w-full z-50">
      <div className="max-w-contained mx-auto px-[7%] lg:px-[90px] pt-[40px] flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Leaf Ai logo"
            className="w-[120px] h-auto lg:w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[48px] font-normal font-opensans">
          {navLinks.map(({ link, title }, index) => (
            <a
              href={link}
              key={index}
              className="text-black font-opensans hover:text-primary transition duration-300"
            >
              {title}
            </a>
          ))}
          <a
            href="#getstarted"
            className="bg-primary text-white px-5 py-3 rounded-md "
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 bg-primary rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes size={24} color="white" />
          ) : (
            <FaBars size={24} color="white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <div className="flex flex-col items-center gap-[40px]">
            {navLinks.map(({ link, title }, index) => (
              <a
                href={link}
                key={index}
                className="text-black font-opensans  text-lg"
                onClick={() => setIsOpen(false)}
              >
                {title}
              </a>
            ))}
            <a
              href="#getstarted"
              className="bg-primary text-white px-5 py-3 rounded-md w-[80%] text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const navLinks = [
  { link: "/home", title: "Home" },
  { link: "/solutions", title: "Solutions" },
  { link: "/products", title: "Products" },
  { link: "/about-us", title: "About Us" },
  { link: "/contacts", title: "Contacts" },
];
