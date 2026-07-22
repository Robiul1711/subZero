"use client";

import React, { useState } from "react";
import {
  LuHardDrive,
  LuBattery,
  LuShieldCheck,
  LuCircleCheck,
  LuPackage,
  LuArrowLeft,
  LuShare2,
  LuHeart,
  LuMessageSquare,
} from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CollectionDetails = ({ productData }) => {
  // Sample data fallback matching reference image exactly if productData is not passed
  const defaultProduct = {
    title: 'MacBook Air 13" M3',
    conditionTag: "Like New",
    gradeTag: "Grade A+",
    description:
      "Practically unused MacBook Air M3. Only opened to test. Battery at 98% with only 12 cycles. Original charger and box included.",
    price: "£1099",
    originalPrice: "£1299",
    discount: "Save 15%",
    storage: "256GB",
    batteryHealth: "98%",
    warrantyPeriod: "256GB", // as shown in screenshot card icon warranty
    images: [
      "/images/macbook-main.png",
      "/images/macbook-side.png",
      "/images/macbook-top.png",
    ],
    techSpecs: [
      { key: "Chip", value: "Apple M3" },
      { key: "Display", value: '13.6" Liquid Retina' },
      { key: "RAM", value: "8GB Unified Memory" },
      { key: "Storage", value: "256GB SSD" },
      { key: "Battery", value: "Up To 18 Hours" },
      { key: "Ports", value: "2× USB-C / MagSafe 3" },
      { key: "Color", value: "Midnight" },
    ],
    conditionReport: [
      { name: "Screen", score: 100 },
      { name: "Body / Frame", score: 90 },
      { name: "Battery", score: 75 },
      { name: "Camera System", score: 56 },
      { name: "All Buttons / Ports", score: 70 },
    ],
  };

  const product = productData || defaultProduct;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="relative w-full pt-6">
      <div className="w-full section-padding-x pb-10">
        {/* Back Link & Quick Header Actions */}
        <div className="flex items-center justify-between mb-4 ">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors font-medium group"
          >
            <LuArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
            Back to Marketplace
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2.5 rounded-full border border-white/10 bg-[#141414] hover:border-primary/40 transition-colors ${
                isLiked ? "text-red-500 fill-red-500 border-red-500/30" : "text-secondary hover:text-white"
              }`}
              title="Save to favorites"
            >
              <LuHeart className="text-lg" />
            </button>
            <button
              className="p-2.5 rounded-full border border-white/10 bg-[#141414] text-secondary hover:text-white hover:border-primary/40 transition-colors"
              title="Share device details"
            >
              <LuShare2 className="text-lg" />
            </button>
          </div>
        </div>

        {/* TOP SECTION: Showcase & Buy Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          {/* Left Column: Image Showcase & Thumbnails (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Active Image Display */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0.8, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl bg-[#141414] border border-white/5 overflow-hidden shadow-2xl flex items-center justify-center group"
            >
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Thumbnail Selection List */}
            <div className="flex items-center gap-3 sm:gap-4 mt-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === idx
                      ? "border-primary shadow-lg shadow-primary/20 scale-105"
                      : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/30"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info & Purchase Action (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Badges Row */}
            <div className="flex items-center gap-3">
              <span className="bg-[#80CF16]/10 text-primary border border-primary/20 text-[11px] sm:text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                {product.conditionTag}
              </span>
              <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide">
                {product.gradeTag}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white mt-3 tracking-tight">
              {product.title}
            </h1>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Metric Highlight Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-6">
              {/* Storage Card */}
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-white/10">
                <LuHardDrive className="text-xl sm:text-2xl text-white/50 mb-1.5" />
                <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {product.storage}
                </span>
                <span className="text-[10px] sm:text-xs text-secondary mt-0.5 font-medium">
                  Storage
                </span>
              </div>

              {/* Battery Card */}
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-white/10">
                <LuBattery className="text-xl sm:text-2xl text-primary mb-1.5" />
                <span className="text-sm sm:text-base font-bold text-primary tracking-tight">
                  {product.batteryHealth}
                </span>
                <span className="text-[10px] sm:text-xs text-secondary mt-0.5 font-medium">
                  Battery
                </span>
              </div>

              {/* Warranty Card */}
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-white/10">
                <LuShieldCheck className="text-xl sm:text-2xl text-white/50 mb-1.5" />
                <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {product.warrantyPeriod}
                </span>
                <span className="text-[10px] sm:text-xs text-secondary mt-0.5 font-medium">
                  Warranty
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                {product.price}
              </span>
              <span className="text-base sm:text-lg text-secondary line-through">
                {product.originalPrice}
              </span>
              <span className="bg-primary/15 text-primary text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-md border border-primary/20">
                {product.discount}
              </span>
            </div>

            {/* Contact Us CTA Button */}
            <Link href="/contact" className="w-full">
              <button className="w-full bg-gradient-to-r from-[#80CF16] to-[#92e21b] text-black font-extrabold text-base sm:text-lg py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(128,207,22,0.25)] hover:shadow-[0_0_30px_rgba(128,207,22,0.45)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                <LuMessageSquare className="text-lg" />
                Contact Us
              </button>
            </Link>

            {/* Value Proposition Checklist */}
            <div className="mt-6 flex flex-col gap-3 pt-2 border-t border-white/5">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary font-medium">
                <LuShieldCheck className="text-primary text-base flex-shrink-0" />
                <span>6-month warranty on all certified pre-owned devices</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary font-medium">
                <LuCircleCheck className="text-primary text-base flex-shrink-0" />
                <span>32-point quality inspection completed</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary font-medium">
                <LuPackage className="text-primary text-base flex-shrink-0" />
                <span>Free next-day delivery or in-store pickup</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Technical Specs & Condition Report */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Specifications Container */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6">
                Technical Specifications
              </h2>
              <div className="flex flex-col">
                {product.techSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3.5 border-b border-white/5 last:border-none text-xs sm:text-sm"
                  >
                    <span className="text-secondary font-medium">{spec.key}</span>
                    <span className="text-white font-semibold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Condition Report Container */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6">
                Condition Report
              </h2>
              <div className="flex flex-col gap-4">
                {product.conditionReport.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-secondary font-medium">
                        {item.name}
                      </span>
                      <span className="text-primary font-bold">{item.score}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 sm:h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Inspection Notice Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3 items-start mt-6">
              <LuCircleCheck className="text-primary text-xl flex-shrink-0 mt-0.5" />
              <p className="text-xs text-secondary leading-relaxed">
                This device has passed our 32-point certification inspection. Grade{" "}
                <span className="font-semibold text-white">A+</span> means it meets our
                standards for <span className="font-semibold text-white">Like New</span>{" "}
                classification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionDetails;
