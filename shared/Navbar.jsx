"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { GlowButton } from "@/components/common/GlowButton";
import { LuX } from "react-icons/lu";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Servizi", href: "/service" },
    { name: "Riparazione Telefono", href: "/repair-phone" },
    { name: "Creazione Siti Web", href: "/website-creation" },
    { name: "La Nostra Collezione", href: "/collection" },
    { name: "Contattaci", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full section-padding-x transition-all duration-300 border-b ${
          isScrolled
            ? " bg-[#0D0D0D]/20 backdrop-blur-2xl border-white/5 py-4"
            : " border-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <Image
              src={logo}
              alt="CREMA INFORMATICA"
              height={50}
              className="h-10 w-auto object-contain md:h-12 bg-transparent "
              priority
            />
          </Link>

          {/* Center Nav Links - Desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary ${
                    isActive ? "text-primary" : "text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button (GlowButton) - Desktop */}
          <div className="hidden lg:block">
            <GlowButton href="/contact">Contattaci</GlowButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 focus:outline-none lg:hidden"
            aria-label="Open Menu"
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Backdrop Overlay with Blur */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[300px] max-w-[85vw] bg-[#0D0D0D] border-l border-white/10 p-6 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button & Brand Row */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={logo}
              alt="CREMA INFORMATICA"
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:text-primary transition-colors focus:outline-none"
            aria-label="Close Menu"
          >
            <LuX className="text-xl" />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium tracking-wide transition-all duration-300 hover:text-primary ${
                  isActive ? "text-primary" : "text-secondary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Action Button */}
        <div className="pt-4 border-t border-white/5 mt-auto">
          <GlowButton
            href="/contact"
            className="w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contattaci
          </GlowButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;