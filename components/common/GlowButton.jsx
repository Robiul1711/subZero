'use client';

import React from 'react';
import Link from 'next/link';

const GlowButton = ({ children = 'Contact us', onClick, href, className = '' }) => {
  return (
    <div className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}>
      {/* Outer Glow Layer */}
      <div 
        className="absolute inset-0 -z-10 bg-linear-to-r from-white via-primary to-white rounded-[12px] opacity-60 blur-md transition-all duration-300 group-hover:opacity-80 group-hover:blur-lg bg-glow-animate"
        style={{
          backgroundSize: '200% auto',
        }}
      />
      
      {/* Button Border Container */}
      <div 
        className="p-[1.5px] bg-linear-to-r from-white via-primary to-white rounded-[12px] transition-all duration-300 bg-glow-animate"
        style={{
          backgroundSize: '200% auto',
        }}
      >
        {/* Button Surface */}
        {href ? (
          <Link 
            href={href}
            className="flex items-center justify-center px-5 py-2 sm:px-8 sm:py-2 md:py-2.5 bg-primary-gradient text-[#0D0D0D] font-manrope text-sm sm:text-base md:text-lg font-semibold tracking-wide rounded-[10px] border-none outline-none cursor-pointer transition-all duration-300 decoration-none w-full"
          >
            {children}
          </Link>
        ) : (
          <button 
            onClick={onClick}
            className="flex items-center justify-center px-5 py-2 sm:px-8 sm:py-2 md:py-2.5 bg-primary-gradient text-[#0D0D0D] font-manrope text-sm sm:text-base md:text-lg font-semibold tracking-wide rounded-[10px] border-none outline-none cursor-pointer transition-all duration-300 w-full"
          >
            {children}
          </button>
        )}
      </div>

      <style>{`
        .bg-glow-animate {
          animation: glow-flow 3s linear infinite;
        }
        @keyframes glow-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export { GlowButton };