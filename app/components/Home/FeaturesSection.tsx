"use client";

import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "Direct Owner's Contact",
      description: "Owners contact details available for direct communication.",
      icon: "/icons/features-section/direct-owner-icon.svg",
    },
    {
      title: "Free Listing",
      description:
        "Post your property for free whether it's a home, shop or land.",
      icon: "/icons/features-section/rent.svg",
    },
    {
      title: "Shortlist without visit",
      description: "Explore and shortlist homes without stepping out.",
      icon: "/icons/features-section/post.svg",
    },
    {
      title: "Guide Yourself",
      description: "Explore. Compare,Decide — your way.",
      icon: "/icons/features-section/services.svg",
    },
    {
      title: "All Property Info",
      description: "From price to amenities all info, no confusion.",
      icon: "/icons/features-section/commercial.svg",
    },
    {
      title: "Reliable Service",
      description: "ETrustworthy and helpful service you can count on",
      icon: "/icons/features-section/verified.svg",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-1 bg-background text-foreground">
      <h2 className="text-4xl font-bold mb-35 text-center">
        Why Choose <span className="text-primary">Vattara</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl rounded-2xl p-8 flex flex-col items-left text-left transition duration-300"
          >
            {/* --- Icon --- */}
            <div className="w-16 h-16 mb-4">
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                width={64}
                height={64}
                className="object-contain opacity-90"
              />
            </div>

            {/* --- Title --- */}
            <h3 className="text-2xl font-semibold text-primary mb-3">
              {feature.title}
            </h3>

            {/* --- Description --- */}
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
