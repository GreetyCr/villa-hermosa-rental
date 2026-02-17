"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

const HERO_IMAGE = {
  src: "/images/hero/hero-main.jpg",
  alt: "Luxury villa with private pool and lake views in Playa Hermosa, Costa Rica",
} as const;

export function Hero(): React.ReactElement {
  const handleScrollToFeatures = (): void => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[600px] w-full overflow-hidden md:min-h-screen"
      aria-label="Hero"
    >
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 md:min-h-screen">
        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-6 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Playa Hermosa, Costa Rica
          </span>
          <h1 className="mb-6 text-5xl leading-tight font-bold text-white drop-shadow-sm md:text-6xl lg:text-7xl">
            Your Private Paradise Awaits
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl lg:text-2xl">
            Luxury villa with private pool, lake access, and golf course views.
            Experience the perfect blend of relaxation and adventure.
          </p>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/book"
              className="bg-ocean-600 hover:bg-ocean-700 rounded-lg px-8 py-4 text-lg font-semibold text-white transition-colors"
            >
              Book Your Stay
            </Link>
            <Link
              href="/the-villa"
              className="rounded-lg border-2 border-white bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/20"
            >
              Explore the Villa
            </Link>
          </div>
          <div className="mb-12 flex flex-wrap justify-center gap-8 text-white/90">
            <span className="text-base font-medium md:text-lg">
              {SITE_CONFIG.bedrooms} Bedrooms
            </span>
            <span className="text-base font-medium md:text-lg">
              {SITE_CONFIG.bathrooms} Bathrooms
            </span>
            <span className="text-base font-medium md:text-lg">
              {SITE_CONFIG.maxGuests} Max Guests
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleScrollToFeatures}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Scroll to content"
        >
          <ChevronDown
            className="h-8 w-8 animate-bounce md:h-10 md:w-10"
            aria-hidden
          />
        </button>
      </div>
    </section>
  );
}
