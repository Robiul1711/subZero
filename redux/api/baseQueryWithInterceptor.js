import { baseQuery } from "@/redux/api/baseQuery";

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  const status = result?.error?.status;

  // Handle 401 interceptor
  if (status === 401) {
    console.log("Unauthenticated. Logging out...");

    // Redux logout
    // api.dispatch(removeUser());
  }

  return result;
};

export default baseQueryWithInterceptor;
