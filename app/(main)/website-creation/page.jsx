import React from "react";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "Repair Services | CREMA INFORMATICA",
  description:
    "Expert iPhone, iPad, smartphone, laptop, and console repair services.",
};

export default function ServicePage() {
  return (
    <div className="pt-[80px]">
   
      <Testimonials />
      <CTA />
    </div>
  );
}
