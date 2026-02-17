export interface NavigationLink {
  label: string;
  href: string;
}

export interface PropertyInfo {
  name: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
}

import type { ReactNode } from "react";

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AmenityItem {
  name: string;
  icon: ReactNode;
}

export interface AmenityCategory {
  title: string;
  items: AmenityItem[];
}

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  rating: number;
  date: string;
  stayType: string;
  text: string;
}
