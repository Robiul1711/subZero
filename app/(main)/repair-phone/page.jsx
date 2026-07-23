import React from "react";
import PhoneFixedSection from "../_components/PhoneFixedSection";
import PhoneModelAndPrice from "../_components/PhoneModelAndPrice";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "Repair Services | CREMA INFORMATICA",
  description:
    "Expert iPhone, iPad, smartphone, laptop, and console repair services.",
};

export default function RepairPage() {
  return (
    <div className="pt-15 md:pt-20">
      <PhoneFixedSection />
      <PhoneModelAndPrice />
      <Testimonials />
      <CTA />
    </div>
  );
}
