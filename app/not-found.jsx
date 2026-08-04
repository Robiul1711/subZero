"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import { GlowButton } from "@/components/common/GlowButton";
import { BorderBeam } from "@/components/ui/border-beam";
import { LuHouse, LuWrench, LuSmartphone, LuGlobe, LuMail, LuArrowLeft } from "react-icons/lu";

export default function NotFound() {
  const quickLinks = [
    { name: "Repair Phone", href: "/repair-phone", icon: LuSmartphone },
    { name: "Our Services", href: "/service", icon: LuWrench },
    { name: "Website Creation", href: "/website-creation", icon: LuGlobe },
    { name: "Contact Support", href: "/contact", icon: LuMail },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 section-padding-x relative overflow-hidden">
        {/* Glowing Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center z-10">
          {/* Main 404 Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="relative w-full bg-[#121212]/80 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <BorderBeam
              size={180}
              duration={6}
              colorFrom="#80CF16"
              colorTo="#3b82f6"
              borderWidth={2}
            />

            {/* Pulsing Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-wider text-primary uppercase">
                Error 404 — Page Missing
              </span>
            </motion.div>

            {/* Giant 404 Typography */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-7xl xs:text-8xl sm:text-9xl font-black tracking-tighter leading-none select-none my-2"
              style={{
                background: "linear-gradient(180deg, #80CF16 0%, rgba(128, 207, 22, 0.15) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </motion.h1>

            {/* Heading & Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mt-2"
            >
              Lost in Cyberspace?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-secondary text-sm sm:text-base max-w-md mx-auto mt-3 leading-relaxed"
            >
              The page you are looking for doesn’t exist or has been relocated.
              Let’s get you back on track!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full"
            >
              <GlowButton href="/">
                <span className="flex items-center gap-2">
                  <LuHouse className="text-lg" />
                  Back to Home
                </span>
              </GlowButton>

              <Link
                href="/service"
                className="rounded-[12px] border border-white/10 bg-white/[0.04] px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-md flex items-center gap-2"
              >
                <LuWrench className="text-primary text-lg" />
                View Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Nav Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 w-full"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-4">
              Or check out these popular destinations:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm font-medium text-secondary hover:text-white hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <Icon className="text-primary" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
