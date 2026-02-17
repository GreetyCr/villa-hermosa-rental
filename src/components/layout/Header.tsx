"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "The Villa", href: "/the-villa" },
  { label: "Location", href: "/location" },
  { label: "Amenities", href: "/amenities" },
  { label: "Book Now", href: "/book" },
] as const;

export function Header(): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-ocean-600 hover:text-ocean-700 text-xl font-bold transition-colors"
        >
          Villa Hermosa
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ocean-600 text-gray-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-ocean-600 hover:bg-ocean-700 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="hover:text-ocean-600 inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div
          className="border-t border-gray-200 bg-white px-4 py-4 md:hidden"
          role="dialog"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "hover:text-ocean-600 block rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50",
                    link.label === "Book Now" &&
                      "bg-ocean-600 hover:bg-ocean-700 font-semibold text-white hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
