import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { New, Post } from "../types/PostType";
interface GetPost {
  type?: string;
  limit?: number;
  start: number;
}

export const blogApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({ baseUrl: "https://r2c5kp-8080.csb.app/" }),
  endpoints: (builder) => ({
    getNews: builder.query<New[], string>({
      query: (type) => `news/?type_like=${type}`,
    }),
    getAllNews: builder.query<New[], void>({
      query: () => `news`,
    }),
    getPost: builder.query<Post[], GetPost>({
      query: ({ limit = 8, start = 0 }) =>
        `estates?_start=${start}&_limit=${limit}`,
    }),
    getSimilarPost: builder.query<Post[], string>({
      query: (location) => `estates?location_like=${location}`,
    }),
  }),
});
export const {
  useGetNewsQuery,
  useGetPostQuery,
  useGetAllNewsQuery,
  useGetSimilarPostQuery,
} = blogApi;
