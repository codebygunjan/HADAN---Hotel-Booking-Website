import React from "react";
import { Link } from "react-router-dom";
import hadanlogo from "../assets/hadan-logo.png";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Hotels", path: "/hotels" },
    { name: "Wishlist ❤︎⁠", path: "/wishlist" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 'bg-[#F7F3EA]' ${
        isScrolled
          ? "shadow-lg py-3 md:py-4 bg-white text-gray-900"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img className="w-49 h-auto" src={hadanlogo} alt="HADAN" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="group flex flex-col gap-2 text-[#1c1b18] font-medium text-lg justify-center items-center "
          >
            {link.name}
            <div className="bg-[#171102] h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="px-6 py-2.5 rounded-lg bg-[#24231F] text-white hover:bg-[rgb(184,149,74)] transition-colors duration-300 active:scale-95 cursor-pointer"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer  text-[#24231F]`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-lg flex flex-col md:hidden items-center justify-center gap-6 font-semibold text-[#24231F] transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="bg-[rgb(184,149,74)] text-white px-8 py-2.5 rounded-lg transition-all duration-500 active:scale-95"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
