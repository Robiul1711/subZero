"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuCheck, LuChevronLeft, LuChevronRight } from "react-icons/lu";

// Import assets
import iphoneImg from "@/assets/iphone.png";

const modelsData = [
  {
    id: 0,
    name: "iPad Pro 12.9",
    repairs: [
      { name: "LCD Screen", price: "$256", warranty: "12 month warranty" },
      { name: "LCD Screen", price: "$256", warranty: "12 month warranty" },
      { name: "LCD Screen", price: "$256", warranty: "12 month warranty" },
    ],
  },
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    repairs: [
      { name: "Screen Replacement", price: "$329", warranty: "12 month warranty" },
      { name: "Battery Replacement", price: "$99", warranty: "12 month warranty" },
      { name: "Back Glass Repair", price: "$149", warranty: "12 month warranty" },
    ],
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    repairs: [
      { name: "Screen Replacement", price: "$299", warranty: "12 month warranty" },
      { name: "Battery Replacement", price: "$89", warranty: "12 month warranty" },
      { name: "Back Glass Repair", price: "$129", warranty: "12 month warranty" },
    ],
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max",
    repairs: [
      { name: "Screen Replacement", price: "$279", warranty: "12 month warranty" },
      { name: "Battery Replacement", price: "$79", warranty: "12 month warranty" },
      { name: "Back Glass Repair", price: "$119", warranty: "12 month warranty" },
    ],
  },
];

const PhoneModelAndPrice = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeModel = modelsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? modelsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === modelsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-12 md:py-24  overflow-hidden z-10 section-padding-x">
      {/* Background Radial Glow */}

      <div className=" relative">
        
        {/* Title Graphic / Image Header */}
        <div className="relative lg:absolute lg:top-[-50px] lg:left-1/2 lg:-translate-x-1/2 w-full px-4 z-0 pointer-events-none mb-8 lg:mb-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex justify-center items-center"
          >
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl xl:text-[110px] font-black uppercase tracking-wide text-transparent select-none text-center"
              style={{
                WebkitTextStroke: "2.5px #80CF16",
                textStroke: "2.5px #80CF16",
                transform: "scaleY(1.45) scaleX(1.1)",
                transformOrigin: "center",
                display: "inline-block"
              }}
            >
              Phone Model & Price
            </h2>
          </motion.div>
        </div>

        {/* 3-Column Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:pt-44">
          
          {/* Column 1: Large iPhone Image */}
          <div className="lg:col-span-4 flex justify-center order-2 lg:order-1 mt-6 lg:mt-0 relative z-20">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] drop-shadow-[0_0_35px_rgba(128,207,22,0.15)]"
            >
              <Image
                src={iphoneImg}
                alt="Selected Phone Preview"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Column 2: Central Pricing Card & Slider Controls */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
            
            {/* Pricing Card */}
            <div className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/[0.04] rounded-[28px] p-6 sm:p-10 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* Card Contents with AnimatePresence for smooth transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1"
                >
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                      Repairs for {activeModel.name}
                    </h3>
                    <p className="text-secondary/60 text-xs sm:text-sm">
                      Tap to add to your booking. Live pricing
                    </p>
                    <div className="w-full h-[1px] bg-white/[0.05] mt-5" />
                  </div>

                  <div className="flex flex-col gap-3">
                    {activeModel.repairs.map((repair, idx) => (
                      <div
                        key={idx}
                        className="bg-white/[0.02] border border-white/5 rounded-[16px] p-4 sm:px-6 sm:py-5 flex items-center justify-between hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                      >
                        <div className="flex flex-col gap-1.5">
                          <h4 className="text-sm sm:text-base font-bold text-white">
                            {repair.name}
                          </h4>
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-primary font-semibold">
                            <span className="w-4 h-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                              <LuCheck size={10} />
                            </span>
                            <span>{repair.warranty}</span>
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl font-black text-primary">
                          {repair.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label="Previous Model"
              >
                <LuChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black hover:bg-primary/95 transition-all duration-300 shadow-[0_0_20px_rgba(128,207,22,0.3)] active:scale-95 cursor-pointer"
                aria-label="Next Model"
              >
                <LuChevronRight size={20} className="stroke-[3]" />
              </button>
            </div>

          </div>

          {/* Column 3: Vertical Thumbnails List */}
          <div className="lg:col-span-2 flex lg:flex-col flex-row justify-center lg:justify-start gap-4 order-3 overflow-x-auto max-w-full py-2 px-1 scrollbar-none">
            {modelsData.map((model, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 w-[70px] h-[110px] sm:w-[80px] sm:h-[130px] rounded-[18px] bg-[#121212] border transition-all duration-300 p-2 overflow-hidden flex items-center justify-center cursor-pointer ${
                    isActive
                      ? "border-primary shadow-[0_0_15px_rgba(128,207,22,0.25)] scale-105"
                      : "border-white/5 hover:border-white/20 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={iphoneImg}
                      alt={model.name}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 80px, 100px"
                    />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhoneModelAndPrice;
