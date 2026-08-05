"use client";

import React, { useState } from "react";
import {
  LuHardDrive,
  LuBattery,
  LuShieldCheck,
  LuCircleCheck,
  LuArrowLeft,
  LuShare2,
  LuMessageSquare,
  LuCheck,
} from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams, useSearchParams } from "next/navigation";
import { useGetProductConditionDetailsQuery } from "@/redux/api/apiSlice";
import iphoneImg from "@/assets/iphone.png";

const CollectionDetails = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  // Get product condition slug or ID from URL path or query string
  const productIdentifier = params?.id || searchParams?.get("slug") || searchParams?.get("id") || "iphone-13-pro-max-certified-pre-owned-excellent";

  const { data: response, isLoading, isError } = useGetProductConditionDetailsQuery(productIdentifier);

  const product = response?.data;

  const [selectedImage, setSelectedImage] = useState(0);
  const [copied, setCopied] = useState(false);



  if (isLoading) {
    return (
      <div className="w-full section-padding-x py-12 animate-pulse">
        <div className="h-6 bg-white/10 rounded w-32 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 h-[400px] bg-white/5 rounded-3xl" />
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-6 bg-white/10 rounded w-1/3" />
            <div className="h-10 bg-white/10 rounded w-3/4" />
            <div className="h-20 bg-white/5 rounded w-full" />
            <div className="h-12 bg-white/10 rounded w-full mt-6" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="w-full section-padding-x py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
        <p className="text-secondary mb-6">The requested product details could not be retrieved.</p>
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-black font-bold text-sm"
        >
          <LuArrowLeft /> Back to Marketplace
        </Link>
      </div>
    );
  }

  // Construct images list (main thumbnail + gallery images)
  const galleryImages = (product.gallaries || []).map((g) => g.image).filter(Boolean);
  const images = [product.thumbnail, ...galleryImages].filter(Boolean);
  if (images.length === 0) {
    images.push(iphoneImg);
  }

  const title = product.name;
  const conditionTag = product.condition || "Refurbished";
  const categoryName = product.category?.name || "Device";
  const shortDescription = product.short_description;

  const offerPrice = product.offer_price ? `$${product.offer_price}` : null;
  const oldPrice = product.old_price ? `$${product.old_price}` : null;
  const savePercent = product.save_percentage ? `Save ${Math.round(product.save_percentage)}%` : null;

  // Extract spec details from description object if exists
  const descObj = typeof product.description === "object" && product.description !== null ? product.description : {};
  const storageVal = descObj.Storage || product.storage || "N/A";
  const batteryHealthVal = descObj["Battery Health"] || product.battery_health || "Good";
  const warrantyVal = product.warranty || "1 Year Warranty";

  // Tech Specs entries
  const techSpecs = Object.entries(descObj).map(([key, value]) => ({ key, value }));

  // Condition Report entries
  const conditionReportObj = product.condition_reports?.[0]?.description || {};
  const conditionReportEntries = Object.entries(conditionReportObj).map(([key, value]) => ({
    name: key,
    value: value,
  }));
  const conditionNotes = product.condition_reports?.[0]?.notes;

  // Value Proposition / Offerings checklist
  const offerings = product.offering || [
    "1-Year Hardware Warranty",
    "Original Accessories Included",
    "Passed 90-Point Quality Inspection",
  ];

  const handleShare = async () => {

    const shareData = {
      title: product?.name || "Device Details",
      text: product?.short_description || "Check out this device!",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative w-full pt-6 pb-16">
      <div className="w-full section-padding-x ">
        {/* Back Link & Quick Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors font-medium group"
          >
            <LuArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
            Back to Marketplace
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#141414] text-secondary hover:text-white hover:border-primary/40 transition-all duration-300 text-xs sm:text-sm font-semibold cursor-pointer active:scale-95 shadow-sm"
              title="Share device details"
            >
              <LuShare2 className="text-base text-primary" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
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
              {typeof images[selectedImage] === "string" ? (
                <img
                  src={images[selectedImage]}
                  alt={title}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={images[selectedImage]}
                  alt={title}
                  fill
                  priority
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </motion.div>

            {/* Thumbnail Selection List */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 sm:gap-4 mt-2 overflow-x-auto pb-2 scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-300 shrink-0 bg-[#141414] p-1 ${
                      selectedImage === idx
                        ? "border-primary shadow-lg shadow-primary/20 scale-105"
                        : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    {typeof img === "string" ? (
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Purchase Action (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Badges Row */}
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary border border-primary/20 text-[11px] sm:text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                {conditionTag}
              </span>
              <span className="text-primary font-semibold text-xs sm:text-sm tracking-wide">
                {categoryName}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white mt-3 tracking-tight">
              {title}
            </h1>

            {/* Description */}
            {shortDescription && (
              <p className="mt-3 text-xs sm:text-sm text-secondary leading-relaxed">
                {shortDescription}
              </p>
            )}

            {/* Metric Highlight Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-6">
              {/* Storage Card */}
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-white/10">
                <LuHardDrive className="text-xl sm:text-2xl text-white/50 mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate w-full">
                  {storageVal}
                </span>
                <span className="text-[10px] sm:text-xs text-secondary mt-0.5 font-medium">
                  Storage
                </span>
              </div>

              {/* Battery Card */}
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-white/10">
                <LuBattery className="text-xl sm:text-2xl text-primary mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-primary tracking-tight truncate w-full">
                  {batteryHealthVal}
                </span>
                <span className="text-[10px] sm:text-xs text-secondary mt-0.5 font-medium">
                  Battery
                </span>
              </div>

              {/* Warranty Card */}
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-white/10">
                <LuShieldCheck className="text-xl sm:text-2xl text-white/50 mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate w-full">
                  {warrantyVal}
                </span>
                <span className="text-[10px] sm:text-xs text-secondary mt-0.5 font-medium">
                  Warranty
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="flex items-center gap-3 mb-6">
              {offerPrice ? (
                <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  {offerPrice}
                </span>
              ) : (
                <span className="text-xl font-bold text-white/60">Contact for Price</span>
              )}
              {oldPrice && (
                <span className="text-base sm:text-lg text-secondary line-through">
                  {oldPrice}
                </span>
              )}
              {savePercent && (
                <span className="bg-primary/15 text-primary text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-md border border-primary/20">
                  {savePercent}
                </span>
              )}
            </div>

            {/* Contact Us CTA Button */}
            <Link href="/contact" className="w-full">
              <button className="w-full bg-gradient-to-r from-[#80CF16] to-[#92e21b] text-black font-extrabold text-base sm:text-lg py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(128,207,22,0.25)] hover:shadow-[0_0_30px_rgba(128,207,22,0.45)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                <LuMessageSquare className="text-lg" />
                Contact Us for Enquiry
              </button>
            </Link>

            {/* Value Proposition Checklist */}
            <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-white/5">
              {offerings.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-secondary font-medium">
                  <LuCircleCheck className="text-primary text-base flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
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
              {techSpecs.length === 0 ? (
                <p className="text-secondary text-sm">No specifications listed.</p>
              ) : (
                <div className="flex flex-col">
                  {techSpecs.map((spec, index) => (
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
              )}
            </div>
          </div>

          {/* Condition Report Container */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6">
                Condition Report
              </h2>
              {conditionReportEntries.length === 0 ? (
                <p className="text-secondary text-sm">No condition details provided.</p>
              ) : (
                <div className="flex flex-col gap-3.5">
                  {conditionReportEntries.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-white/5 last:border-none text-xs sm:text-sm"
                    >
                      <span className="text-secondary font-medium">{item.name}</span>
                      <span className="text-primary font-bold flex items-center gap-1">
                        <LuCheck className="text-xs" /> {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Certification Inspection Notice Box */}
            {conditionNotes && (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3 items-start mt-6">
                <LuCircleCheck className="text-primary text-xl flex-shrink-0 mt-0.5" />
                <p className="text-xs text-secondary leading-relaxed">
                  <span className="font-semibold text-white">Technician Notes:</span> {conditionNotes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionDetails;
