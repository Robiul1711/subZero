"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { LuUser, LuMail, LuPhone } from "react-icons/lu";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import contactImg from "@/assets/contact.png";
import { useSendContactMutation, useGetCombinedSectionsQuery } from "@/redux/api/apiSlice";

const ContactSection = () => {
  const [sendContact, { isLoading }] = useSendContactMutation();
  const { data: combinedResponse } = useGetCombinedSectionsQuery();
  const contactUsData = combinedResponse?.data?.contact_us || {};

  const sectionTitle = contactUsData.title || "Get In Touch With Us";
  const sectionImage = contactUsData.image || contactImg;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("full_name", data.name);
      formData.append("email", data.email);
      formData.append("number", data.number);
      formData.append("message", data.message);

      const res = await sendContact(formData).unwrap();
      toast.success(res?.message || "Thank you! We've received your request and will contact you shortly.");
      reset();
    } catch (err) {
      toast.error(err?.data?.message || err?.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <section className="relative w-full pt-10 pb-16 overflow-hidden z-10">
      <div className="w-full section-padding-x max-w-[1600px] mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight text-left"
        >
          {sectionTitle}
        </motion.h2>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-6 relative rounded-[32px] overflow-hidden min-h-[350px] lg:min-h-auto"
          >
            {typeof sectionImage === "string" ? (
              <img
                src={sectionImage}
                alt="Technician repairing phone"
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={sectionImage}
                alt="Technician repairing phone"
                fill
                className="object-cover"
                priority
              />
            )}
          </motion.div>


          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-6 bg-[#121212]/80 border border-white/5 rounded-[24px] p-6 sm:p-10 flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-secondary">
                  Full Name
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                    <LuUser className="text-lg" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    placeholder="enter your name"
                    className={`w-full bg-[#0a0a0a]/60 border rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.name ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-primary"
                    }`}
                    {...register("name", {
                      required: "Full name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" },
                    })}
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-xs font-semibold mt-0.5 ml-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-secondary">
                  Email
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                    <LuMail className="text-lg" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className={`w-full bg-[#0a0a0a]/60 border rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.email ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-primary"
                    }`}
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-xs font-semibold mt-0.5 ml-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Number field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="number" className="text-sm font-semibold text-secondary">
                  Number
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                    <LuPhone className="text-lg" />
                  </div>
                  <input
                    type="tel"
                    id="number"
                    placeholder="enter your phone number"
                    className={`w-full bg-[#0a0a0a]/60 border rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/20 focus:outline-none transition-colors ${
                      errors.number ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-primary"
                    }`}
                    {...register("number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\-\s()]{7,20}$/,
                        message: "Invalid phone number format",
                      },
                    })}
                  />
                </div>
                {errors.number && (
                  <span className="text-red-500 text-xs font-semibold mt-0.5 ml-1">
                    {errors.number.message}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="enter your messsge"
                  className={`w-full bg-[#0a0a0a]/60 border rounded-xl py-3.5 px-4 text-sm text-white placeholder-white/20 focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-primary"
                  }`}
                  {...register("message", {
                    required: "Message content is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                  })}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs font-semibold mt-0.5 ml-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.01 } : {}}
                whileTap={!isLoading ? { scale: 0.99 } : {}}
                className={`w-full py-3 mt-2 bg-primary hover:bg-[#99EC21] text-black rounded-xl text-sm font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(128,207,22,0.25)] ${
                  isLoading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isLoading ? "Sending..." : "Send"}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
