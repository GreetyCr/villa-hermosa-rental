import React from "react";
import {
  Cross,
  MapPin,
  ShoppingBag,
  ShoppingCart,
  Umbrella,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { PROPERTY_LOCATION } from "@/constants";

const LOCATION_HEADING = {
  title: "Perfect Location",
  subtitle:
    "Tranquility of Playa Hermosa with easy access to everything the Pacific coast offers",
} as const;

const iconClassName = "h-5 w-5 shrink-0 text-ocean-600";

const nearbyAttractions = [
  {
    name: "Playa Hermosa",
    distance: "Direct community access",
    icon: <Waves className={iconClassName} aria-hidden />,
  },
  {
    name: "Jacó Center",
    distance: "10 km · 7 min drive",
    icon: <ShoppingBag className={iconClassName} aria-hidden />,
  },
  {
    name: "Herradura Beach",
    distance: "15 km · 12 min drive",
    icon: <Umbrella className={iconClassName} aria-hidden />,
  },
  {
    name: "Local Restaurants",
    distance: "5–10 km",
    icon: <UtensilsCrossed className={iconClassName} aria-hidden />,
  },
  {
    name: "Supermarket",
    distance: "8 km",
    icon: <ShoppingCart className={iconClassName} aria-hidden />,
  },
  {
    name: "Jacó Hospital",
    distance: "12 km",
    icon: <Cross className={iconClassName} aria-hidden />,
  },
] as const;

export function Location(): React.ReactElement {
  return (
    <section
      id="location"
      className="bg-white py-20"
      aria-labelledby="location-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="location-heading"
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            {LOCATION_HEADING.title}
          </h2>
          <p className="text-lg text-gray-600">{LOCATION_HEADING.subtitle}</p>
        </header>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column — Map */}
          <div>
            <div className="aspect-4/3 w-full overflow-hidden rounded-xl">
              <iframe
                src={PROPERTY_LOCATION.googleMapsEmbed}
                title={`Map showing ${PROPERTY_LOCATION.name} location`}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={PROPERTY_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-ocean-600 text-ocean-600 hover:bg-ocean-50 mt-4 inline-block rounded-lg border-2 px-6 py-3 font-semibold transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Right column — Nearby attractions + address */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Nearby Attractions
            </h3>
            <ul className="space-y-4">
              {nearbyAttractions.map((attraction) => (
                <li
                  key={attraction.name}
                  className="flex items-center gap-4 rounded-lg bg-gray-50 p-4"
                >
                  <div
                    className="bg-ocean-50 text-ocean-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    aria-hidden
                  >
                    {attraction.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-medium text-gray-900">
                      {attraction.name}
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                      {attraction.distance}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <MapPin
                className="text-ocean-600 mt-0.5 h-5 w-5 shrink-0"
                aria-hidden
              />
              <div className="text-sm text-gray-700">
                <p className="font-medium text-gray-900">
                  {PROPERTY_LOCATION.address}
                </p>
                <p className="mt-1 text-gray-600">
                  {PROPERTY_LOCATION.plusCode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
