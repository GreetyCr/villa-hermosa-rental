import React from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

const TESTIMONIALS_HEADING = {
  title: "What Our Guests Say",
  subtitle: "Real experiences from families who've stayed at Casa Guarguaridad",
} as const;

const testimonials: Testimonial[] = [
  {
    id: "1",
    guestName: "Roger",
    location: "Airbnb Guest",
    rating: 5,
    date: "July 2025",
    stayType: "Multi-night stay",
    text: "El alojamiento cumple con lo prometido y más, había botellas de agua, café y bastante hielo. La piscina muy linda y limpia. Las camas muy confortables con sabanas limpias. Buen servicio de Televisión por Cable y velocidad de internet. Realmente valió la pena!",
  },
  {
    id: "2",
    guestName: "Nicholas",
    location: "Airbnb Guest · 11 years",
    rating: 5,
    date: "October 2023",
    stayType: "Multi-night stay",
    text: "Excelente lugar, exactamente como lo describió Randall. ¡Maravilloso lugar para los amantes de la pesca y del pedalboard!",
  },
  {
    id: "3",
    guestName: "Yves Jean",
    location: "Val-Morin, Canada",
    rating: 5,
    date: "November 2023",
    stayType: "Multi-night stay",
    text: "Ubicación de elección, lugar muy bonito y seguro, la casa tiene todas las comodidades. Lo recomiendo",
  },
];

function RatingStars({ rating }: { rating: number }): React.ReactElement {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Testimonials(): React.ReactElement {
  return (
    <section
      id="testimonials"
      className="bg-ocean-600 py-20 text-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="testimonials-heading"
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            {TESTIMONIALS_HEADING.title}
          </h2>
          <p className="text-lg text-white/90">
            {TESTIMONIALS_HEADING.subtitle}
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-xl bg-white/10 p-6 backdrop-blur transition-[filter] hover:brightness-110"
            >
              <RatingStars rating={testimonial.rating} />
              <p className="mt-4 text-white/90">{testimonial.text}</p>
              <div className="mt-6 border-t border-white/20 pt-4">
                <p className="font-semibold">{testimonial.guestName}</p>
                <p className="text-sm text-white/80">{testimonial.location}</p>
                <p className="text-sm text-white/80">{testimonial.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
