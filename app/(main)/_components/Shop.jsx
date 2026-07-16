"use client";

import React from "react";
import Image from "next/image";
import { GlowButton } from "@/components/common/GlowButton";
import phone1 from "@/assets/phone1.png";
import phone2 from "@/assets/phone2.png";

const Shop = () => {
  const devices = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      badge: "Like New",
      price: "$649",
      originalPrice: "$999",
      image: phone1,
    },
    {
      id: 2,
      title: "Galaxy S24 Ultra",
      badge: "Excellent",
      price: "$589",
      originalPrice: "$899",
      image: phone2,
    },
    {
      id: 3,
      title: "MacBook Air M3",
      badge: "Refurbished",
      price: "$849",
      originalPrice: "$1299",
      image: phone1,
    },
    {
      id: 4,
      title: 'iPad Pro 12.9"',
      badge: "Like New",
      price: "$479",
      originalPrice: "$799",
      image: phone2,
    },
  ];

  return (
    <section className="w-full ">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full section-padding-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            Shop
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            Certified Pre-Owned Devices
          </h2>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-[#121212]/30 border border-white/5 hover:border-primary/20 rounded-[24px] p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.01] group cursor-default"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden">
                  <Image
                    src={device.image}
                    alt={device.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 flex flex-col items-start">
                  {/* Status Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-primary/10 border border-primary/20 text-primary mb-3">
                    {device.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {device.title}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-xl font-bold text-primary">
                      {device.price}
                    </span>
                    <span className="text-xs sm:text-sm text-secondary line-through font-medium">
                      {device.originalPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-2.5 rounded-[12px] border border-white/10 bg-white/[0.02] text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-[#0D0D0D]">
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <GlowButton>View All</GlowButton>
        </div>
      </div>
    </section>
  );
};

export default Shop;
