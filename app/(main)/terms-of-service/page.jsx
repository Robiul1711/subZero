"use client";

import React from "react";
import PolicyLayout from "@/components/common/PolicyLayout";
import { useGetTermsOfServiceQuery } from "@/redux/api/apiSlice";

export default function TermsOfServicePage() {
  return (
    <PolicyLayout
      useQueryHook={useGetTermsOfServiceQuery}
      currentSlug="terms-of-service"
      fallbackTitle="Terms of Service"
    />
  );
}
