"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoStatic from "@/assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";
import { useGetFooterQuery } from "@/redux/api/apiSlice";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: footerResponse, isLoading } = useGetFooterQuery();
  const footerData = footerResponse?.data || {};

  const services = [
    { name: "Screen Replacement", href: "/repair-phone" },
    { name: "Battery Repair", href: "/repair-phone" },
    { name: "Water Damage", href: "/repair-phone" },
    { name: "Website Creation", href: "/website-creation" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Repair Phone", href: "/repair-phone" },
    { name: "Website Creation", href: "/website-creation" },
    { name: "Our Collection", href: "/collection" },
    { name: "Contact us", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: footerData.facebook || "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: footerData.twitter || "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      href: footerData.instagram || "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: footerData.youtube || "https://youtube.com",
      label: "YouTube",
    },
  ];

  const contactInfo = [
    {
      icon: LuMapPin,
      text: footerData.address || "142 Tech Street, San Francisco, CA 94105",
      href: "/contact",
    },
    {
      icon: LuPhone,
      text: footerData.phone || "+1 (800) 555-REPAIR",
      href: footerData.phone ? `tel:${footerData.phone}` : "tel:+18005557372",
    },
    {
      icon: LuMail,
      text: footerData.email || "hello@irepair.com",
      href: footerData.email
        ? `mailto:${footerData.email}`
        : "mailto:hello@irepair.com",
    },
    {
      icon: LuClock,
      text: footerData.opening_hours || "Mon-Sat 8am - 8pm",
      href: "/contact",
    },
  ];

  // Helper to format short description if HTML tags are present
  const formatDescription = (desc) => {
    if (!desc)
      return "Your trusted gadget repair partner. Certified technicians, genuine parts, and a warranty you can count on.";
    return desc.replace(/<[^>]+>/g, "");
  };

  const logoSrc = footerData.logo || logoStatic;

  return (
    <footer className="w-full border-t border-primary/10 pt-8 sm:pt-12 pb-6 relative z-10">
      <div className="w-full section-padding-x">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <Link href="/" className="inline-block">
              {typeof logoSrc === "string" ? (
                <img
                  src={logoSrc}
                  alt="CREMA INFORMATICA"
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <Image
                  src={logoSrc}
                  alt="CREMA INFORMATICA"
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              )}
            </Link>
            <p className="text-secondary text-xs sm:text-sm leading-relaxed mt-3 max-w-sm">
              {formatDescription(footerData.short_description)}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="text-xs" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-sm sm:text-base tracking-wide mb-3">
              Services
            </h3>
            <ul className="flex flex-col gap-2 font-medium">
              {services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-base tracking-wide mb-3">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-base tracking-wide mb-3">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                const isExternal =
                  info.href.startsWith("http") ||
                  info.href.startsWith("mailto:") ||
                  info.href.startsWith("tel:");
                return (
                  <li key={idx}>
                    {isExternal ? (
                      <a
                        href={info.href}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary hover:text-primary transition-colors duration-300 leading-relaxed"
                      >
                        <Icon className="text-primary text-base shrink-0 mt-0.5" />
                        <span>{info.text}</span>
                      </a>
                    ) : (
                      <Link
                        href={info.href}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary hover:text-primary transition-colors duration-300 leading-relaxed"
                      >
                        <Icon className="text-primary text-base shrink-0 mt-0.5" />
                        <span>{info.text}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-white/5 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondary text-center sm:text-left">
            {footerData.rights_reserved ||
              `© ${currentYear} CREMA INFORMATICA. All rights reserved.`}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5">
            <Link
              href="/privacy-policy"
              className="text-xs text-secondary hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-secondary hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-xs text-secondary hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </Link>
            <Link
              href="/warranty-policy"
              className="text-xs text-secondary hover:text-primary transition-colors duration-300"
            >
              Warranty Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

