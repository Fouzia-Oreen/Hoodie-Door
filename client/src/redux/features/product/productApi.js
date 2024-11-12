/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseUrl.js';

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery : fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/products`,
        credentials: 'include'
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        // fetch-all-products
        fetchAllProducts : builder.query({
            query: ({category, color, minPrice, maxPrice, page = 1, limit = 10}) => {
                const queryParams = new URLSearchParams({
                    category:category || "",
                    color:color || "",
                    minPrice:minPrice || 0,
                    maxPrice:maxPrice || 0,
                    page:page.toString() ,
                    limit:limit.toString() ,
                }).toString();
                return `/?${queryParams}`
            },
            providedTags : ["Products"]
        }),
        // fetch-product-by-id
        fetchProductById : builder.query ({
            query: (id) => `/${id}`,
            providedTags : (result, error, id) => [{typr: "Products", id}]
        }),
        // add or create products
        addProduct : builder.mutation({
            query: (newProduct) => ({
                url : '/add-product',
                method: "POST",
                body: newProduct,
                credentials: "includes"
            }),
            invalidatesTags: ["Products"]
        }),
        // fetch-related-products
        fetchRelatedProducts : builder.query({
            query: (id) => ({
                url : `/related/${id}`,
                method: "GET",
            }),
        }),
        // update-products
        updateProduct : builder.mutation({
            query: ({id, ...rest}) => ({
                url : `/update-product/${id}`,
                method: "PATCH",
                body: rest,
                credentials:"includes"
            }),
            invalidatesTags: ["Products"]
        }),
        // delete-product
        deleteProduct : builder.mutation({
            query: (id) => ({
                url : `/${id}`,
                method: "DELETE",
                credentials: "includes"
            }),
            invalidatesTags: (result, error, id) =>  [{type:"Products", id}],
        }),
    })
})
export const { useFetchAllProductsQuery, 
               useFetchProductByIdQuery, 
               useAddProductMutation, 
               useFetchRelatedProductsQuery,    
               useUpdateProductMutation, 
               useDeleteProductMutation
             } = productApi;

export default productApi
