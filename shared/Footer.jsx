'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { LuMapPin, LuPhone, LuMail, LuClock } from 'react-icons/lu';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Screen Replacement', href: '/repair-phone' },
    { name: 'Battery Repair', href: '/repair-phone' },
    { name: 'Water Damage', href: '/repair-phone' },
    { name: 'Website Creation', href: '/website-creation' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'Repair Phone', href: '/repair-phone' },
    { name: 'Website Creation', href: '/website-creation' },
    { name: 'Our Collection', href: '/collection' },
    { name: 'Contact us', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: LuMapPin, text: '142 Tech Street, San Francisco, CA 94105', href: '/contact' },
    { icon: LuPhone, text: '+1 (800) 555-REPAIR', href: 'tel:+18005557372' },
    { icon: LuMail, text: 'hello@irepair.com', href: 'mailto:hello@irepair.com' },
    { icon: LuClock, text: 'Mon-Sat 8am - 8pm', href: '/contact' },
  ];

  return (
    <footer className="w-full border-t border-primary/10 pt-16 pb-8 relative z-10">
      <div className=" w-full section-padding-x">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <Link href="/" className="inline-block">
              <Image 
                src={logo} 
                alt="CREMA INFORMATICA" 
                height={45} 
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-secondary text-sm leading-relaxed mt-5 max-w-sm">
              Your trusted gadget repair partner. Certified technicians, genuine parts, and a warranty you can count on.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link 
                    key={idx} 
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-base tracking-wide mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3.5">
              {services.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-base tracking-wide mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-base tracking-wide mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                const isExternal = info.href.startsWith("http") || info.href.startsWith("mailto:") || info.href.startsWith("tel:");
                return (
                  <li key={idx}>
                    {isExternal ? (
                      <a
                        href={info.href}
                        className="flex items-start gap-3 text-sm text-secondary hover:text-primary transition-colors duration-300 leading-relaxed"
                      >
                        <Icon className="text-primary text-lg shrink-0 mt-0.5" />
                        <span>{info.text}</span>
                      </a>
                    ) : (
                      <Link
                        href={info.href}
                        className="flex items-start gap-3 text-sm text-secondary hover:text-primary transition-colors duration-300 leading-relaxed"
                      >
                        <Icon className="text-primary text-lg shrink-0 mt-0.5" />
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
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-secondary text-center sm:text-left">
            &copy; {currentYear} CREMA INFORMATICA. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link href="/contact" className="text-xs sm:text-sm text-secondary hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm text-secondary hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm text-secondary hover:text-primary transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;