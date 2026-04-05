"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-slate-800 sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="pointer-events-none">
              <Image
                src="/images/logo-nav.png"
                alt="NawrasFoods"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <span className="text-xl font-bold text-slate-800 hidden sm:block">
              Nawras<span className="text-red-600">Foods</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="#pdf-section"
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              Documents
            </a>
            <a
              href="#contact-section"
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </a>
            <Link
              href="/admin"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium shadow-sm"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
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
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2 pt-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-red-600 px-2 py-2 font-medium"
              >
                Home
              </Link>
              <a
                href="#pdf-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-red-600 px-2 py-2 font-medium"
              >
                Documents
              </a>
              <a
                href="#contact-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-red-600 px-2 py-2 font-medium"
              >
                Contact
              </a>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-center transition-colors text-sm font-medium mt-2"
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
