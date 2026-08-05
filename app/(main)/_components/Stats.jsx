'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useGetHomepageCmsQuery } from '@/redux/api/apiSlice';

const Stats = () => {
  const { data: homepageCmsResponse } = useGetHomepageCmsQuery();
  const section2 = homepageCmsResponse?.data?.section_2 || {};

  const defaultStats = [
    { value: '50K+', label: 'Devices Repaired' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '120+', label: 'Certified Techs' },
    { value: '1 Year', label: 'Repair Warranty' },
  ];

  const statItems = section2.stats && section2.stats.length > 0
    ? section2.stats
    : defaultStats;


  return (
    <section className="w-full bg-secondary/1 relative z-10">
      <div className="border-t border-b border-primary/10 py-8 sm:py-10 md:py-12">
        <div className="mx-auto w-full section-padding-x max-w-7xl">
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 text-center"
          >
            {statItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center group cursor-default"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight transition-colors duration-300 group-hover:text-white drop-shadow-[0_2px_10px_rgba(128,207,22,0.15)]">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-secondary  mt-2 transition-colors duration-300 group-hover:text-white/80">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
