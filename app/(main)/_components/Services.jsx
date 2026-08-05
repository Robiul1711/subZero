"use client";

import React, { useState } from "react";
import {
  LuSmartphone,
  LuTablet,
  LuWatch,
  LuLaptop,
  LuGamepad,
  LuCheck,
  LuWrench,
} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetCombinedSectionsQuery,
  useGetDevicesQuery,
  useGetModelServicesQuery,
} from "@/redux/api/apiSlice";

const getDeviceIcon = (deviceName) => {
  if (!deviceName) return LuWrench;
  const name = deviceName.toLowerCase();
  if (name.includes("iphone") || name.includes("phone") || name.includes("samsung") || name.includes("smartphone")) {
    return LuSmartphone;
  }
  if (name.includes("ipad") || name.includes("tablet")) {
    return LuTablet;
  }
  if (name.includes("macbook") || name.includes("laptop") || name.includes("pc")) {
    return LuLaptop;
  }
  if (name.includes("watch")) {
    return LuWatch;
  }
  if (name.includes("console") || name.includes("playstation") || name.includes("xbox") || name.includes("nintendo") || name.includes("sony")) {
    return LuGamepad;
  }
  return LuWrench;
};

const Services = () => {
  const { data: combinedResponse } = useGetCombinedSectionsQuery();
  const serviceData = combinedResponse?.data?.service || {};

  const title = serviceData.title || "Expert iPhone & iPad Repair Services";
  const descriptionText = serviceData.description
    ? serviceData.description.replace(/<[^>]+>/g, "")
    : "Pick your device, choose the service, get a live price. No hidden fees.";

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  // Fetch devices API (Step 1)
  const { data: devicesResponse, isLoading: isLoadingDevices } = useGetDevicesQuery();
  const devicesList = devicesResponse?.data || [];

  // Fetch model repair services API (Step 3)
  const {
    data: modelServicesResponse,
    isLoading: isLoadingServices,
  } = useGetModelServicesQuery(selectedModel?.id, {
    skip: !selectedModel?.id,
  });

  const modelServicesData = modelServicesResponse?.data || {};
  const repairServicesGroups = modelServicesData.repair_services || [];

  // Flatten description items from repair services
  const repairItems = repairServicesGroups.flatMap((group) => group.description || []);

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
    <section className="relative w-full pt-10 sm:pt-16 pb-16 overflow-hidden z-10">
      <div className="w-full section-padding-x max-w-[1600px] mx-auto">
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
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-secondary leading-relaxed max-w-2xl mx-auto">
            {descriptionText}
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
              <span className="text-white">
                {selectedCategory ? selectedCategory.name : "Device"}
              </span>
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
                {selectedModel ? selectedModel.name : "Model"}
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
                Services
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
          {/* STEP 1: Categories / Devices Grid */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto"
            >
              {isLoadingDevices ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#121212]/60 p-8 rounded-[24px] border border-white/5 animate-pulse flex flex-col items-center justify-center min-h-[220px]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 mb-5" />
                      <div className="h-5 bg-white/10 rounded w-1/2 mb-2" />
                      <div className="h-4 bg-white/5 rounded w-1/3" />
                    </div>
                  ))}
                </div>
              ) : devicesList.length === 0 ? (
                <div className="text-center py-12 bg-[#121212]/30 rounded-2xl">
                  <p className="text-secondary text-sm">No devices available.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {devicesList.map((cat) => {
                    const Icon = getDeviceIcon(cat.name);
                    return (
                      <motion.div
                        key={cat.id}
                        onClick={() => handleSelectCategory(cat)}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 100, damping: 14 }}
                        className="relative overflow-hidden cursor-pointer bg-[#121212]/60 p-8 sm:p-10 rounded-[24px] border border-white/5 hover:border-primary hover:bg-[#121212]/50 group select-none min-h-[220px] justify-center flex flex-col items-center text-center transition-all duration-300"
                      >
                        {/* Icon Container */}
                        <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-primary text-xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10">
                          <Icon className="text-2xl text-primary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-primary">
                          {cat.name}
                        </h3>

                        {/* Subtext */}
                        <p className="text-secondary text-xs sm:text-sm leading-relaxed max-w-[220px]">
                          {cat.total_models} {cat.total_models === 1 ? "model" : "models"} available
                        </p>
                        {cat.note && (
                          <p className="text-xs text-primary/80 mt-1 font-medium">
                            {cat.note}
                          </p>
                        )}

                      </motion.div>
                    );
                  })}
                </div>
              )}
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
                Select your {selectedCategory.name} model
              </h3>
              
              {!selectedCategory.models || selectedCategory.models.length === 0 ? (
                <div className="text-center py-10 bg-[#161616] rounded-[20px]">
                  <p className="text-secondary text-sm">No models found for this device.</p>
                </div>
              ) : (
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
                      key={model.id}
                      onClick={() => handleSelectModel(model)}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 100, damping: 14 }}
                      className="cursor-pointer bg-[#161616] hover:bg-[#1e1e1e] border border-white/5 hover:border-primary p-6 rounded-[20px] flex flex-col items-start transition-all duration-300 group"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {model.name}
                      </h4>
                      <p className="text-secondary text-xs font-medium">
                        {model.total_services} {model.total_services === 1 ? "repair service" : "repair services"} available
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
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
                  Choose a service to view estimated pricing and details.
                </p>
              </div>

              {isLoadingServices ? (
                <div className="flex flex-col gap-4">
                  {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="bg-[#161616] rounded-[20px] p-6 animate-pulse flex justify-between items-center">
                      <div className="w-1/2">
                        <div className="h-5 bg-white/10 rounded w-3/4 mb-2" />
                        <div className="h-3 bg-white/5 rounded w-1/2" />
                      </div>
                      <div className="h-7 bg-white/10 rounded w-20" />
                    </div>
                  ))}
                </div>
              ) : repairItems.length === 0 ? (
                <div className="text-center py-10 bg-[#161616] rounded-[20px]">
                  <p className="text-secondary text-sm">No repair services available for this model yet.</p>
                </div>
              ) : (
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
                  {repairItems.map((repair, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 100, damping: 14 }}
                      className="bg-[#161616] border border-white/5 rounded-[20px] p-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/40 hover:bg-[#1e1e1e] transition-all duration-300 group"
                    >
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                          {repair.name}
                        </h4>
                      
                        <div className="flex items-center gap-2 text-xs text-primary font-semibold mt-2">
                          <span className="w-4 h-4 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-[10px] text-primary">
                            <LuCheck size={10} />
                          </span>
                            {repair.details && (
                          <p className="text-secondary text-xs sm:text-sm ">
                            {repair.details}
                          </p>
                        )}
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold text-primary shrink-0 self-start sm:self-center">
                        ${Number(repair.price).toFixed(2)}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
