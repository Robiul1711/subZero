'use client';

import React from 'react';

const Stats = () => {
  const statItems = [
    { value: '50K+', label: 'Devices Repaired' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '120+', label: 'Certified Techs' },
    { value: '1 Year', label: 'Repair Warranty' },
  ];

  return (
    <section className="w-full bg-secondary/1 relative z-10">
      <div className="border-t border-b border-primary/10 py-8 sm:py-10 md:py-12">
        <div className="mx-auto w-full section-padding-x max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 text-center">
            {statItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 group cursor-default"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight transition-colors duration-300 group-hover:text-white drop-shadow-[0_2px_10px_rgba(128,207,22,0.15)]">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-secondary  mt-2 transition-colors duration-300 group-hover:text-white/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
