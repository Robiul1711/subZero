'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlowButton } from '@/components/common/GlowButton';
import bannerLayer from '@/assets/bannerlayer.png';
import bannerPhone from '@/assets/banner.png';
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
const Banner = () => {
  const serviceBadges = [
    {
      title: 'Battery Swap',
      price: '$10',
      position: 'top-[10%] left-1 sm:-left-6 lg:-left-2 xl:left-4',
      animClass: 'animate-float-1',
    },
    {
      title: 'Screen Repair',
      price: '$120',
      position: 'top-[2%] right-2 sm:-right-4 lg:right-12 xl:right-20',
      animClass: 'animate-float-2',
    },
    {
      title: 'Water Damage',
      price: '$120',
      position: 'bottom-[22%] left-1 sm:-left-6 lg:-left-2 xl:left-4',
      animClass: 'animate-float-3',
    },
    {
      title: 'Charging Port',
      price: '$12',
      position: 'bottom-[12%] right-2 sm:right-0 lg:right-4 xl:right-10',
      animClass: 'animate-float-4',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 xl:pt-44 xl:pb-28 min-h-[90vh] flex items-center ">
      {/* Background spotlight overlay */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none">
        <Image 
          src={bannerLayer} 
          alt="Spotlight Backlight" 
          fill 
          className="object-cover opacity-60 mix-blend-screen"
          priority 
        />
      </div>

      {/* Grid Pattern overlay */}


      <div className="mx-auto w-full section-padding-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col lg:col-span-6 z-10">
            {/* Pulsing Keep money safe Badge */}
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                Keep your money safe
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white leading-[1.15]">
              We Fix Gadgets <br />
              <span className="text-primary bg-clip-text">
                Like New Again.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
              Certified technicians. Genuine parts. Instant online quotes for iPhones, iPads, tablets & consoles - no guesswork, no surprises.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <GlowButton href="#book">Book a Repair</GlowButton>
              <Link 
                href="#pricing" 
                className="rounded-[12px] border border-white/10 bg-white/[0.03] px-5 py-2 sm:px-8 sm:py-2.5 text-sm sm:text-base md:text-lg font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-md"
              >
                View Pricing
              </Link>
            </div>

            {/* Google Review Box */}
            <div className="mt-12 sm:mt-16 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 rounded-2xl border border-white/5 bg-white/[0.01] p-4 backdrop-blur-md max-w-md shadow-custom">
              {/* Google G Logo container */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10">
                <FcGoogle size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-white">4.9</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                     <FaStar />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-secondary mt-0.5">From 2.455+ Google Reviews</p>
              </div>

              <div className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 mt-2 sm:mt-0 self-start sm:self-auto">
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold text-primary uppercase">
                  Automatically Updated
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Content & Floating Badges */}
          <div className="flex lg:col-span-6 justify-center items-center relative z-10 mt-8 lg:mt-0 px-4 sm:px-12 lg:px-0">
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
                <div
                  key={idx}
                  className={`absolute ${badge.position} ${badge.animClass} bg-primary/5 backdrop-blur-md border border-primary/20 hover:border-primary/30 rounded-xl p-2.5 sm:p-3 shadow-custom flex flex-col min-w-[100px] sm:min-w-[125px] transition-all duration-300 cursor-default hover:scale-105`}
                >
                  <span className="text-[10px] sm:text-xs md:text-sm xl:text-base text-secondary font-medium">
                    {badge.title}
                  </span>
                  <span className="text-xs sm:text-base md:text-lg xl:text-xl font-semibold text-white mt-2">
                    {badge.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

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
