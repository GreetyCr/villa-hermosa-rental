import React from "react";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Gallery } from "@/components/home/Gallery";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <div id="amenities" className="min-h-[400px]" aria-hidden />
    </>
  );
}
