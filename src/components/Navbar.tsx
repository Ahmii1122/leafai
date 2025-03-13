import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/Group.png";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 px-4">
      <div className="max-w-contained mx-auto px-1 mt-[40px] mb-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Leaf Ai logo"
            className="w-[120px] h-auto lg:w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[48px] font-normal font-opensans">
          {navLinks.map(({ link, title }, index) => (
            <Link
              to={link}
              key={index}
              className="text-black font-opensans hover:text-primary transition duration-300"
            >
              {title}
            </Link>
          ))}
          <Link
            to="/getstarted"
            className="bg-primary text-white px-5 py-3 rounded-md"
          >
            Get Started
          </Link>
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
              <Link
                to={link}
                key={index}
                className="text-black font-opensans text-lg"
                onClick={() => setIsOpen(false)}
              >
                {title}
              </Link>
            ))}
            <Link
              to="/getstarted"
              className="bg-primary text-white px-5 py-3 rounded-md w-[80%] text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const navLinks = [
  { link: "/", title: "Home" },
  { link: "/solutions", title: "Solutions" },
  { link: "/products", title: "Products" },
  { link: "/about-us", title: "About Us" },
  { link: "/contacts", title: "Contacts" },
];
