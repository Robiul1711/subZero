"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const floatingCards = [
  {
    id: 1,
    image: "/images/idea-1.png",
    alt: "Design Studio Workspace",
    className:
      "top-[8%] left-[4%] sm:left-[8%] w-36 h-48 sm:w-48 sm:h-60 md:w-56 md:h-72 -rotate-12",
    animateY: [0, -18, 0],
    animateX: [0, 8, 0],
    duration: 6,
  },
  {
    id: 2,
    image: "/images/idea-4.png",
    alt: "Typo Workspace",
    className:
      "top-[4%] left-[44%] w-20 h-24 sm:w-28 sm:h-36 -rotate-6",
    animateY: [0, -10, 0],
    animateX: [0, -6, 0],
    duration: 5,
  },
  {
    id: 3,
    image: "/images/idea-4.png",
    alt: "Cozy Studio Desk",
    className:
      "top-[10%] right-[4%] sm:right-[8%] w-36 h-48 sm:w-48 sm:h-60 md:w-56 md:h-72 rotate-12",
    animateY: [0, 16, 0],
    animateX: [0, -10, 0],
    duration: 7,
  },
  {
    id: 4,
    image: "/images/idea-2.png",
    alt: "Wireframe Sketches",
    className:
      "bottom-[8%] left-[8%] sm:left-[16%] w-36 h-48 sm:w-48 sm:h-60 md:w-56 md:h-72 -rotate-15",
    animateY: [0, 15, 0],
    animateX: [0, 12, 0],
    duration: 6.5,
  },
  {
    id: 5,
    image: "/images/idea-2.png",
    alt: "Design Sketches",
    className:
      "bottom-[6%] left-[46%] w-20 h-24 sm:w-28 sm:h-36 rotate-6",
    animateY: [0, -12, 0],
    animateX: [0, 6, 0],
    duration: 4.8,
  },
  {
    id: 6,
    image: "/images/idea-3.png",
    alt: "3D Web UI Monitor",
    className:
      "bottom-[4%] right-[4%] sm:right-[10%] w-44 h-56 sm:w-60 sm:h-72 md:w-72 md:h-84 rotate-18",
    animateY: [0, -20, 0],
    animateX: [0, -8, 0],
    duration: 7.5,
  },
];

const IdeasToWebsite = () => {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] py-24 sm:py-36 bg-[#0D0D0D] text-white overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-[#80CF16]/5 blur-[140px]" />

      {/* Orbiting / Floating Cards Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none ">
        {floatingCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: card.animateY,
              x: card.animateX,
            }}
            transition={{
              y: {
                duration: card.duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              x: {
                duration: card.duration * 1.2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              opacity: { duration: 0.8 },
            }}
            whileHover={{
              scale: 1.15,
              rotate: 0,
              zIndex: 40,
              transition: { duration: 0.3 },
            }}
            className={`absolute pointer-events-auto cursor-pointer rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-[#161616] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-shadow duration-300 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(128,207,22,0.3)] ${card.className}`}
          >
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden ">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 150px, 300px"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center Text & CTA Button Content */}
      <div className="relative z-20 w-full section-padding-x max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl  font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.15]"
        >
          Turning Ideas into Clean, fast, and user friendly Website.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-linear-to-r from-[#80CF16] to-[#96ed1f] text-black font-extrabold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(128,207,22,0.4)] hover:shadow-[0_0_35px_rgba(128,207,22,0.7)] hover:scale-105 transition-all duration-300"
          >
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IdeasToWebsite;
