"use client";

import React from "react";
import PolicyLayout from "@/components/common/PolicyLayout";
import { useGetPrivacyPolicyQuery } from "@/redux/api/apiSlice";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      useQueryHook={useGetPrivacyPolicyQuery}
      currentSlug="privacy-policy"
      fallbackTitle="Privacy Policy"
    />
  );
}
