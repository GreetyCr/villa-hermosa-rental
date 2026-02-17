import React from "react";
import {
  Armchair,
  BedDouble,
  Bike,
  Car,
  Coffee,
  Droplets,
  FlameKindling,
  Lock,
  Refrigerator,
  Sailboat,
  Snowflake,
  Tv,
  Users,
  UtensilsCrossed,
  Waves,
  WashingMachine,
  Wifi,
} from "lucide-react";
import type { AmenityCategory } from "@/types";

const AMENITIES_HEADING = {
  title: "Amenities & Features",
  subtitle: "Every detail designed for your comfort and convenience",
} as const;

const iconClassName = "h-5 w-5 shrink-0 text-ocean-600";

const amenityCategories: AmenityCategory[] = [
  {
    title: "Comfort & Climate",
    items: [
      {
        name: "Air conditioning in all bedrooms",
        icon: <Snowflake className={iconClassName} aria-hidden />,
      },
      {
        name: "Air conditioning in kitchen and living area",
        icon: <Snowflake className={iconClassName} aria-hidden />,
      },
      {
        name: "Hot water throughout",
        icon: <Droplets className={iconClassName} aria-hidden />,
      },
      {
        name: "Smart lock entry — code or fingerprint",
        icon: <Lock className={iconClassName} aria-hidden />,
      },
    ],
  },
  {
    title: "Entertainment",
    items: [
      {
        name: "Large Smart TV in kitchen/dining area",
        icon: <Tv className={iconClassName} aria-hidden />,
      },
      {
        name: "Smart TV in master bedroom",
        icon: <Tv className={iconClassName} aria-hidden />,
      },
      {
        name: "High-speed WiFi throughout",
        icon: <Wifi className={iconClassName} aria-hidden />,
      },
    ],
  },
  {
    title: "Kitchen",
    items: [
      {
        name: "Full kitchen with induction cooktop",
        icon: <UtensilsCrossed className={iconClassName} aria-hidden />,
      },
      {
        name: "Air fryer oven",
        icon: <FlameKindling className={iconClassName} aria-hidden />,
      },
      {
        name: "Instant coffee maker",
        icon: <Coffee className={iconClassName} aria-hidden />,
      },
      {
        name: "Refrigerator and freezer",
        icon: <Refrigerator className={iconClassName} aria-hidden />,
      },
      {
        name: "Equipped for up to 6 guests",
        icon: <Users className={iconClassName} aria-hidden />,
      },
    ],
  },
  {
    title: "Outdoor",
    items: [
      {
        name: "Private swimming pool with children's area",
        icon: <Waves className={iconClassName} aria-hidden />,
      },
      {
        name: "Covered terrace with lounge seating",
        icon: <Armchair className={iconClassName} aria-hidden />,
      },
      {
        name: "Portable charcoal grill (wheeled, outdoor)",
        icon: <FlameKindling className={iconClassName} aria-hidden />,
      },
      {
        name: "Lake access — kayak, paddleboard, water sports",
        icon: <Sailboat className={iconClassName} aria-hidden />,
      },
      {
        name: "Walking and cycling paths within community",
        icon: <Bike className={iconClassName} aria-hidden />,
      },
    ],
  },
  {
    title: "Convenience",
    items: [
      {
        name: "Private covered parking — 2 large or 3 small vehicles",
        icon: <Car className={iconClassName} aria-hidden />,
      },
      {
        name: "Washer and dryer",
        icon: <WashingMachine className={iconClassName} aria-hidden />,
      },
      {
        name: "Linens, towels, and pillows included",
        icon: <BedDouble className={iconClassName} aria-hidden />,
      },
    ],
  },
];

export function Amenities(): React.ReactElement {
  return (
    <section
      id="amenities"
      className="bg-gray-50 py-20"
      aria-labelledby="amenities-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="amenities-heading"
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            {AMENITIES_HEADING.title}
          </h2>
          <p className="text-lg text-gray-600">{AMENITIES_HEADING.subtitle}</p>
        </header>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {amenityCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
