import React from "react";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Gallery } from "@/components/home/Gallery";
import { Amenities } from "@/components/home/Amenities";
import { Location } from "@/components/home/Location";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Amenities />
      <Location />
      <div id="testimonials" className="min-h-[400px]" aria-hidden />
    </>
  );
}
