import React from "react";
import { Hero } from "@/components/home/Hero";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <div
        id="features"
        className="h-screen min-h-[400px] bg-gray-100"
        aria-hidden
      />
    </>
  );
}
