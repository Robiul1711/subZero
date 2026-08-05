"use client";

import React from "react";
import PolicyLayout from "@/components/common/PolicyLayout";
import { useGetWarrantyPolicyQuery } from "@/redux/api/apiSlice";

export default function WarrantyPolicyPage() {
  return (
    <PolicyLayout
      useQueryHook={useGetWarrantyPolicyQuery}
      currentSlug="warranty-policy"
      fallbackTitle="Warranty Policy"
    />
  );
}
