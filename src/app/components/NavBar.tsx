"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Projects', href: '/projects' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-30 backdrop-blur-md z-20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">
            NuktaLab
          </Link>
          <div className="hidden md:flex justify-center flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-blue-300 hover:text-blue-400 transition-colors duration-300 
                  px-4 py-2 mx-2 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm 
                  hover:bg-opacity-70 "
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-300 hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;