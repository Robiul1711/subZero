import React from "react";
import DeviceMarketplace from "../_components/DeviceMarketplace";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "Device Marketplace | CREMA INFORMATICA",
  description: "Grade-A certified pre-owned smartphones, laptops, tablets, and more. Every device inspected, graded, and warranted.",
};

export default function CollectionPage() {
  return (
    <div className="pt-[80px]">
      <DeviceMarketplace />
      <Testimonials />
      <CTA />
    </div>
  );
}
