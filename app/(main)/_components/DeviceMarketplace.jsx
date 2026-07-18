"use client";

import React, { useState } from "react";
import { LuSearch, LuSmartphone, LuTablet, LuLaptop } from "react-icons/lu";

const DeviceMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const devices = [
    {
      name: "iPhone 15 Pro",
      category: "phone",
      price: "$649",
      originalPrice: "$999",
      condition: "Like New",
      icon: LuSmartphone,
    },
    {
      name: "Galaxy S24 Ultra",
      category: "phone",
      price: "$589",
      originalPrice: "$899",
      condition: "Excellent",
      icon: LuSmartphone,
    },
    {
      name: "MacBook Air M3",
      category: "laptop",
      price: "$849",
      originalPrice: "$1299",
      condition: "Refurbished",
      icon: LuLaptop,
    },
    {
      name: "iPad Pro 12.9\"",
      category: "tablet",
      price: "$479",
      originalPrice: "$799",
      condition: "Like New",
      icon: LuTablet,
    },
    {
      name: "iPhone 15 Pro",
      category: "phone",
      price: "$649",
      originalPrice: "$999",
      condition: "Like New",
      icon: LuSmartphone,
    },
    {
      name: "Galaxy S24 Ultra",
      category: "phone",
      price: "$589",
      originalPrice: "$899",
      condition: "Excellent",
      icon: LuSmartphone,
    },
    {
      name: "MacBook Air M3",
      category: "laptop",
      price: "$849",
      originalPrice: "$1299",
      condition: "Refurbished",
      icon: LuLaptop,
    },
    {
      name: "iPad Pro 12.9\"",
      category: "tablet",
      price: "$479",
      originalPrice: "$799",
      condition: "Like New",
      icon: LuTablet,
    },
    {
      name: "iPhone 15 Pro",
      category: "phone",
      price: "$649",
      originalPrice: "$999",
      condition: "Like New",
      icon: LuSmartphone,
    },
    {
      name: "Galaxy S24 Ultra",
      category: "phone",
      price: "$589",
      originalPrice: "$899",
      condition: "Excellent",
      icon: LuSmartphone,
    },
    {
      name: "MacBook Air M3",
      category: "laptop",
      price: "$849",
      originalPrice: "$1299",
      condition: "Refurbished",
      icon: LuLaptop,
    },
    {
      name: "iPad Pro 12.9\"",
      category: "tablet",
      price: "$479",
      originalPrice: "$799",
      condition: "Like New",
      icon: LuTablet,
    },
  ];

  const getConditionColor = (cond) => {
    switch (cond.toLowerCase()) {
      case "like new":
        return "bg-primary/10 border-primary/20 text-primary";
      case "excellent":
        return "bg-green-500/10 border-green-500/20 text-green-400";
      case "refurbished":
        return "bg-yellow-500/10 border-yellow-500/20 text-yellow-400";
      default:
        return "bg-white/10 border-white/20 text-white";
    }
  };

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative w-full pt-8 sm:pt-12 pb-10  overflow-hidden z-10">

      <div className="w-full section-padding-x max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            Certified Pre-Owned
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            Device Marketplace
          </h1>
          <p className="mt-4 text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed">
            Grade-A certified pre-owned smartphones, laptops, tablets, and more. Every device inspected, graded, and warranted.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10 md:mb-16 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-secondary">
            <LuSearch className="text-lg" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or brand..."
            className="w-full bg-[#121212]/80 border border-white/10 rounded-full py-2 sm:py-4 pl-10 md:pl-12 pr-6 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-all duration-300"
          />
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDevices.map((device, index) => {
            const DeviceIcon = device.icon;
            return (
              <div
                key={index}
                className="bg-[#121212]/40 border border-white/5 hover:border-primary/20 rounded-[24px] p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.01] group"
              >
                <div>
                  {/* Device Icon Showcase Area */}
                  <div className="w-full aspect-[4/3] rounded-2xl bg-[#0a0a0a]/60 border border-white/5 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#121212]/80">
                    <DeviceIcon className="text-3xl text-white/30 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/70" />
                  </div>

                  {/* Condition Badge */}
                  <span
                    className={`inline-block border text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${getConditionColor(
                      device.condition
                    )}`}
                  >
                    {device.condition}
                  </span>

                  {/* Device Name */}
                  <h3 className="text-base sm:text-lg font-bold text-white mt-3 tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {device.name}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-primary font-extrabold text-lg">
                      {device.price}
                    </span>
                    <span className="text-secondary text-sm line-through">
                      {device.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Enquiry Button */}
                <button className="w-full py-2.5 mt-5 rounded-xl border border-white/10 hover:border-primary bg-transparent text-white hover:text-black hover:bg-primary text-xs font-semibold tracking-wide transition-all duration-300 text-center cursor-pointer">
                  Enquire Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeviceMarketplace;
