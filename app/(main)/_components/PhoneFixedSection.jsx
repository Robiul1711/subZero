"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGetCombinedSectionsQuery } from "@/redux/api/apiSlice";

import leftangle from "@/assets/leftangle.png";
import rightangle from "@/assets/rightangle.png";
import fixedImg from "@/assets/Fixed.png";
import dualphone from "@/assets/dualphone.png";


const leftArrowPath =
  "M214.802 211.239C212.932 211.855 211.46 212.145 210.168 212.809C188.05 224.145 164.664 231.107 139.917 233.258C125.704 234.482 111.715 233.176 98.0242 229.066C96.2763 228.546 94.5517 227.88 92.3613 227.124C93.2146 226.105 93.7748 225.324 94.4695 224.64C100.777 218.235 105.633 210.952 108.193 202.266C108.712 200.518 109.124 198.693 109.417 196.864C111.531 183.454 105.679 171.428 94.2339 165.665C82.192 159.598 67.5608 161.746 58.3202 171.104C48.7361 180.827 46.4064 192.206 51.1005 204.993C54.76 214.959 62.0542 221.903 70.4364 227.956C71.1904 228.497 72.0023 228.957 72.7294 229.478C72.8371 229.556 72.86 229.694 73.148 230.146C72.2958 230.595 71.4857 231.155 70.6182 231.512C47.7143 240.531 19.0202 227.944 13.4167 199.538C10.7086 185.688 12.7647 172.359 18.7486 159.809C22.8294 151.276 27.7262 143.084 32.6037 134.919C37.9488 125.989 43.7827 117.286 47.4383 107.47C53.0228 92.3495 53.6189 77.0764 48.664 61.6962C43.3608 45.2098 33.9849 31.1037 23.0895 17.8652C22.586 17.2595 22.0633 16.6807 21.5792 16.0479C21.4293 15.8589 21.3373 15.589 21.0189 14.9527C22.2932 15.3366 23.3252 15.5467 24.2413 15.9183C30.3965 18.2533 36.5401 20.6614 42.7146 22.9694C44.4315 23.5891 46.2451 24.0742 48.0433 24.4668C49.7414 24.8284 51.2755 24.3383 52.13 22.749C52.9844 21.1597 53.2383 19.3844 51.9275 17.9141C50.882 16.7564 49.6784 15.6484 48.3238 14.9215C44.9643 13.1236 41.5895 11.2332 38.0018 9.92415C29.2481 6.6634 20.3241 3.81072 11.5241 0.557582C7.65539 -0.871477 4.54729 0.732604 1.36256 2.15941C-0.0293672 2.79229 -0.143893 4.25985 0.103835 5.62018C0.580584 8.0827 0.945515 10.5873 1.69209 12.9579C5.02267 23.666 8.44573 34.3589 11.9344 45.0172C12.6581 47.2491 13.5475 49.4774 14.6336 51.6021C15.7044 53.6343 17.4558 54.3197 19.2019 53.8185C21.0597 53.2751 22.0675 52.0404 21.7143 49.4626C21.0606 44.9156 20.1218 40.3681 19.0981 35.8821C18.3532 32.6563 17.2461 29.5377 16.3431 26.3617C16.1136 25.5445 16.0151 24.6583 15.7405 23.2787C16.5905 23.9699 17.06 24.2251 17.3404 24.6301C24.183 34.0238 30.8481 43.4941 35.6041 54.205C42.3659 69.4539 44.2037 85.0861 39.5378 101.314C37.5635 108.217 34.5116 114.633 30.8438 120.77C26.4263 128.123 21.7202 135.31 17.222 142.605C11.4484 151.962 6.33701 161.591 3.62326 172.368C1.16579 182.106 0.572633 191.916 2.57966 201.797C8.32959 230.226 33.1321 247.16 62.8593 241.647C68.7361 240.561 74.3219 238.573 79.5629 235.644C81.0437 234.83 82.3233 234.524 84.0285 235.217C102.482 242.58 121.62 244.44 141.198 242.047C162.614 239.424 183.043 233.4 202.243 223.518C205.528 221.837 208.614 219.81 211.611 217.677C213.355 216.44 215.219 214.922 214.81 211.285L214.802 211.239ZM84.0671 223.337C75.4192 219.133 68.4307 213.468 63.4766 205.592C59.3328 199.031 57.4361 191.839 59.5045 184.065C62.8069 171.671 74.9449 166.063 86.5489 171.49C95.8629 175.846 101.01 185.329 99.579 196.251C98.1747 207.193 92.6874 215.981 84.0864 223.31L84.0671 223.337Z";

const rightArrowPathA =
  "M95.1244 21.2181C105.838 31.5754C114.551 45.1977 120.018 59.0185C125.299 72.3722 126.429 86.4136 123.405 99.0781C117.48 99.1393 111.482 98.4056 105.593 96.8009C88.7676 92.2153 74.3218 81.0632 64.2039 67.0348C55.7483 55.3112 45.4794 36.5824 50.631 21.6475C57.8566 0.69988 83.8063 10.2786 95.1244 21.2181Z";

