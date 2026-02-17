"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { GalleryImage } from "@/types";

const GALLERY_HEADING = {
  title: "A Closer Look",
  subtitle:
    "Every corner of Casa Guarguaridad is designed for comfort and beauty",
} as const;

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-01.jpg",
    alt: "Private pool with lake view at Casa Guarguaridad, Playa Hermosa Costa Rica",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/gallery-02.jpg",
    alt: "Covered terrace with pool bar at the villa",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/gallery-03.jpg",
    alt: "Modern kitchen with black stone wall",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/gallery-04.jpg",
    alt: "Aerial view of property and lake",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/gallery-05.jpg",
    alt: "Living and dining area",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/gallery-06.jpg",
    alt: "Exterior and surroundings of the villa",
    width: 800,
    height: 600,
  },
];

const lightboxSlides = galleryImages.map((img) => ({
  src: img.src,
  alt: img.alt,
  width: img.width,
  height: img.height,
}));

export function Gallery(): React.ReactElement {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightboxAt = useCallback((index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="bg-white py-20"
        aria-labelledby="gallery-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              id="gallery-heading"
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            >
              {GALLERY_HEADING.title}
            </h2>
            <p className="text-lg text-gray-600">{GALLERY_HEADING.subtitle}</p>
          </header>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, index) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openLightboxAt(index)}
                className="focus:ring-ocean-500 aspect-4/3 overflow-hidden rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => openLightboxAt(0)}
              className="border-ocean-600 text-ocean-600 hover:bg-ocean-50 rounded-lg border-2 px-6 py-3 font-semibold transition-colors"
            >
              View All Photos
            </button>
          </div>
        </div>
      </section>
      <Lightbox
        open={isLightboxOpen}
        close={closeLightbox}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </>
  );
}
