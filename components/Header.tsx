"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="NawrasFoods"
              width={45}
              height={45}
              className="rounded"
            />
            <span className="text-xl font-bold text-white hidden sm:block">
              NawrasFoods
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <a
              href="#pdf-section"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Documents
            </a>
            <a
              href="#contact-section"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <Link
              href="/admin"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700">
            <nav className="flex flex-col gap-2 pt-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white px-2 py-2"
              >
                Home
              </Link>
              <a
                href="#pdf-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white px-2 py-2"
              >
                Documents
              </a>
              <a
                href="#contact-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white px-2 py-2"
              >
                Contact
              </a>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-center transition-colors text-sm"
              >
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
