"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GlowButton } from "@/components/common/GlowButton";
import { motion } from "framer-motion";
import phone1 from "@/assets/phone1.png";
import { useGetCombinedSectionsQuery, useGetProductConditionsQuery } from "@/redux/api/apiSlice";

const Shop = () => {
  const { data: combinedResponse } = useGetCombinedSectionsQuery();
  const { data: response, isLoading } = useGetProductConditionsQuery({ per_page: 4 });

  const marketplace = combinedResponse?.data?.marketplace || {};

  const badgeText = marketplace.title || "Certified Pre-Owned";
  const mainTitle = marketplace.sub_title || "Device Marketplace";
  const shortDescription = marketplace.short_description
    ? marketplace.short_description.replace(/<[^>]+>/g, "")
    : "";

  const apiProducts = response?.data || [];

  const defaultDevices = [
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
      image: phone1,
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
      image: phone1,
    },
  ];

  const devicesList = apiProducts.length > 0
    ? apiProducts.map((item) => ({
        id: item.id,
        slug: item.slug,
        productId: item.product_id || item.id,
        title: item.name,
        badge: item.condition || "Refurbished",
        price: item.offer_price ? `$${item.offer_price}` : "Contact Us",
        originalPrice: item.old_price ? `$${item.old_price}` : null,
        image: item.thumbnail || phone1,
      }))
    : defaultDevices;


  return (
    <section className="relative w-full ">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full section-padding-x">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            {badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            {mainTitle}
          </h2>
          {shortDescription && (
            <p className="mt-4 text-xs sm:text-sm md:text-base text-secondary leading-relaxed max-w-2xl mx-auto">
              {shortDescription}
            </p>
          )}
        </motion.div>

        {/* Devices Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#121212]/30 border border-white/5 rounded-[24px] p-5 animate-pulse">
                <div className="w-full aspect-[4/3] rounded-[18px] bg-white/5 mb-5" />
                <div className="h-4 bg-white/10 rounded w-1/3 mb-2" />
                <div className="h-5 bg-white/10 rounded w-2/3 mb-4" />
                <div className="h-10 bg-white/10 rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {devicesList.slice(0, 4).map((device) => (

              <motion.div
                key={device.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 90,
                      damping: 14
                    }
                  }
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#121212]/30 border border-white/5 hover:border-primary/20 rounded-[24px] p-5 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-[#0a0a0a]/60 border border-white/5 flex items-center justify-center">
                    {typeof device.image === "string" ? (
                      <img
                        src={device.image}
                        alt={device.title}
                        className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={device.image}
                        alt={device.title}
                        fill
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="mt-5 flex flex-col items-start">
                    {/* Status Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-primary/10 border border-primary/20 text-primary mb-3">
                      {device.badge}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-primary leading-snug">
                      {device.title}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mb-5">
                      <span className="text-xl font-bold text-primary">
                        {device.price}
                      </span>
                      {device.originalPrice && (
                        <span className="text-xs sm:text-sm text-secondary line-through font-medium">
                          {device.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/collection/details?slug=${device.slug || device.id}`}>
                  <button className="w-full py-2.5 rounded-[12px] border border-white/10 bg-white/[0.02] text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-[#0D0D0D] cursor-pointer">
                    Enquire Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <GlowButton href={'/collection'}>View All</GlowButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
