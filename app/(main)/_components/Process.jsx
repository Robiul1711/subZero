"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LuSmartphone,
  LuLaptop,
  LuTablet,
  LuWatch,
  LuPhone,
  LuWrench,
  LuShield,
  LuBadgeCheck,
} from "react-icons/lu";
import Link from "next/link";
import { useGetHomepageCmsQuery } from "@/redux/api/apiSlice";

const stepIcons = [LuPhone, LuWrench, LuShield, LuBadgeCheck];

const Process = () => {
  const [activeCategory, setActiveCategory] = useState("phone");
  const { data: homepageCmsResponse } = useGetHomepageCmsQuery();
  const section3 = homepageCmsResponse?.data?.section_3 || {};

  const title = section3.title || "Riparazione Facile in 4 Semplici Passi";
  const shortDescription = section3.short_description || "Abbiamo semplificato il processo di riparazione per farti riavere il tuo dispositivo rapidamente e senza problemi.";

  const categories = [
    { id: "phone", name: "Riparazione Telefono", icon: LuSmartphone },
    { id: "laptop", name: "Riparazione Laptop", icon: LuLaptop },
    { id: "tablet", name: "Riparazione Tablet", icon: LuTablet },
    { id: "watch", name: "Riparazione Orologio", icon: LuWatch },
  ];

  const defaultSteps = [
    {
      icon: LuPhone,
      title: "Prenota un Appuntamento",
      description:
        "Prenota una visita di riparazione online o vieni direttamente in uno dei nostri centri assistenza quando vuoi.",
    },
    {
      icon: LuWrench,
      title: "Diagnosi del Dispositivo",
      description:
        "I nostri tecnici certificati eseguono una diagnosi approfondita per identificare tutti i problemi con il tuo dispositivo.",
    },
    {
      icon: LuShield,
      title: "Riparazione Esperta",
      description:
        "Utilizziamo solo ricambi originali e seguiamo gli standard del produttore per ripristinare perfettamente il tuo dispositivo.",
    },
    {
      icon: LuBadgeCheck,
      title: "Controllo Qualità",
      description:
        "Ogni dispositivo viene testato accuratamente prima della consegna per garantire il massimo standard qualitativo.",
    },
  ];

  const stepsList = section3.steps && section3.steps.length > 0
    ? section3.steps.map((step, idx) => ({
        icon: stepIcons[idx % stepIcons.length],
        title: step.title,
        description: step.description,
      }))
    : defaultSteps;


  return (
    <section className="w-full pt-12 pb-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-full section-padding-x">
        {/* Category Pills */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: -15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <Link
              href={"/repair-phone"}

                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border text-xs sm:text-sm font-medium transition-colors duration-300  ${
                  isActive
                    ? "border-primary bg-primary/10 text-white shadow-[0_0_15px_rgba(128,207,22,0.15)]"
                    : "border-white/10 bg-white/[0.02] text-secondary hover:border-primary/50 hover:text-primary"
                }`}
              >
                <Icon
                  className={`text-xs sm:text-base transition-colors duration-300 ${isActive ? "text-primary" : "text-primary/70"}`}
                />
                {cat.name}
              </Link>
            );
          })}
        </motion.div>

        {/* Process Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            Il Nostro Processo
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            {title}
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-secondary leading-relaxed max-w-2xl mx-auto">
            {shortDescription}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stepsList.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={idx}
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
                className="bg-[#121212]/40 border border-white/5 hover:border-primary/20 rounded-[20px] p-5 sm:p-6 md:p-8 flex flex-col items-start text-left group cursor-default"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary text-lg sm:text-xl mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/40">
                  <StepIcon />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
