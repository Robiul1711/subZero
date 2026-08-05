"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GlowButton } from "@/components/common/GlowButton";
import { motion } from "framer-motion";

import bannerPhone from "@/assets/banner.png";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FlipWords } from "@/components/common/FlipWords";
import { BorderBeam } from "@/components/ui/border-beam";
import { useGetGoogleReviewsMetaQuery, useGetHomepageCmsQuery } from "@/redux/api/apiSlice";

const defaultPositions = [
  "top-[10%] left-1 sm:-left-6 lg:-left-2 xl:left-4",
  "top-[2%] right-2 sm:-right-4 lg:right-12 xl:right-20",
  "bottom-[22%] left-1 sm:-left-6 lg:-left-2 xl:left-4",
  "bottom-[12%] right-2 sm:right-0 lg:right-4 xl:right-10",
];

const defaultAnimClasses = [
  "animate-float-1",
  "animate-float-2",
  "animate-float-3",
  "animate-float-4",
];

const Banner = () => {
  const { data: googleMetaResponse } = useGetGoogleReviewsMetaQuery();
  const { data: homepageCmsResponse } = useGetHomepageCmsQuery();

  const googleMeta = googleMetaResponse?.data;
  const section1 = homepageCmsResponse?.data?.section_1 || {};

  const rating = googleMeta?.rating ? Number(googleMeta.rating).toFixed(1) : "4.7";
  const userRatingsTotal = googleMeta?.user_ratings_total
    ? `${googleMeta.user_ratings_total}+`
    : "364+";

  const headerText = section1.header_text || "Tieni i tuoi soldi al sicuro";
  const mainTitle = section1.title || "Ripariamo i tuoi dispositivi";
  const descriptionText = section1.header_description
    ? section1.header_description.replace(/<[^>]+>/g, "")
    : "Tecnici certificati. Ricambi originali. Preventivi online istantanei per iPhone, iPad, tablet e console - senza sorprese.";

  const flipWordsList = section1.features && section1.features.length > 0
    ? section1.features
    : [
        "Come Nuovo.",
        "Veloce & Affidabile.",
        "Con Ricambi Originali.",
        "Con Garanzia.",
        "Al Miglior Prezzo.",
      ];

  const serviceBadges = section1.pricing && section1.pricing.length > 0
    ? section1.pricing.map((item, idx) => ({
        title: item.text,
        price: item.price,
        position: defaultPositions[idx % defaultPositions.length],
        animClass: defaultAnimClasses[idx % defaultAnimClasses.length],
      }))
    : [
        {
          title: "Cambio Batteria",
          price: "$10",
          position: defaultPositions[0],
          animClass: defaultAnimClasses[0],
        },
        {
          title: "Riparazione Schermo",
          price: "$120",
          position: defaultPositions[1],
          animClass: defaultAnimClasses[1],
        },
        {
          title: "Danni da Acqua",
          price: "$120",
          position: defaultPositions[2],
          animClass: defaultAnimClasses[2],
        },
        {
          title: "Porta di Ricarica",
          price: "$12",
          position: defaultPositions[3],
          animClass: defaultAnimClasses[3],
        },
      ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 xl:pt-44 xl:pb-28 min-h-[90vh] flex items-center ">
  

      {/* Grid Pattern overlay */}

      <div className="mx-auto w-full section-padding-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:col-span-6 z-10"
          >
            {/* Pulsing Keep money safe Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex self-start items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                {headerText}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white leading-[1.15]"
            >
              {mainTitle} <br />
              <FlipWords
                words={flipWordsList}
                duration={3000}
                className="text-primary"
              />
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed"
            >
              {descriptionText}
            </motion.p>


            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <GlowButton href="/repair-phone">Prenota una Riparazione</GlowButton>
              <Link
                href="/service"
                className="rounded-[12px] border border-white/10 bg-white/[0.03] px-5 py-2 sm:px-8 sm:py-2.5 text-sm sm:text-base md:text-lg font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-md"
              >
                Vedi i Prezzi
              </Link>
            </motion.div>

            {/* Google Review Box */}
            <motion.div 
              variants={itemVariants}
              className="relative overflow-hidden mt-12 sm:mt-16 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 rounded-2xl border border-white/5 bg-white/[0.01] p-4 backdrop-blur-md max-w-md shadow-custom"
            >
              <BorderBeam
                size={120}
                duration={5}
                colorFrom="#80CF16"
                colorTo="#3b82f6"
                borderWidth={2}
              />
              {/* Google G Logo container */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10">
                <FcGoogle size={24} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-white">{rating}</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-secondary mt-0.5">
                  Da {userRatingsTotal} Recensioni Google
                </p>
              </div>


              <div className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 mt-2 sm:mt-0 self-start sm:self-auto">
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold text-primary uppercase">
                  Aggiornato Automaticamente
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Content & Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex lg:col-span-6 justify-center items-center relative z-10 mt-8 lg:mt-0 px-4 sm:px-12 lg:px-0"
          >
            <div className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[640px] lg:max-w-[500px] xl:max-w-[680px] 2xl:max-w-[800px]">
              {/* Phone & pedestal container */}
              <div className="relative aspect-[4/3] w-full select-none pointer-events-none">
                <Image
                  src={bannerPhone}
                  alt="Repair Pedestal with Phone & Tablet"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating Service Badges */}
              {serviceBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, scale: 0.6 },
                    visible: (i) => ({
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 0.6 + i * 0.15,
                        type: "spring",
                        stiffness: 85,
                        damping: 12,
                      },
                    }),
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className={`absolute ${badge.position} ${badge.animClass} bg-primary/5 backdrop-blur-md border border-primary/20 hover:border-primary/30 rounded-xl p-2.5 sm:p-3 shadow-custom flex flex-col min-w-[100px] sm:min-w-[125px] cursor-default`}
                >
                  <span className="text-[10px] sm:text-xs md:text-sm xl:text-base text-secondary font-medium">
                    {badge.title}
                  </span>
                  <span className="text-xs sm:text-base md:text-lg xl:text-xl font-semibold text-white mt-2">
                    {badge.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 6.5s ease-in-out infinite 1s;
        }
        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite 2s;
        }
        .animate-float-4 {
          animation: float-4 5.5s ease-in-out infinite 0.5s;
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-0.5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-9px) rotate(0.3deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(-0.3deg); }
        }
      `}</style>
    </section>
  );
};

export default Banner;
