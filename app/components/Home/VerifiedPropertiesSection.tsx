"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  property_type: string;
  building_name: string | null;
  bhk: string;
  built_up_area: string;
  price: string;
  district: string;
  city: string;
  images: { uri: string }[];
  tbl_user_reg?: { name: string; category: string };
}

export default function VerifiedPropertiesSection() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          "https://vattaram.in/filter/city/filter/Res_Sell/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              district: "Vellore",
              rent_or_sell: "Buy",
            }),
          }
        );

        if (!res.ok) throw new Error("Failed to fetch properties");
        const data = await res.json();
        setProperties(data.message || []);
      } catch (error) {
        console.error("Error loading properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Custom arrow components
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:scale-110 hover:bg-accent/80 transition"
      aria-label="Next"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:scale-110 hover:bg-accent/80 transition"
      aria-label="Previous"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full py-20 px-8 bg-background text-foreground">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Verified Properties
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Explore handpicked homes in{" "}
            <span className="text-accent font-semibold">Vellore</span>
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto px-6 overflow-visible">
        {loading ? (
          <p className="text-center text-muted-foreground py-10 text-lg">
            Loading properties...
          </p>
        ) : properties.length > 0 ? (
          <Slider {...settings}>
            {properties.map((p, i) => (
              <div key={i} className="px-6 py-4">
                <div className="group rounded-2xl bg-card shadow-md hover:shadow-2xl transition-all duration-300 border border-border/40 hover:-translate-y-2 hover:scale-[1.02] overflow-visible">
                  <div className="relative h-60 w-full rounded-t-2xl overflow-hidden">
                    <Image
                      src={
                        p.images?.[0]?.uri ||
                        "https://via.placeholder.com/400x300?text=No+Image"
                      }
                      alt={p.building_name || "Property"}
                      fill
                      className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-1.5">
                    <h3 className="font-semibold text-lg truncate text-foreground">
                      {p.bhk} {p.property_type}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {p.city}, {p.district}
                    </p>
                    <p className="text-accent font-bold text-lg">{p.price}</p>
                    {p.tbl_user_reg && (
                      <p className="text-xs text-muted-foreground">
                        By {p.tbl_user_reg.name} ({p.tbl_user_reg.category})
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-muted-foreground py-10 text-lg">
            No properties found.
          </p>
        )}
      </div>
    </section>
  );
}
