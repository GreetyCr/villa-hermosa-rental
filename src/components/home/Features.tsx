import React from "react";
import { Car, Home, Trees, Waves, Wifi, UtensilsCrossed } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

const FEATURES_HEADING = {
  title: "Everything You Need for the Perfect Stay",
  subtitle:
    "Our luxury villa combines modern amenities with natural beauty to create an unforgettable vacation experience.",
} as const;

const iconClassName = "h-6 w-6 text-ocean-600";

const features = [
  {
    id: "private-pool-lake",
    title: "Private Pool & Lake",
    description:
      "Private swimming pool with children's area plus exclusive lake access for kayaking and water sports",
    icon: <Waves className={iconClassName} aria-hidden />,
  },
  {
    id: "gourmet-kitchen",
    title: "Gourmet Kitchen",
    description:
      "Fully equipped modern kitchen with induction cooktop, air fryer oven, coffee maker, rice cooker, and appliances for up to 6 guests",
    icon: <UtensilsCrossed className={iconClassName} aria-hidden />,
  },
  {
    id: "high-speed-wifi",
    title: "High-Speed WiFi",
    description:
      "Reliable high-speed WiFi throughout the entire property, perfect for remote work or streaming",
    icon: <Wifi className={iconClassName} aria-hidden />,
  },
  {
    id: "private-parking",
    title: "Private Parking",
    description:
      "Secure covered parking for 2 large vehicles or 3 small cars with direct villa access",
    icon: <Car className={iconClassName} aria-hidden />,
  },
  {
    id: "nature-sports",
    title: "Nature & Sports",
    description:
      "Large community with walking trails, bike paths, mountain bike track, and direct beach access to Playa Hermosa",
    icon: <Trees className={iconClassName} aria-hidden />,
  },
  {
    id: "smart-comfort",
    title: "Smart Comfort",
    description:
      "Air conditioning in all rooms, Smart TVs, smart lock entry (code/fingerprint), and hot water throughout",
    icon: <Home className={iconClassName} aria-hidden />,
  },
] as const;

export function Features(): React.ReactElement {
  return (
    <section
      id="features"
      className="bg-gray-50 py-20"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="features-heading"
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            {FEATURES_HEADING.title}
          </h2>
          <p className="text-lg text-gray-600">{FEATURES_HEADING.subtitle}</p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
