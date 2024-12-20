// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import getBaseUrl from '../../../utils/baseUrl.js';

// const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery : fetchBaseQuery({
//         baseUrl: `${getBaseUrl()}/api/auth`,
//         credentials: 'include'
//     }),
//     tagTypes: ['User'],
//     endpoints: (builder) => ({
//         // register-user
//         registerUser : builder.mutation({
//             query: (newUser) => ({
//                 url : '/register',
//                 method: "POST",
//                 body: newUser
//             })
//         }),
//         // login-user
//         loginUser : builder.mutation({
//             query: (credentials) => ({
//                 url : '/login',
//                 method: "POST",
//                 body: credentials
//             })
//         }),
//         // logout-user
//         logoutUser : builder.mutation({
//             query: () => ({
//                 url : '/logout',
//                 method: "POST",
//             })
//         }),
//         // delete-user
//         deleteUser : builder.mutation({
//             query: (userId) => ({
//                 url : `/users/${userId}`,
//                 method: "DELETE",
//             }),
//             invalidatesTags: ["User"],
//         }),
//         // update-user
//         updateUserRole : builder.mutation({
//             query: ({userId, role}) => ({
//                 url : `/users/${userId}`,
//                 method: "PUT",
//                 body: {role}
//             }),
//             refetchOnMount: true,
//             invalidatesTags: ["User"],
//         }),
//         // edit-user-profile
//         editProile : builder.mutation({
//             query: (profileData) => ({
//                 url : `/edit-profile`,
//                 method: "PATCH",
//                 body: profileData
//             })
//         }),
//         // get-all-user
//         getUser : builder.query({
//             query: () => ({
//                 url : '/users',
//                 method: "GET",
//             }),
//             refetchOnMount: true,
//             invalidatesTags: ["User"],
//         }),
//     })
// })
// export const {  useRegisterUserMutation, 
//                 useLoginUserMutation,
//                 useLogoutUserMutation,
//                 useDeleteUserMutation,
//                 useEditProileMutation,
//                 useUpdateUserRoleMutation,
//                 useGetUserQuery,
//              } = authApi;
// export default authApi