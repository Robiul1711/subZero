import React from "react";
import CollectionDetails from "@/app/(main)/_components/CollectionDetails";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "MacBook Air 13\" M3 | Collection Details | CREMA INFORMATICA",
  description:
    "Practically unused MacBook Air M3. Only opened to test. Battery at 98% with only 12 cycles. Grade-A certified pre-owned with 6-month warranty.",
};

export default function CollectionDetailsPage() {
  return (
    <div className="pt-[60px]">
      <CollectionDetails />
      <Testimonials />
      <CTA />
    </div>
  );
}
