"use client";

import React from "react";
import PolicyLayout from "@/components/common/PolicyLayout";
import { useGetCookiePolicyQuery } from "@/redux/api/apiSlice";

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      useQueryHook={useGetCookiePolicyQuery}
      currentSlug="cookie-policy"
      fallbackTitle="Cookie Policy"
    />
  );
}
