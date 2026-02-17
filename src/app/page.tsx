import React from "react";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <Features />
      <div id="gallery" className="min-h-[400px]" aria-hidden />
    </>
  );
}
