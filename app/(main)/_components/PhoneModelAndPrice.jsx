"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuCheck, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useGetRepairPhoneCmsQuery } from "@/redux/api/apiSlice";

// Import fallback assets
import iphoneImg from "@/assets/iphone.png";

const defaultModelsData = [
  {
    id: 0,
    title: "Screen Repair",
    shortText: "Get your cracked or broken phone screen fixed quickly.",
    image: iphoneImg,
    repairs: [
      {
        name: "Standard Screen Replacement",
        price: "$99",
        warranty: "LCD Screen, 3 Months Warranty",
      },
      {
        name: "Premium OLED Screen Replacement",
        price: "$149",
        warranty: "Original OLED, 1 Year Warranty",
      },
    ],
  },
  {
    id: 1,
    title: "Battery Replacement",
    shortText: "Restore your phone's battery life to 100%.",
    image: iphoneImg,
    repairs: [
      {
        name: "Premium Battery Replacement",
        price: "$49",
        warranty: "OEM Battery, 6 Months Warranty",
      },
    ],
  },
  {
    id: 2,
    title: "Charging Port Repair",
    shortText: "Fix charging issues and broken USB/Lightning ports.",
    image: iphoneImg,
    repairs: [
      {
        name: "USB-C Port Replacement",
        price: "$59",
        warranty: "Standard Type-C Port, 3 Months Warranty",
      },
    ],
  },
  {
    id: 3,
    title: "Water Damage Diagnostic",
    shortText: "Complete diagnostic and cleaning for liquid damaged phones.",
    image: iphoneImg,
    repairs: [
      {
        name: "Ultrasonic Cleaning & Diagnosis",
        price: "$39",
        warranty: "Full diagnostic report",
      },
    ],
  },
];

const PhoneModelAndPrice = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: repairPhoneCmsResponse, isLoading } = useGetRepairPhoneCmsQuery();
  const cmsData = repairPhoneCmsResponse?.data || {};

  const cmsSections = [
    cmsData.section_1,
    cmsData.section_2,
    cmsData.section_3,
    cmsData.section_4,
  ].filter(Boolean);

  const repairSectionsList = cmsSections.length > 0
    ? cmsSections.map((sec, idx) => ({
        id: idx,
        title: sec.title,
        shortText: sec.short_text,
        image: sec.image || iphoneImg,
        repairs: (sec.features || []).map((f) => ({
          name: f.name,
          price: f.price,
          warranty: f.feature,
        })),
      }))
    : defaultModelsData;

  const activeModel = repairSectionsList[activeIndex % repairSectionsList.length] || repairSectionsList[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? repairSectionsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === repairSectionsList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden z-10 section-padding-x">
      <div className="relative">
        
        {/* Title Graphic Header */}
        <div className="w-full px-4 z-10 mb-6 sm:mb-10 md:mb-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full flex justify-center items-center"
          >
            <h2
              className="text-2xl xs:text-4xl sm:text-5xl md:text-7xl xl:text-[110px] font-black uppercase tracking-wider select-none text-center"
              style={{
                background: "linear-gradient(180deg, #80CF16 0%, #000000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transform: "scaleY(1.3) scaleX(1.18)",
                transformOrigin: "center",
                display: "inline-block",
              }}
            >
              Repair Services & Price
            </h2>
          </motion.div>
        </div>

        {/* 3-Column Layout */}
        {isLoading ? (
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:pt-6 animate-pulse">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-[280px] h-[500px] bg-white/5 rounded-3xl" />
            </div>
            <div className="lg:col-span-6">
              <div className="w-full h-[400px] bg-white/5 rounded-[28px]" />
            </div>
            <div className="lg:col-span-2 flex lg:flex-col gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[80px] h-[120px] bg-white/5 rounded-[18px]" />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:pt-6">
            
            {/* Column 1: Large Repair Service Image */}
            <div className="lg:col-span-4 flex justify-center order-2 lg:order-1 mt-6 lg:mt-0 relative z-20">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="relative w-[280px] h-[480px] sm:w-[320px] sm:h-[540px] drop-shadow-[0_0_35px_rgba(128,207,22,0.15)] flex items-center justify-center rounded-3xl overflow-hidden"
              >
                {typeof activeModel.image === "string" ? (
                  <img
                    src={activeModel.image}
                    alt={activeModel.title}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <Image
                    src={activeModel.image}
                    alt={activeModel.title}
                    fill
                    priority
                    className="object-contain p-2"
                  />
                )}
              </motion.div>
            </div>

            {/* Column 2: Central Pricing Card & Slider Controls */}
            <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
              {/* Pricing Card */}
              <div className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/[0.04] rounded-[28px] p-6 sm:p-10 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
                
                {/* Card Contents with AnimatePresence */}
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
                        {activeModel.title}
                      </h3>
                      {activeModel.shortText && (
                        <p className="text-secondary/80 text-xs sm:text-sm">
                          {activeModel.shortText}
                        </p>
                      )}
                      <div className="w-full h-[1px] bg-white/[0.05] mt-5" />
                    </div>

                    <div className="flex flex-col gap-3">
                      {activeModel.repairs && activeModel.repairs.length > 0 ? (
                        activeModel.repairs.map((repair, idx) => (
                          <div
                            key={idx}
                            className="bg-white/[0.02] border border-white/5 rounded-[16px] p-4 sm:px-6 sm:py-5 flex items-center justify-between hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                          >
                            <div className="flex flex-col gap-1.5 max-w-[70%]">
                              <h4 className="text-sm sm:text-base font-bold text-white">
                                {repair.name}
                              </h4>
                              {repair.warranty && (
                                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-primary font-semibold">
                                  <span className="w-4 h-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <LuCheck size={10} />
                                  </span>
                                  <span>{repair.warranty}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-lg sm:text-xl font-black text-primary shrink-0">
                              {repair.price}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-secondary text-sm">No services listed for this section.</p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-300 active:scale-95 cursor-pointer"
                  aria-label="Previous Service"
                >
                  <LuChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black hover:bg-primary/95 transition-all duration-300 shadow-[0_0_20px_rgba(128,207,22,0.3)] active:scale-95 cursor-pointer"
                  aria-label="Next Service"
                >
                  <LuChevronRight size={20} className="stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Column 3: Vertical Thumbnails List */}
            <div className="lg:col-span-2 flex lg:flex-col flex-row justify-center lg:justify-start gap-4 order-3 overflow-x-auto max-w-full py-2 px-1 scrollbar-none">
              {repairSectionsList.map((sec, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex-shrink-0 w-[80px] h-[110px] sm:w-[90px] sm:h-[120px] rounded-[18px] bg-[#121212] border transition-all duration-300 p-2 overflow-hidden flex flex-col items-center justify-center cursor-pointer ${
                      isActive
                        ? "border-primary shadow-[0_0_15px_rgba(128,207,22,0.25)] scale-105"
                        : "border-white/5 hover:border-white/20 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="relative w-full h-[70%]">
                      {typeof sec.image === "string" ? (
                        <img
                          src={sec.image}
                          alt={sec.title}
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <Image
                          src={sec.image}
                          alt={sec.title}
                          fill
                          className="object-contain p-1"
                        />
                      )}
                    </div>
                    <span className="text-[10px] text-white font-bold truncate w-full text-center mt-1">
                      {sec.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default PhoneModelAndPrice;
