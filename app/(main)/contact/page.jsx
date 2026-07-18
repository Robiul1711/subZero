import React from "react";
import ContactSection from "../_components/ContactSection";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "Contact Us | CREMA INFORMATICA",
  description: "Get in touch with our experts for professional phone, tablet, and laptop repairs, or custom website inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-15 md:pt-20">
      <ContactSection />
      <Testimonials />
      <CTA />
    </div>
  );
}
