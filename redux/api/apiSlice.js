import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithInterceptor from "@/redux/api/baseQueryWithInterceptor";

export const apiSlice = createApi({
  reducerPath: "api",
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [

    "Footer",
    "Testimonials",
    "GoogleReviewsMeta",
    "Policies",
    "HomepageCms",
    "CombinedSections",
    "Products",
    "Devices",
    "ModelServices",
    "RepairPhoneCms",
  ],

  endpoints: builder => ({
    getFooter: builder.query({
      query: () => "/cms/footer",
      providesTags: ["Footer"],
    }),

    getTestimonials: builder.query({
      query: params => ({
        url: "/testimonials",
        method: "GET",
        params,
      }),
      providesTags: ["Testimonials"],
    }),

    getGoogleReviewsMeta: builder.query({
      query: () => "/google-reviews/meta",
      providesTags: ["GoogleReviewsMeta"],
    }),

    sendContact: builder.mutation({
      query: payload => ({
        url: "/contact",
        method: "POST",
        body: payload,
      }),
    }),

    getPrivacyPolicy: builder.query({
      query: () => "/privacy-policy",
      providesTags: ["Policies"],
    }),

    getTermsOfService: builder.query({
      query: () => "/terms-of-service",
      providesTags: ["Policies"],
    }),

    getCookiePolicy: builder.query({
      query: () => "/cookie-policy",
      providesTags: ["Policies"],
    }),

    getWarrantyPolicy: builder.query({
      query: () => "/warranty-policy",
      providesTags: ["Policies"],
    }),

    getHomepageCms: builder.query({
      query: () => "/cms/homepage",
      providesTags: ["HomepageCms"],
    }),

    getCombinedSections: builder.query({
      query: () => "/cms/combined-sections",
      providesTags: ["CombinedSections"],
    }),

    getProductConditions: builder.query({
      query: (params) => ({
        url: "/product-conditions",
        method: "GET",
        params,
      }),
      providesTags: ["Products"],
    }),

    getProductConditionDetails: builder.query({
      query: (slugOrId) => `/product-conditions/${slugOrId}`,
      providesTags: ["Products"],
    }),


    getDevices: builder.query({
      query: () => "/devices",
      providesTags: ["Devices"],
    }),

    getDeviceDetails: builder.query({
      query: (id) => `/devices/${id}`,
      providesTags: ["Devices"],
    }),

    getModelServices: builder.query({
      query: (modelId) => `/models/${modelId}/services`,
      providesTags: ["ModelServices"],
    }),

    getRepairPhoneCms: builder.query({
      query: () => "/cms/repair-phone",
      providesTags: ["RepairPhoneCms"],
    }),
  }),
});

export const {
  useGetFooterQuery,
  useGetTestimonialsQuery,
  useGetGoogleReviewsMetaQuery,
  useSendContactMutation,
  useGetPrivacyPolicyQuery,
  useGetTermsOfServiceQuery,
  useGetCookiePolicyQuery,
  useGetWarrantyPolicyQuery,
  useGetHomepageCmsQuery,
  useGetCombinedSectionsQuery,
  useGetProductConditionsQuery,
  useGetProductConditionDetailsQuery,
  useGetDevicesQuery,
  useGetDeviceDetailsQuery,
  useGetModelServicesQuery,
  useGetRepairPhoneCmsQuery,
} = apiSlice;
