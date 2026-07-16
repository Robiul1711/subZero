import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithInterceptor from "@/redux/api/baseQueryWithInterceptor";

export const apiSlice = createApi({
  reducerPath: "api",
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["User", "Products", "Orders"],
  endpoints: builder => ({
    login: builder.mutation({
      query: payload => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),

    register: builder.mutation({
      query: payload => ({
        url: "/users/add",
        method: "POST",
        body: payload,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),

    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),

    getData: builder.query({
      query: ({ limit, color, price, search, category }) => ({
        url: "/products",
        method: "GET",
        params: {
          limit,
          color,
          price,
          search,
          category,
        },
      }),
    }),

    getAllData: builder.query({
      query: params => ({
        url: "/products",
        method: "GET",
        params,
      }),
    }),

    addProduct: builder.mutation({
      query: payload => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),

      invalidatesTags: ["Products"],
    }),

    getPosts: builder.query({
      query: page => `/posts?_page=${page}&_limit=5`,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetMeQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useGetPostsQuery,
} = apiSlice;
