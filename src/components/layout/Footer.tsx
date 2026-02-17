import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, CONTACT_INFO } from "@/constants";

const ADDRESS = "Playa Hermosa, Puntarenas, Costa Rica";

const quickLinks = [
  { label: "The Villa", href: "/the-villa" },
  { label: "Location", href: "/location" },
  { label: "Amenities", href: "/amenities" },
  { label: "Book Now", href: "/book" },
] as const;

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-ocean-600 hover:text-ocean-700 text-xl font-bold"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-ocean-600 text-gray-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-ocean-600 flex items-center gap-2 text-gray-600 transition-colors"
                >
                  <Mail
                    className="text-ocean-600 h-5 w-5 shrink-0"
                    aria-hidden
                  />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="hover:text-ocean-600 flex items-center gap-2 text-gray-600 transition-colors"
                >
                  <Phone
                    className="text-ocean-600 h-5 w-5 shrink-0"
                    aria-hidden
                  />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin
                  className="text-ocean-600 mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden
                />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
