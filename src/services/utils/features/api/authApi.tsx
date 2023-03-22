import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const isBrowser = typeof window !== "undefined";
let savedToken: any;
if (isBrowser) {
  const userToken = localStorage.getItem("token");
  savedToken = userToken;
}
const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }) => {
      const state: any = getState();
      console.log("state", state);
      const token = state.auth.user.token;
      headers.set("authorization", savedToken);
      return headers;
    },
  }),
  endpoints: (builder: any) => ({
    // REGISTRATION
    register: builder.mutation({
      query: (body: {
        FullName: string;
        email: string;
        password: string;
        role: string;
      }) => ({
        url: "/api/v3/public/user/signup",
        method: "POST",
        body: body,
      }),
    }),
    // LOGIN
    login: builder.mutation({
      query: (body: {
        email: string;
        password: string;
        allowedUserRoles: ("candidate" | "employer" | "admin" | "superadmin")[];
      }) => ({
        url: "/api/v3/public/user/login",
        method: "POST",
        body: body,
        // credentials: "include",
      }),
    }),
    // GET USER
    getUser: builder.query({
      query: () => ({
        url: "/api/v3/user/me ",
      }),
    }),
    // LOG OUT
    logout: builder.mutation({
      query: () => ({
        url: "/api/v1/auth/logout",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export default authApi;

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserQuery,
  useLogoutMutation,
} = authApi;
