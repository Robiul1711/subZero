import React from "react";
import Banner from "./_components/Banner";
import Stats from "./_components/Stats";
import Process from "./_components/Process";
import Shop from "./_components/Shop";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

const page = () => {
  return (
    <>
      <Banner />
      <Stats />
      <Process />
      <Shop />
      <Testimonials />
      <CTA />
    </>
  );
};

export default page;
