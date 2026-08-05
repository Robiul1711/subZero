"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGetCombinedSectionsQuery } from "@/redux/api/apiSlice";

const CTA = () => {
  const { data: combinedResponse } = useGetCombinedSectionsQuery();
  const bannerData = combinedResponse?.data?.banner || {};

  const title = bannerData.title || "Device broken? We fix it fast.";
  const subText = bannerData.sub_text || "Walk in or book online — most repairs done in under 2 hours.";

  return (
    <section className="w-full pb-12 sm:pb-16 relative overflow-hidden">
      <div className="w-full section-padding-x">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative w-full bg-primary rounded-[20px] p-8 sm:p-10 md:px-12 md:py-10 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 text-center sm:text-left shadow-[0_20px_50px_-5px_rgba(128,207,22,0.6)]"
        >
          {/* Left Text Side */}
          <div className="flex flex-col items-center sm:items-start relative z-10 max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0D0D0D] tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#0D0D0D]/80 font-medium mt-2">
              {subText}
            </p>
          </div>


          {/* Right Button Side */}
          <div className="relative z-10 shrink-0 self-center sm:self-auto">
            <Link
              href="/service"
              className="inline-flex items-center justify-center bg-[#0D0D0D] text-white px-6 sm:px-8 py-3 rounded-[12px] text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#1C1C1C] hover:scale-105 active:scale-[0.98] shadow-lg cursor-pointer"
            >
              View Service
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
