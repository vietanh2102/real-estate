import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { New, Post } from '../types/PostType'
export const blogApi = createApi({
    reducerPath: 'news', // tên field trong redux
    baseQuery: fetchBaseQuery({ baseUrl: 'https://86ygqt-8080.csb.app/' }),
    // endPoint là tập hợp các method get, post, delete,...
    // endpoint có 2 kiểu query(get) và mutation cho các method khác
    endpoints: (builder) => ({
        getNews: builder.query<New[], void>({
            query: () => 'news'
        }),
        getPost: builder.query<Post[], void>({
            query: () => 'estates'
        })
    })
})
export const { useGetNewsQuery, useGetPostQuery } = blogApi // hook sinh ra khi khai báo các endpoint