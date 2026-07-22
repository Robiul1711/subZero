import React from "react";
import WebsiteHero from "../_components/WebsiteHero";
import CreativeServices from "../_components/CreativeServices";
import WhyChooseUs from "../_components/WhyChooseUs";
import WhyWebsite from "../_components/WhyWebsite";
import IdeasToWebsite from "../_components/IdeasToWebsite";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "Custom Website Creation | CREMA INFORMATICA",
  description:
    "We create modern, responsive, and scalable websites tailored to your business, helping you attract customers and grow online.",
};

export default function WebsiteCreationPage() {
  return (
    <div className="pt-15">
      <WebsiteHero />
      <WhyWebsite />
      <CreativeServices />
      <WhyChooseUs />
      <IdeasToWebsite />
      <Testimonials />
      <CTA />
    </div>
  );
}
