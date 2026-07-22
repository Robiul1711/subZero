import React from "react";
import CollectionDetails from "@/app/(main)/_components/CollectionDetails";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "Collection Item Details | CREMA INFORMATICA",
  description:
    "View full specification, condition report, and warranty details for certified pre-owned devices.",
};

export default function CollectionItemPage() {
  return (
    <div className="pt-[80px]">
      <CollectionDetails />
      <Testimonials />
      <CTA />
    </div>
  );
}
