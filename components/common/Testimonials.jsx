"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useGetTestimonialsQuery, useGetCombinedSectionsQuery } from "@/redux/api/apiSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const { data: apiResponse, isLoading } = useGetTestimonialsQuery({
    star_min: 4,
    star_max: 5,
  });

  const { data: combinedResponse } = useGetCombinedSectionsQuery();
  const testimonialTitle = combinedResponse?.data?.testimonial?.title || "Cosa Dicono i Nostri Clienti";

  const apiTestimonials = apiResponse?.data || [];


  const testimonialsList = apiTestimonials.map((t) => ({
    id: t.id,
    name: t.name,
    device: t.device_name || "Google Review",
    time: t.relative_time_description,
    image: t.image,
    author_url: t.author_url,
    initials: t.name
      ? t.name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase()
      : "U",
    text: t.message ? `"${t.message}"` : "",
    rating: Number(t.star) || 5,
  }));



  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="w-full section-padding-x">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            Testimonianze
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            {testimonialTitle}
          </h2>

        </motion.div>

        {/* Testimonials Swiper Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
        >
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          
          >
            {testimonialsList.map((t) => (
              <SwiperSlide key={t.id} className="h-auto flex flex-col py-10! sm:py-16! px-2">
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  className="w-full flex-1 relative bg-[#121212]/30 border border-white/5 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between group cursor-default hover:border-primary hover:bg-gradient-to-t hover:from-primary/20 hover:via-primary/5 hover:to-[#121212]/30 hover:shadow-[0_4px_30px_rgba(128,207,22,0.1)]"
                >
                  <div>
                    {/* Stars based on rating */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={14}
                          className={i < (t.rating || 5) ? "text-primary" : "text-white/10"}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                      {t.text}
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 mt-auto">
                    {/* Image or Initials Circle */}
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-primary/20"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.nextSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    {(!t.image || true) && (
                      <div className={`w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/40 ${t.image ? 'hidden' : ''}`}>
                        {t.initials}
                      </div>
                    )}


                    {/* Name & Device / Review link */}
                    <div>
                      {t.author_url ? (
                        <a
                          href={t.author_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-white transition-colors duration-300 group-hover:text-primary block hover:underline"
                        >
                          {t.name}
                        </a>
                      ) : (
                        <h4 className="text-sm sm:text-base font-bold text-white transition-colors duration-300 group-hover:text-primary">
                          {t.name}
                        </h4>
                      )}
                      <p className="text-xs text-secondary font-medium">
                        {t.device}{t.time ? ` • ${t.time}` : ''}
                      </p>

                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <style>{`
          .swiper-pagination {
            bottom: 12px !important;
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.2) !important;
            opacity: 1 !important;
            width: 8px !important;
            height: 8px !important;
            margin: 0 5px !important;
            transition: all 0.3s ease !important;
          }
          .swiper-pagination-bullet-active {
            background: #80CF16 !important;
            width: 20px !important;
            border-radius: 4px !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;

