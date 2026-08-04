"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyWebsite = () => {
  const exactPath =
    "M487.314 0.215576C476.404 75.3065 588.068 349.965 601.867 240.216C609.348 180.716 610.731 177.897 601.867 119.637C590.848 47.2156 493.745 90.2354 446.404 304.198C385.075 581.378 371.071 496.262 112.102 555.255C-304.086 650.063 575.974 758.022 748.348 748.716C1133.63 727.915 635.848 1158.72 438.348 1125.22C121.32 1071.44 1087.8 891.418 953.348 1158.72C827.848 1408.22 512.295 1521.79 363.848 1565.22";

  return (
    <section className="relative w-full py-10  md:py-16  overflow-hidden bg-[#0D0D0D] text-white">
      <div className="w-full section-padding-x relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Why Your Business Needs A Website
          </motion.h2>
        </div>

        {/* Desktop Interactive Flow using exact provided SVG path */}
        <div className="hidden lg:block relative w-full max-w-250 mx-auto aspect-968/1567 pt-4 mb-24">
          {/* Why Your Business Needs A Website*/}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 968 1567"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing path */}
            <motion.path
              d={exactPath}
              stroke="#80CF16"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#svgGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 6.0, ease: "easeInOut" }}
            />

            {/* Glowing Dot 1: 24/7 Online Presence (Positioned EXACTLY at start point of SVG path: cx=487.314, cy=0.215) */}
            <circle
              cx="487.314"
              cy="0.215"
              r="7"
              fill="#80CF16"
              className="animate-pulse"
            />
            <circle
              cx="487.314"
              cy="0.215"
              r="14"
              fill="#80CF16"
              fillOpacity="0.3"
            />

            {/* Glowing Dot 2: Build Trust & Credibility */}
            <circle
              cx="601"
              cy="240"
              r="7"
              fill="#80CF16"
              className="animate-pulse"
            />
            <circle cx="601" cy="240" r="14" fill="#80CF16" fillOpacity="0.3" />

            {/* Glowing Dot 3: Reach More Customers */}
            <circle
              cx="112"
              cy="555"
              r="7"
              fill="#80CF16"
              className="animate-pulse"
            />
            <circle cx="112" cy="555" r="14" fill="#80CF16" fillOpacity="0.3" />

            {/* Glowing Dot 4: Showcase Your Services */}
            <circle
              cx="748"
              cy="748"
              r="7"
              fill="#80CF16"
              className="animate-pulse"
            />
            <circle cx="748" cy="748" r="14" fill="#80CF16" fillOpacity="0.3" />

            {/* Glowing Dot 5: Generate More Leads (Positioned EXACTLY on the green line curve: cx=415, cy=1120) */}
            <circle
              cx="415"
              cy="1120"
              r="7"
              fill="#80CF16"
              className="animate-pulse"
            />
            <circle
              cx="415"
              cy="1120"
              r="14"
              fill="#80CF16"
              fillOpacity="0.3"
            />

            {/* Glowing Dot 6: Grow Your Business (Positioned EXACTLY at end point of SVG path: cx=363.848, cy=1565.22) */}
            <circle
              cx="363.848"
              cy="1565.22"
              r="7"
              fill="#80CF16"
              className="animate-pulse"
            />
            <circle
              cx="363.848"
              cy="1565.22"
              r="14"
              fill="#80CF16"
              fillOpacity="0.3"
            />
          </svg>

          {/* Point 1: 24/7 Online Presence */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="absolute top-[-1%] left-[52%] max-w-65"
          >
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              24/7 Online Presence
            </h3>
            <p className="text-xs text-secondary/90 mt-1 leading-relaxed">
              Your business is always open, allowing customers to discover your
              products and services anytime.
            </p>
          </motion.div>

          {/* Point 2: Build Trust & Credibility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute top-[13.5%] left-[65%] max-w-65"
          >
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Build Trust & Credibility
            </h3>
            <p className="text-xs text-secondary/90 mt-1 leading-relaxed">
              A professional website increases customer confidence and
              strengthens your brand image.
            </p>
          </motion.div>

          {/* Point 3: Reach More Customers (Safely placed inside left bound so it never clips past laptop screens) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute top-[26%] left-[4%] max-w-65"
          >
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Reach More Customers
            </h3>
            <p className="text-xs text-secondary/90 mt-1 leading-relaxed">
              Expand your audience beyond your local area and attract new
              customers online.
            </p>
          </motion.div>

          {/* Point 4: Showcase Your Services */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute top-[42%] left-[74%] max-w-62.5"
          >
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Showcase Your Services
            </h3>
            <p className="text-xs text-secondary/90 mt-1 leading-relaxed">
              Present your products, services, portfolio, and achievements in
              one professional place.
            </p>
          </motion.div>

          {/* Point 5: Generate More Leads */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute top-[66.5%] left-[8%] max-w-65"
          >
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Generate More Leads
            </h3>
            <p className="text-xs text-secondary/90 mt-1 leading-relaxed">
              Convert visitors into potential customers with clear
              calls-to-action and contact options.
            </p>
          </motion.div>

          {/* Point 6: Grow Your Business */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            className="absolute top-[101.5%] left-[36%] max-w-70"
          >
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Grow Your Business
            </h3>
            <p className="text-xs text-secondary/90 mt-1 leading-relaxed">
              A high-performing website helps increase visibility, engagement,
              and long-term business growth.
            </p>
          </motion.div>
        </div>

        {/* Mobile & Tablet Vertical Flow View */}
        <div className="lg:hidden flex flex-col gap-10 relative pl-6 border-l-2 border-primary/40 ml-4">
          <div className="relative">
            <span className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              24/7 Online Presence
            </h3>
            <p className="text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
              Your business is always open, allowing customers to discover your
              products and services anytime.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Reach More Customers
            </h3>
            <p className="text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
              Expand your audience beyond your local area and attract new
              customers online.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Build Trust & Credibility
            </h3>
            <p className="text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
              A professional website increases customer confidence and
              strengthens your brand image.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Showcase Your Services
            </h3>
            <p className="text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
              Present your products, services, portfolio, and achievements in
              one professional place.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Generate More Leads
            </h3>
            <p className="text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
              Convert visitors into potential customers with clear
              calls-to-action and contact options.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Grow Your Business
            </h3>
            <p className="text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
              A high-performing website helps increase visibility, engagement,
              and long-term business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