const rightArrowPathB =
  "M45.5077 52.4887C53.8619 72.3676 68.6037 89.9679 87.9315 99.9039C98.1283 105.145 109.339 107.808 120.456 108.076C114.861 121.185 104.169 131.989 88.3209 137.686C52.8206 150.452 15.2961 127.606 7.26268 91.4006C6.28156 86.9773 -0.656266 87.3712 0.0506086 92.0934C5.95505 131.5 44.0676 157.539 82.9366 148.966C106.653 143.735 123.407 127.752 130.625 107.659C152.628 105.243 172.843 93.2336 182.299 72.7758C182.514 76.1984 182.97 79.5775 183.743 82.8536C184.518 86.1409 189.95 85.4665 190.234 82.2302C191.336 69.6789 191.594 57.8578 194.941 45.5924C196.297 40.6315 188.903 37.6883 185.968 41.5294C178.727 51.0017 167.185 48.5881 156.846 47.7889C150.635 47.3073 149.053 56.1139 155.283 57.4287C163.704 59.2052 172.869 59.7493 180.83 57.1262C174.483 79.9433 155.18 94.6629 133.243 98.2401C135.488 87.0633 134.976 75.0222 131.314 63.0902C125.622 44.5379 114.15 26.15 99.799 13.0717C87.2481 1.6358 67.7885 -5.24523 52.3166 5.01768C36.2007 15.7065 39.0159 37.0377 45.5077 52.4887Z";

const arrowVariants = {
  hidden: { pathLength: 0, fillOpacity: 0, strokeOpacity: 0 },
  visible: {
    pathLength: 1,
    fillOpacity: 0.7,
    strokeOpacity: 0.7,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      fillOpacity: { delay: 1.0, duration: 0.5 },
      strokeOpacity: { duration: 0.1 }
    }
  }
};

const PhoneFixedSection = () => {
  const { data: combinedResponse } = useGetCombinedSectionsQuery();
  const repairData = combinedResponse?.data?.repair || {};

  const text1 = repairData.text_1 || "Riparato in 30 Minuti";
  const text2 = repairData.text_2 || "Garanzia Soddisfatti o Rimborsati 7 Giorni";
  const cmsImage = repairData.image;

  return (
    <section className="relative w-full py-16 md:py-24  overflow-hidden z-10">
      {/* Background Left Angle */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] sm:w-[25%] md:w-[30%] lg:w-[35%] pointer-events-none -z-10 select-none">
        <Image
          src={leftangle}
          alt=""
          fill
          className="object-contain object-left opacity-60 md:opacity-100"
          priority
        />
      </div>

      {/* Background Right Angle */}
      <div className="absolute right-0 top-0 bottom-0 w-[20%] sm:w-[25%] md:w-[30%] lg:w-[35%] pointer-events-none -z-10 select-none">
        <Image
          src={rightangle}
          alt=""
          fill
          className="object-contain object-right opacity-60 md:opacity-100"
          priority
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title Image Header */}
        <div className="relative w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px] aspect-[12/3] mx-auto mb-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
          >
            <Image
              src={fixedImg}
              alt="Phone Fixed Problems Gone"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Central Layout containing Dual Phone Mockup & Side Badges */}
        <div className="relative w-full flex flex-col items-center">
          <div className="relative flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-4 md:min-h-[460px] py-4">
            {/* Left Badge: Get Fixed in 30 Min */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:absolute md:left-[10%] lg:left-[15%] xl:left-[20%] top-[25%] flex flex-col items-center text-center max-w-[160px] z-20"
            >
              <span className="text-white text-sm sm:text-base font-bold leading-tight select-none">
                {text1}
              </span>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mt-3 text-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 215 244"
                  fill="none"
                  className="w-full h-full"
                >
                  <motion.path
                    d={leftArrowPath}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    variants={arrowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Center: Dual phones / CMS repair image preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] lg:w-[450px] lg:h-[450px] z-10 drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              {cmsImage ? (
                <img
                  src={cmsImage}
                  alt="Repair Phone Showcase"
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={dualphone}
                  alt="Cracked Phone Screen Mockup"
                  fill
                  priority
                  className="object-contain"
                />
              )}
            </motion.div>

            {/* Right Badge: 7-days Money-back Guarantee */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:absolute md:right-[10%] lg:right-[15%] xl:right-[20%] top-[25%] flex flex-col items-center text-center max-w-[170px] z-20"
            >
              <span className="text-white text-sm sm:text-base font-bold leading-tight select-none">
                {text2}
              </span>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mt-3 text-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 196 151"
                  fill="none"
                  className="w-full h-full"
                >
                  <motion.path
                    d={rightArrowPathA}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    variants={arrowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <motion.path
                    d={rightArrowPathB}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    variants={arrowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Us Capsule Button */}
        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(128,207,22,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2.5 rounded-full bg-primary text-black font-semibold text-sm shadow-[0_0_15px_rgba(128,207,22,0.4)] cursor-pointer select-none transition-all duration-300"
          >
            Contattaci
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PhoneFixedSection;

