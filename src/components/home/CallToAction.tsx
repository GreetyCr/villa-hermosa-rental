import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/constants";

const CTA_HEADING = {
  headline: "Ready to Experience Casa Guarguaridad?",
  subheadline:
    "Your perfect Costa Rican getaway is just a click away. Book now and start planning your dream vacation.",
  primaryLabel: "Check Availability",
  secondaryLabel: "Learn More",
  contactPrefix: "Questions? Contact us at",
} as const;

export function CallToAction(): React.ReactElement {
  return (
    <section
      id="cta"
      className="from-ocean-600 to-tropical-600 bg-linear-to-r py-20 text-white"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="cta-heading" className="mb-4 text-3xl font-bold md:text-4xl">
          {CTA_HEADING.headline}
        </h2>
        <p className="mb-8 text-lg text-white/90">{CTA_HEADING.subheadline}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/book"
            className="text-ocean-600 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold transition-transform hover:scale-105"
          >
            <Calendar className="h-5 w-5" aria-hidden />
            {CTA_HEADING.primaryLabel}
          </Link>
          <Link
            href="/the-villa"
            className="inline-flex rounded-lg border-2 border-white bg-white/0 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
          >
            {CTA_HEADING.secondaryLabel}
          </Link>
        </div>
        <p className="mt-8 text-sm text-white/80">
          {CTA_HEADING.contactPrefix}{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="underline hover:text-white"
          >
            {CONTACT_INFO.email}
          </a>
        </p>
      </div>
    </section>
  );
}
