import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApiSlice = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    endpoints(builder) {
        return {
            getProducts: builder.query({
                query: () => {
                    return {
                        url: '/products',
                        method: 'GET'
                    }
                }
            }),

            getIndividualProduct: builder.query({
                query: (productID) => {
                    return {
                        url: `/products/${productID}`,
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useGetProductsQuery, useGetIndividualProductQuery } = productsApiSlice