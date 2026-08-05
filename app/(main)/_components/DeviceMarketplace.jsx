"use client";

import React, { useState } from "react";
import { LuSearch, LuSparkles } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGetProductConditionsQuery, useGetCombinedSectionsQuery } from "@/redux/api/apiSlice";
import phone1 from "@/assets/phone1.png";

const DeviceMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: combinedResponse } = useGetCombinedSectionsQuery();
  const marketplaceCMS = combinedResponse?.data?.marketplace || {};

  const { data: response, isLoading, isFetching } = useGetProductConditionsQuery({
    search: searchQuery || undefined,
    page: currentPage,
  });

  const products = response?.data || [];
  const pagination = response?.pagination;

  const headerTitle = marketplaceCMS.title || "Certified Pre-Owned";
  const headerSubTitle = marketplaceCMS.sub_title || "Device Marketplace";
  const headerDescription = marketplaceCMS.short_description
    ? marketplaceCMS.short_description.replace(/<[^>]+>/g, "")
    : "Smartphone, laptop, tablet e altro di qualità certificata. Ogni dispositivo ispezionato, classificato e garantito.";

  const getConditionColor = (cond) => {
    if (!cond) return "bg-white/10 border-white/20 text-white";
    switch (cond.toLowerCase()) {
      case "like new":
        return "bg-primary/10 border-primary/20 text-primary";
      case "excellent":
        return "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      case "good":
        return "bg-blue-500/10 border-blue-500/20 text-blue-400";
      case "refurbished":
        return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      default:
        return "bg-primary/10 border-primary/20 text-primary";
    }
  };

  return (
    <section className="relative w-full pt-8 sm:pt-12 pb-16 overflow-hidden z-10">
      <div className="w-full section-padding-x max-w-[1600px] mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center max-w-3xl mx-auto mb-4 md:mb-10"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            {headerTitle}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            {headerSubTitle}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed">
            {headerDescription}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
          className="max-w-xl mx-auto mb-10 md:mb-16 relative"
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-secondary">
            <LuSearch className="text-lg" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Cerca per nome o marca del dispositivo..."
            className="w-full bg-[#121212]/80 border border-white/10 rounded-full py-2 sm:py-4 pl-10 md:pl-12 pr-6 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-all duration-300 shadow-custom"
          />
        </motion.div>

        {/* Loading State */}
        {isLoading || isFetching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="bg-[#121212]/40 border border-white/5 rounded-[24px] p-5 flex flex-col justify-between animate-pulse"
              >
                <div>
                  <div className="w-full aspect-[4/3] rounded-2xl bg-white/5 mb-4" />
                  <div className="h-4 bg-white/10 rounded w-1/3 mb-3" />
                  <div className="h-6 bg-white/10 rounded w-3/4 mb-2" />
                  <div className="h-5 bg-white/5 rounded w-1/2" />
                </div>
                <div className="h-10 bg-white/10 rounded-xl mt-5" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          /* Empty Search State */
          <div className="text-center py-16 bg-[#121212]/30 border border-white/5 rounded-3xl max-w-2xl mx-auto">
            <p className="text-white text-lg font-bold">Nessun prodotto trovato</p>
            <p className="text-secondary text-sm mt-2">
              Non abbiamo trovato dispositivi corrispondenti a &quot;{searchQuery}&quot;. Prova un altro termine.
            </p>
          </div>
        ) : (
          /* Devices Grid */
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((item) => {
              const conditionBadge = item.condition || "Refurbished";
              const offerPrice = item.offer_price ? `$${item.offer_price}` : null;
              const oldPrice = item.old_price ? `$${item.old_price}` : null;
              const savePercent = item.save_percentage;

              return (
                <motion.div
                  key={item.id}
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
                  className="bg-[#121212]/40 border border-white/5 hover:border-primary/30 rounded-[24px] p-5 flex flex-col justify-between group cursor-default transition-all duration-300"
                >
                  <div>
                    {/* Device Image Showcase Area */}
                    <div className="w-full aspect-[4/3] rounded-2xl bg-[#0a0a0a]/60 border border-white/5 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-[#121212]/80 transition-colors duration-300">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={phone1}
                          alt={item.name}
                          fill
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      )}

                      {/* Popular Badge */}
                      {item.is_popular && (
                        <span className="absolute top-3 left-3 bg-primary text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                          <LuSparkles className="text-xs" /> Popolare
                        </span>
                      )}

                      {/* Discount Tag */}
                      {savePercent && Number(savePercent) > 0 && (
                        <span className="absolute top-3 right-3 bg-red-500/90 text-white font-bold text-[10px] px-2 py-0.5 rounded-md">
                          -{Math.round(savePercent)}%
                        </span>
                      )}
                    </div>

                    {/* Condition Badge */}
                    <span
                      className={`inline-block border text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${getConditionColor(
                        conditionBadge
                      )}`}
                    >
                      {conditionBadge}
                    </span>

                    {/* Device Name */}
                    <h3 className="text-base sm:text-lg font-bold text-white mt-3 tracking-tight transition-colors duration-300 group-hover:text-primary leading-snug">
                      {item.name}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mt-2">
                      {offerPrice ? (
                        <span className="text-primary font-extrabold text-lg sm:text-xl">
                          {offerPrice}
                        </span>
                      ) : (
                        <span className="text-white/60 font-semibold text-sm">
                          Contatta per il Prezzo
                        </span>
                      )}
                      {oldPrice && (
                        <span className="text-secondary text-xs sm:text-sm line-through font-medium">
                          {oldPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enquiry Button */}
                  <Link href={`/collection/details?slug=${item.slug || item.id}`} className="w-full">
                    <button className="w-full py-2.5 mt-5 rounded-xl border border-white/10 hover:border-primary bg-white/[0.02] text-white hover:text-black hover:bg-primary text-xs font-semibold tracking-wide transition-all duration-300 text-center cursor-pointer shadow-sm">
                      Vedi Dettagli e Richiedi Info
                    </button>
                  </Link>

                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Pagination Controls */}
        {pagination && pagination.last_page > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-12 select-none">
            {/* Previous Button */}
            <button
              disabled={currentPage <= 1}
              onClick={() => {
                const newPage = Math.max(currentPage - 1, 1);
                setCurrentPage(newPage);
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
              className="px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold text-white hover:border-primary disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(pagination.last_page)].map((_, idx) => {
              const pageNum = idx + 1;
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`w-9 h-9 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-primary bg-primary text-black shadow-[0_0_12px_rgba(128,207,22,0.3)]"
                      : "border-white/10 bg-[#121212] text-white hover:border-primary/50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              disabled={currentPage >= pagination.last_page}
              onClick={() => {
                const newPage = Math.min(currentPage + 1, pagination.last_page);
                setCurrentPage(newPage);
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
              className="px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold text-white hover:border-primary disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
            >
              Avanti
            </button>
          </div>
        )}


      </div>
    </section>
  );
};

export default DeviceMarketplace;
