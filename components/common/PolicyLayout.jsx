"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuShieldCheck,
  LuFileText,
  LuCookie,
  LuAward,
  LuChevronRight,
} from "react-icons/lu";

const policyLinks = [
  {
    name: "Informativa sulla Privacy",
    href: "/privacy-policy",
    icon: LuShieldCheck,
    slug: "privacy-policy",
  },
  {
    name: "Termini di Servizio",
    href: "/terms-of-service",
    icon: LuFileText,
    slug: "terms-of-service",
  },
  {
    name: "Informativa sui Cookie",
    href: "/cookie-policy",
    icon: LuCookie,
    slug: "cookie-policy",
  },
  {
    name: "Garanzia",
    href: "/warranty-policy",
    icon: LuAward,
    slug: "warranty-policy",
  },
];

export default function PolicyLayout({
  useQueryHook,
  currentSlug,
  fallbackTitle,
}) {
  const { data: response, isLoading, isError } = useQueryHook();
  const policyData = response?.data || {};

  const title = policyData.title || fallbackTitle;
  const content = policyData.content || "";

  return (
    <div className="w-full pt-24 pb-20 relative overflow-hidden min-h-screen">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full section-padding-x  relative z-10">
        {/* Header Breadcrumb & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Legale & Privacy</span>
            <LuChevronRight className="text-xs" />
            <span>{title}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-secondary text-sm sm:text-base mt-4">
            Si prega di leggere la nostra {title.toLowerCase()} ufficiale per comprendere i tuoi diritti, le tue responsabilità e le nostre linee guida operative.
          </p>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 15,
              delay: 0.1,
            }}
            className="lg:col-span-4 sticky top-28 bg-[#121212]/80 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md"
          >
            <h3 className="text-white font-bold text-base mb-4 px-2 tracking-wide border-b border-white/5 pb-3">
              Tutte le Politiche
            </h3>
            <nav className="flex flex-col gap-2">
              {policyLinks.map((item) => {
                const Icon = item.icon;
                const isActive = currentSlug === item.slug;
                return (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-black font-bold shadow-[0_4px_20px_rgba(128,207,22,0.3)]"
                        : "text-secondary hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`text-lg ${isActive ? "text-black" : "text-primary"}`}
                      />
                      <span>{item.name}</span>
                    </div>
                    <LuChevronRight
                      className={`text-base ${isActive ? "text-black" : "text-white/20"}`}
                    />
                  </Link>
                );
              })}
            </nav>
          </motion.div>

          {/* Policy Main Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 15,
              delay: 0.15,
            }}
            className="lg:col-span-8 bg-[#121212]/90 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative"
          >
            {isLoading ? (
              <div className="flex flex-col gap-6 animate-pulse">
                <div className="h-8 bg-white/10 rounded-lg w-1/3" />
                <div className="h-4 bg-white/5 rounded-lg w-full" />
                <div className="h-4 bg-white/5 rounded-lg w-5/6" />
                <div className="h-4 bg-white/5 rounded-lg w-4/6" />
                <div className="h-6 bg-white/10 rounded-lg w-1/4 mt-4" />
                <div className="h-4 bg-white/5 rounded-lg w-full" />
                <div className="h-4 bg-white/5 rounded-lg w-3/4" />
              </div>
            ) : isError || !content ? (
              <div className="text-center py-12">
                <p className="text-secondary text-base">
                  Impossibile caricare il contenuto. Prova ad aggiornare la pagina.
                </p>
              </div>
            ) : (
              <article
                className="policy-prose text-secondary text-sm sm:text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .policy-prose h1,
        .policy-prose h2,
        .policy-prose h3,
        .policy-prose h4 {
          color: #ffffff;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .policy-prose h2 {
          font-size: 1.5rem;
          color: #80cf16;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.5rem;
        }
        .policy-prose h3 {
          font-size: 1.25rem;
        }
        .policy-prose p {
          color: #d4d4d8;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .policy-prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: #d4d4d8;
        }
        .policy-prose ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: #d4d4d8;
        }
        .policy-prose li {
          margin-bottom: 0.5rem;
        }
        .policy-prose a {
          color: #80cf16;
          text-decoration: underline;
        }
        .policy-prose strong {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}
