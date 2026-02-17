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

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
