import React, { Suspense } from "react";
import CollectionDetails from "@/app/(main)/_components/CollectionDetails";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "Collection Details | CREMA INFORMATICA",
  description:
    "View full specification, condition report, and warranty details for certified pre-owned devices.",
};

export default function CollectionDetailsPage() {
  return (
    <div className="pt-[60px]">
      <Suspense
        fallback={
          <div className="w-full section-padding-x py-12 animate-pulse">
            <div className="h-6 bg-white/10 rounded w-32 mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 h-[400px] bg-white/5 rounded-3xl" />
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="h-6 bg-white/10 rounded w-1/3" />
                <div className="h-10 bg-white/10 rounded w-3/4" />
                <div className="h-20 bg-white/5 rounded w-full" />
                <div className="h-12 bg-white/10 rounded w-full mt-6" />
              </div>
            </div>
          </div>
        }
      >
        <CollectionDetails />
      </Suspense>
      <Testimonials />
      <CTA />
    </div>
  );
}
