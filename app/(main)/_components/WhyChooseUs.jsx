"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden z-10">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#80CF16]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-[#80CF16]/10 blur-[120px]" />

      <div className="w-full section-padding-x  relative z-10">
        {/* Top Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 md:mb-12">
          {/* Top Left: Spatial Planning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 max-w-sm"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Pianificazione Spaziale
            </h3>
            <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed font-normal">
              Trattiamo lo spazio con precisione - nulla di sprecato, nulla di mancante. Ogni elemento è posizionato con uno scopo per guidare gli utenti verso l'obiettivo.
            </p>
          </motion.div>

          {/* Top Right: Concept Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-6 md:ml-auto max-w-sm text-left"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Sviluppo del Concept
            </h3>
            <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed font-normal">
              Non facciamo brainstorming - analizziamo. Ogni idea viene messa alla prova finché rimane solo la chiarezza.
            </p>
          </motion.div>
        </div>

        {/* Center Main Feature: WHY [GLOBE] CHOOSE US */}
        <div className="relative my-6 sm:my-10 flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8">
          {/* Text "Why" */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none text-center"
          >
            Perché
          </motion.h2>

          {/* Center Globe Illustration & Semi-circular Arc Meter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 xl:h-80 xl:w-80 flex items-center justify-center shrink-0 my-2 md:my-0"
          >

            {/* Globe SVG Graphic with Animated Orbits */}
            <svg
              viewBox="0 0 300 300"
              className="h-full w-full relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow hub */}
                <radialGradient id="greenHubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(128, 207, 22, 0.8)" />
                  <stop offset="100%" stopColor="rgba(128, 207, 22, 0.05)" />
                </radialGradient>

                {/* Line trail gradients */}
                <linearGradient id="greenTrailBright" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#80CF16" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#99EC21" stopOpacity="0.3" />
                </linearGradient>

                <linearGradient id="greenTrailDim" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#80CF16" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#99EC21" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Core Glow Sphere */}
              <circle cx="150" cy="150" r="100" fill="url(#greenHubGlow)" opacity="0.6" />

              {/* Globe Latitudes */}
              {[...Array(6)].map((_, i) => (
                <ellipse
                  key={`lat-${i}`}
                  cx="150"
                  cy="150"
                  rx={105}
                  ry={35 + i * 11}
                  stroke="url(#greenTrailDim)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="5 5"
                  style={{ animation: "flowAnimation 12s linear infinite" }}
                  opacity={0.7}
                  transform="rotate(-25,150,150)"
                />
              ))}

              {/* Globe Longitudes */}
              {[...Array(8)].map((_, i) => (
                <path
                  key={`lon-${i}`}
                  d="M150,45 A105,105 0 0,1 150,255"
                  stroke="url(#greenTrailDim)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="4 4"
                  style={{ animation: "flowAnimation 14s linear infinite reverse" }}
                  opacity={0.7}
                  transform={`rotate(${i * 22.5},150,150)`}
                />
              ))}

              {/* Bright Orbital Trails */}
              <ellipse
                cx="150"
                cy="150"
                rx="125"
                ry="55"
                stroke="url(#greenTrailBright)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="10 10"
                style={{ animation: "flowAnimation 10s linear infinite" }}
                opacity="0.9"
                transform="rotate(20,150,150)"
              />
              <ellipse
                cx="150"
                cy="150"
                rx="115"
                ry="45"
                stroke="url(#greenTrailDim)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="12 12"
                style={{ animation: "flowAnimation 8s linear infinite reverse" }}
                opacity="0.8"
                transform="rotate(-40,150,150)"
              />
            </svg>
          </motion.div>

          {/* Text "Choose us" */}
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none text-center"
          >
            Sceglierci
          </motion.h2>
        </div>

        {/* Bottom Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-6 md:mt-10">
          {/* Bottom Left: Design Refinement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 max-w-sm"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Perfezionamento del Design
            </h3>
            <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed font-normal">
              Perfezionamo fino a quando non c&apos;è più nulla da eliminare, perché i prodotti indimenticabili vivono nei dettagli che la maggior parte delle persone non nota mai ma sente sempre.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Keyframe Animation for SVG flows */}
      <style jsx>{`
        @keyframes flowAnimation {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
