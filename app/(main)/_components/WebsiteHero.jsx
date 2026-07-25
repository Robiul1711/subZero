"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import banner  from "@/assets/WebsiteCreation.png"
const WebsiteHero = () => {
  return (
    <section className="relative w-full pt-8 sm:pt-12 md:pt-16 overflow-hidden z-10">
      <div className="w-full section-padding-x pb-16 sm:pb-24">
        {/* Top Hero Text Section */}
        <div className="text-center  mb-10 md:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight sm:leading-[1.1]"
          >
            Custom Websites That Grow{" "}
            <span className="block text-primary mt-1 sm:mt-2">Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            We create modern, responsive websites tailored to your business, helping you attract customers and grow online
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <Link href="/contact">
              <button className="bg-linear-to-r from-primary to-[#92e21b] text-black font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(128,207,22,0.3)] hover:shadow-[0_0_30px_rgba(128,207,22,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer">
                Contact us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Center Laptop Showcase Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-7xl mx-auto mb-16 sm:mb-24"
        >
   
    

            {/* Laptop Screen Content Area */}
            <div className="relative w-full aspect-16/10 sm:aspect-video  overflow-hidden   group">
              <Image
                src={banner}
                alt="Custom Website Design Mockup"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
              />
            </div>
        
        </motion.div>

        {/* Bottom Section: Who We Are & Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start pt-6 border-t border-white/5"
        >
          {/* Left: Tag */}
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-secondary uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Who We Are
            </div>
          </div>

          {/* Right: Typography Statement */}
          <div className="md:col-span-9">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug sm:leading-relaxed tracking-tight">
              <span className="text-white font-bold">
                We Create Modern, Responsive, And Scalable Websites Tailored To Your Business.
              </span>{" "}
              <span className="text-secondary/80 font-normal">
                Every Project Is Designed To Enhance Your Online Presence, Improve User Experience, And Drive Measurable Results.
              </span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteHero;
