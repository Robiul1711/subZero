"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      device: "iPhone User",
      initials: "SM",
      text: '"My cracked screen was fixed in under an hour. The technician was professional and the quality is outstanding. Looks brand new!"',
    },
    {
      id: 2,
      name: "James Okafor",
      device: "MacBook Owner",
      initials: "JO",
      text: '"Brought in my water-damaged MacBook expecting bad news. They recovered everything and repaired it for a very fair price. Incredible service."',
    },
    {
      id: 3,
      name: "Priya Sharma",
      device: "Samsung User",
      initials: "PS",
      text: '"Outstanding customer support. They diagnosed the charging port issue quickly and repaired it within the same day. Transparent pricing too!"',
    },
    {
      id: 4,
      name: "Tom Brennan",
      device: "iPad User",
      initials: "TB",
      text: '"Great experience from start to finish. The booking system is super easy and the repair was done ahead of schedule."',
    },
    {
      id: 5,
      name: "Marcus Aurelius",
      device: "PS5 Gamer",
      initials: "MA",
      text: '"Exceptional HDMI port replacement on my console. Done on the same day and works perfectly now. Fast service and honest pricing!"',
    },
    {
      id: 6,
      name: "Sophia Chen",
      device: "iPad Pro User",
      initials: "SC",
      text: '"Needed a quick battery replacement for my iPad before a business trip. They sorted it in 2 hours. Battery life is fantastic now!"',
    },
    {
      id: 7,
      name: "David K.",
      device: "Dell XPS Owner",
      initials: "DK",
      text: '"Great experience. Replaced my broken laptop screen and keyboard. Super clean job, very friendly and helpful staff."',
    },
    {
      id: 8,
      name: "Amara Diallo",
      device: "Apple Watch User",
      initials: "AD",
      text: '"Very fast screen repair on my Apple Watch. Touch screen is fully functional and responsive, looks completely original. 10/10!"',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-full section-padding-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            Testimonials
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Swiper */}
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
          className="w-full pb-24 !overflow-visible"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto flex flex-col">
              <div className="w-full flex-1 relative bg-[#121212]/30 border border-white/5 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:bg-gradient-to-t hover:from-primary/20 hover:via-primary/5 hover:to-[#121212]/30 hover:shadow-[0_4px_30px_rgba(128,207,22,0.1)] group cursor-default">
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-5 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                    {t.text}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 mt-auto">
                  {/* Initials Circle */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                    {t.initials}
                  </div>

                  {/* Name & Device */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white transition-colors duration-300 group-hover:text-primary">
                      {t.name}
                    </h4>
                    <p className="text-xs text-secondary font-medium">
                      {t.device}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .swiper {
            overflow: visible !important;
          }
          .swiper-pagination {
            bottom: -6px !important;
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
