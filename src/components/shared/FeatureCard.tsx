import React from "react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps): React.ReactElement {
  return (
    <article
      className={cn(
        "hover:border-ocean-200 rounded-xl border border-gray-200 bg-white p-6 transition duration-200 hover:shadow-md",
        className
      )}
    >
      <div
        className="bg-ocean-50 text-ocean-600 mb-4 inline-flex rounded-lg p-3"
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  );
}
