import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/users'
    }),
    endpoints(builder) {
        return {
            signup: builder.mutation({
                query: (data) => {
                    return {
                        url: '/signup',
                        method: 'POST',
                        body: data,
                    }
                },
            }),
            login: builder.mutation({
                query: (data) => {
                    return {
                        url: '/login',
                        method: 'POST',
                        body: data,
                    }
                },
            }),
        }
    }
})


export const { useLoginMutation, useSignupMutation } = userApi