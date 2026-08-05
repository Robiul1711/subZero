"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { LuArrowUpRight, LuMinus, LuPlus } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

/* ---------- Services Data ---------- */

const SERVICES = [
  {
    id: "01",
    title: "Sito Web Aziendale",
    role: "Soluzioni Aziendali Personalizzate",
    image: "/images/service-business.png",
    link: "/contact",
  },
  {
    id: "02",
    title: "Sito Web Statico",
    role: "Landing Page Veloci e Leggere",
    image: "/images/service-static.png",
    link: "/contact",
  },
  {
    id: "03",
    title: "Sito Web Dinamico (CMS)",
    role: "Gestione Contenuti Scalabile",
    image: "/images/service-dynamic.png",
    link: "/contact",
  },
  {
    id: "04",
    title: "Sito E-commerce",
    role: "Negozio Online e Sistemi di Pagamento",
    image: "/images/service-ecommerce.png",
    link: "/contact",
  },
];

/* ---------- Main Component ---------- */

const CreativeServices = () => {
  const [activeId, setActiveId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Mouse position resources (Global for floating card)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics for floating cursor preview card
  const springConfig = { damping: 22, stiffness: 160, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Detect mobile screen for conditional responsive logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    // Offset card so it floats fluidly beside the cursor without blocking text
    mouseX.set(e.clientX + 25);
    mouseY.set(e.clientY - 120);
  };

  const activeService = SERVICES.find((s) => s.id === activeId);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-16 sm:py-24  overflow-hidden"
    >
      <div className="w-full section-padding-x  relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-secondary uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Servizi
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-2">
              Servizi Creativi
            </h2>
          </div>
          <div className="md:col-span-5 flex justify-start md:justify-end">
            <p className="text-xs sm:text-sm text-secondary/80 max-w-md leading-relaxed">
              Trasformiamo visioni audaci in prodotti digitali straordinari: design che catturano, esperienze che convertono e soluzioni che crescono con te.
            </p>
          </div>
        </div>

        {/* The Interactive List */}
        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service, index) => (
            <ServiceRow
              key={service.id}
              data={service}
              index={index}
              isActive={activeId === service.id}
              setActiveId={setActiveId}
              isMobile={isMobile}
              isAnyActive={activeId !== null}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP ONLY: Kinetic Global Floating Cursor Image */}
      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeId && activeService && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-56 w-80 overflow-hidden rounded-2xl border border-white/20 bg-[#161616] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#0A0A0A]">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    priority
                    sizes="320px"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Gradient Overlay & Badge */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                        {activeService.title}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

/* ---------- Service Row Component ---------- */

function ServiceRow({
  data,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}) {
  const isDimmed = isAnyActive && !isActive;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isDimmed ? 0.35 : 1,
        y: 0,
        backgroundColor: isActive && isMobile ? "rgba(255,255,255,0.03)" : "transparent",
      }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => !isMobile && setActiveId(data.id)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
      className={`group relative border-b border-white/10 transition-all duration-500 ${
        isMobile ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="relative z-10 flex flex-row items-center justify-between py-7 md:py-10">
        {/* Name & Index Section */}
        <div className="flex items-center gap-3 sm:gap-6 transition-transform duration-500 group-hover:translate-x-3">
          <span className="font-mono text-sm sm:text-base text-secondary/60">
            ({index + 1})
          </span>
          <Link href={data.link} className="hover:text-primary transition-colors">
            <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/60 transition-colors duration-300 group-hover:text-white">
              {data.title}
            </h3>
          </Link>
        </div>

        {/* Role & Icon Section */}
        <div className="flex items-center justify-end pr-2 md:pr-0 md:gap-8">
          {/* Mobile Toggle Icon */}
          <div className="block md:hidden text-secondary">
            {isActive ? <LuMinus size={20} /> : <LuPlus size={20} />}
          </div>

          {/* Desktop Arrow */}
          <motion.div
            animate={{
              x: isActive ? 0 : -10,
              opacity: isActive ? 1 : 0.6,
              scale: isActive ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="hidden md:block text-primary"
          >
            <Link href={data.link}>
              <LuArrowUpRight size={32} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* MOBILE ONLY: Inline Accordion Image */}
      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-white/2 mb-4 rounded-xl border border-white/10"
          >
            <div className="p-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                  <p className="text-xs uppercase tracking-wider font-bold text-primary">
                    {data.title}
                  </p>
                  <Link
                    href={data.link}
                    className="text-xs font-semibold text-white underline underline-offset-4"
                  >
                    Scopri il Servizio
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CreativeServices;
