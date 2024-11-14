// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import getBaseUrl from '../../../utils/baseUrl.js';

// const productsApi = createApi({
//     reducerPath: 'productsApi',
//     baseQuery : fetchBaseQuery({
//         baseUrl: `${getBaseUrl()}/api/products`,
//         credentials: 'include'
//     }),
//     tagTypes: ['Products'],
//     endpoints: (builder) => ({
//         // fetch-all-products
//         fetchAllProducts : builder.query({
//             query: ({category, color, minPrice, maxPrice, page = 1, limit = 10}) => {
//                 const queryParams = new URLSearchParams({
//                     category : category || "",
//                     color : color || "",
//                     minPrice : minPrice || 0,
//                     maxPrice : maxPrice || '',
//                     page : page.toString() ,
//                     limit : limit.toString() ,
//                 }).toString()
//                 return `/?${queryParams}`
//             },
//             providedTags : ["Products"]
//         }),
//         // fetch-product-by-id
//         fetchProductById : builder.query({
//             query: (id) => `/${id}`,
//             providedTags : (result, error, id) => [{type: "Products", id}]
//         }),
//         // add or create products
//         addProduct : builder.mutation({
//             query: (newProduct) => ({
//                 url : '/add-product',
//                 method: "POST",
//                 body: newProduct,
//                 credentials: "include"
//             }),
//             invalidatesTags: ["Products"]
//         }),
//         // fetch-related-products
//         fetchRelatedProducts : builder.query({
//             query: (id) => ({
//                 url : `/related/${id}`,
//             }),
//         }),
//         // update-products
//         updateProduct : builder.mutation({
//             query: ({id, ...rest}) => ({
//                 url : `/update-product/${id}`,
//                 method: "PATCH",
//                 body: rest,
//                 credentials:"include"
//             }),
//             invalidatesTags: ["Products"]
//         }),
//         // delete-product
//         deleteProduct : builder.mutation({
//             query: (id) => ({
//                 url : `/${id}`,
//                 method: "DELETE",
//                 credentials: "include"
//             }),
//             invalidatesTags: (result, error, id) => [{type:"Products", id}],
//         }),
//     })
// })
// export const { useFetchAllProductsQuery, 
//                useFetchProductByIdQuery, 
//                useAddProductMutation, 
//                useFetchRelatedProductsQuery,    
//                useUpdateProductMutation, 
//                useDeleteProductMutation
//              } = productsApi;

// export default productsApi
