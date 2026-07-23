"use client";

import React, { useState } from "react";
import {
  LuSmartphone,
  LuTablet,
  LuWatch,
  LuLaptop,
  LuGamepad,
  LuCheck,
} from "react-icons/lu";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const serviceCategories = [
    {
      id: "iphone",
      title: "iPhone",
      subtext: "5 models",
      icon: LuSmartphone,
      models: [
        { name: "iPhone 15 Pro Max", repairsCount: 5 },
        { name: "iPhone 15 Pro", repairsCount: 5 },
        { name: "iPhone 14 Pro Max", repairsCount: 4 },
        { name: "iPhone 13", repairsCount: 4 },
      ],
    },
    {
      id: "tablets",
      title: "Tablets",
      subtext: "iPad, Android & Surface",
      icon: LuTablet,
      models: [
        { name: "iPad Pro 12.9", repairsCount: 4 },
        { name: "iPad Air", repairsCount: 4 },
        { name: "iPad Mini", repairsCount: 4 },
        { name: "iPad 10th Gen", repairsCount: 4 },
      ],
    },
    {
      id: "smartphones",
      title: "Smartphones",
      subtext: "All major brands & models",
      icon: LuSmartphone,
      models: [
        { name: "Galaxy S24 Ultra", repairsCount: 4 },
        { name: "Galaxy S23", repairsCount: 4 },
        { name: "Google Pixel 8 Pro", repairsCount: 3 },
      ],
    },
    {
      id: "smartwatches",
      title: "Smartwatches",
      subtext: "Apple Watch, Galaxy Watch",
      icon: LuWatch,
      models: [
        { name: "Apple Watch Ultra 2", repairsCount: 3 },
        { name: "Apple Watch Series 9", repairsCount: 3 },
        { name: "Galaxy Watch 6", repairsCount: 3 },
      ],
    },
    {
      id: "laptops",
      title: "Laptops",
      subtext: "Mac, PC, Chromebook & more",
      icon: LuLaptop,
      models: [
        { name: "MacBook Pro M3 14\"", repairsCount: 4 },
        { name: "MacBook Air M2 13\"", repairsCount: 4 },
        { name: "Dell XPS 15", repairsCount: 3 },
      ],
    },
    {
      id: "consoles",
      title: "Game Consoles",
      subtext: "PS5, Xbox, Nintendo Switch",
      icon: LuGamepad,
      models: [
        { name: "PlayStation 5 Slim", repairsCount: 3 },
        { name: "Xbox Series X", repairsCount: 3 },
        { name: "Nintendo Switch OLED", repairsCount: 3 },
      ],
    },
  ];

  const getRepairsForModel = (modelName) => {
    if (modelName === "iPad Pro 12.9") {
      return [
        { name: "LCD Screen", price: "$256", warranty: "12 month warranty" },
        { name: "LCD Screen", price: "$256", warranty: "12 month warranty" },
        { name: "LCD Screen", price: "$256", warranty: "12 month warranty" },
      ];
    }
    return [
      { name: "Screen Replacement", price: "$199", warranty: "12 month warranty" },
      { name: "Battery Replacement", price: "$89", warranty: "12 month warranty" },
      { name: "Charging Port Fix", price: "$79", warranty: "12 month warranty" },
      { name: "Water Damage Diagnosis", price: "$99", warranty: "12 month warranty" },
    ];
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setStep(2);
  };

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    setStep(3);
  };

  const handleBack = () => {
    if (step === 3) {
      setSelectedModel(null);
      setStep(2);
    } else if (step === 2) {
      setSelectedCategory(null);
      setStep(1);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <section className="relative w-full pt-10 sm:pt-16 overflow-hidden z-10">
      <div className="w-full section-padding-x">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase">
            Instant Quote
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 leading-[1.15]">
            Expert iPhone & iPad <br />
            <span className="text-primary">Repair Services</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-secondary leading-relaxed max-w-2xl mx-auto">
            Pick your device, choose the service, get a live price. No hidden fees.
          </p>
        </motion.div>

        {/* Step Progress Wizard */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center justify-center mb-12 max-w-2xl mx-auto select-none"
        >
          <div className="flex items-center gap-3 sm:gap-6 mb-6 text-sm sm:text-base font-semibold">
            {/* Step 1: Device */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black text-sm shadow-[0_0_10px_rgba(128,207,22,0.3)]">
                ✓
              </div>
              <span className="text-white">Device</span>
            </div>

            <span className="text-secondary opacity-40 font-light">&gt;</span>

            {/* Step 2: Model */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border transition-all duration-300 ${
                  step >= 2
                    ? "border-primary text-primary bg-transparent"
                    : "border-white/10 text-secondary bg-transparent"
                }`}
              >
                ✓
              </div>
              <span className={step >= 2 ? "text-white" : "text-secondary"}>
                Model
              </span>
            </div>

            <span className="text-secondary opacity-40 font-light">&gt;</span>

            {/* Step 3: Details */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border transition-all duration-300 ${
                  step >= 3
                    ? "border-primary text-primary bg-transparent"
                    : "border-white/10 text-secondary bg-transparent"
                }`}
              >
                ✓
              </div>
              <span className={step >= 3 ? "text-white" : "text-secondary"}>
                Details
              </span>
            </div>
          </div>

          {/* Back button */}
          {step > 1 && (
            <motion.button
              onClick={handleBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary hover:bg-primary/90 text-black text-xs sm:text-sm font-bold shadow-[0_4px_15px_rgba(128,207,22,0.3)] cursor-pointer"
            >
              ← Back
            </motion.button>
          )}
        </motion.div>

        {/* Wizard Steps AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* STEP 1: Categories Grid */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              {serviceCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat)}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    className="relative overflow-hidden cursor-pointer bg-[#121212]/60 p-8 sm:p-10 rounded-[24px] border border-white/5 hover:border-primary hover:bg-[#121212]/50 group select-none min-h-[220px] justify-center flex flex-col items-center text-center"
                  >
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-primary text-xl mb-5 transition-all duration-300 group-hover:scale-105">
                      <Icon className="text-2xl text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight transition-colors duration-300">
                      {cat.title}
                    </h3>

                    {/* Subtext */}
                    <p className="text-secondary text-xs sm:text-sm leading-relaxed max-w-[220px]">
                      {cat.subtext}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* STEP 2: Models Grid */}
          {step === 2 && selectedCategory && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="bg-[#121212]/80 border border-white/5 rounded-[28px] p-6 sm:p-10 max-w-6xl mx-auto shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-left tracking-tight">
                Select your {selectedCategory.title} model
              </h3>
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {selectedCategory.models.map((model) => (
                  <motion.div
                    key={model.name}
                    onClick={() => handleSelectModel(model)}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    className="cursor-pointer bg-[#161616] hover:bg-[#1e1e1e] border border-white/5 hover:border-primary p-6 rounded-[20px] flex flex-col items-start"
                  >
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {model.name}
                    </h4>
                    <p className="text-secondary text-xs font-medium">
                      {model.repairsCount} repairs available
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* STEP 3: Repairs List */}
          {step === 3 && selectedModel && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="bg-[#121212]/80 border border-white/5 rounded-[28px] p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl"
            >
              <div className="mb-6 border-b border-white/5 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  Repairs for {selectedModel.name}
                </h3>
                <p className="text-secondary text-xs sm:text-sm">
                  Tap to add to your booking. Live pricing
                </p>
              </div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4"
              >
                {getRepairsForModel(selectedModel.name).map((repair, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    className="bg-[#161616] border border-white/5 rounded-[20px] p-5 sm:px-8 sm:py-6 flex items-center justify-between hover:border-white/10 hover:bg-[#1e1e1e]"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                        {repair.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-semibold">
                        <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-xs text-primary">
                          <LuCheck size={12} />
                        </span>
                        <span>{repair.warranty}</span>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-primary">
                      {repair.price}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
