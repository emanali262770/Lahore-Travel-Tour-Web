"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuItems=[
            { name: "Home", path: "/" },
            { name: "Explore Places", path: "/explore" },
            { name: "Ai Guide", path: "/ai-guide" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ]
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl ">
          <Image
            src="/images/Logo.svg"
            alt="Lahore Travel Tour"
            width={70}
            height={50}
          />
        </div>
        {/* Desktop Menu */}
      
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="hidden md:flex space-x-8 font-medium text-grayish"
        >
          {menuItems?.map((item) => (
            <motion.li
              key={item.path}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={item.path}
                className={`cursor-pointer pb-1 transition-all duration-300 ${
                  pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-primary font-medium text-white px-8 py-2 rounded-full hover:bg-primary transition">
            Register
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 pb-4 space-y-4 overflow-hidden"
          >
            <p className="text-primary font-medium">Home</p>
            <p className="hover:text-primary cursor-pointer">Explore Places</p>
            <p className="hover:text-primary cursor-pointer">Ai Guide</p>
            <p className="hover:text-primary cursor-pointer">About</p>
            <p className="hover:text-primary cursor-pointer">Contact</p>

            <button className="w-full bg-primary text-white py-2 rounded-full hover:bg-primary transition">
              Register
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
