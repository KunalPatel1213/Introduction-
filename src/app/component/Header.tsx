"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 text-base font-semibold text-black md:text-lg">
        <div className="flex items-center gap-1 text-3xl text-black">
          <motion.span
            animate={{ rotate: [0, 20, 0, 20, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.3 }}
            className="origin-bottom-right"
          >
            <MdWavingHand />
          </motion.span>
        </div>

        <div className="ml-auto hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-gray-600">
            About
          </Link>
          <Link href="/skill" className="transition hover:text-gray-600">
            Skill
          </Link>
          <Link href="/project" className="transition hover:text-gray-600">
            Project
          </Link>
          <Link href="/achievement" className="transition hover:text-gray-600">
            Achievement
          </Link>
          <Link href="/contact" className="transition hover:text-gray-600">
            Contact Us
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="ml-auto rounded-md p-2 text-2xl text-black md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/10 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col items-end gap-4 text-base font-semibold text-black">
            <Link href="/" className="transition hover:text-gray-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="transition hover:text-gray-600" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/skill" className="transition hover:text-gray-600" onClick={() => setIsOpen(false)}>
              Skill
            </Link>
            <Link href="/project" className="transition hover:text-gray-600" onClick={() => setIsOpen(false)}>
              Project
            </Link>
            <Link href="/achievement" className="transition hover:text-gray-600" onClick={() => setIsOpen(false)}>
              Achievement
            </Link>
            <Link href="/contact" className="transition hover:text-gray-600" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
