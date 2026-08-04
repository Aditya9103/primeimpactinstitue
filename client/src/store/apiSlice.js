import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Contact', 'Demo', 'Blog'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    getContacts: builder.query({
      query: () => '/contact',
      providesTags: ['Contact'],
    }),
    submitContact: builder.mutation({
      query: (data) => ({
        url: '/contact',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContactStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/contact/${id}/status`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    
    // DEMO ENDPOINTS
    bookDemo: builder.mutation({
      query: (data) => ({
        url: '/demo',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Demo'],
    }),
    getDemos: builder.query({
      query: () => '/demo',
      providesTags: ['Demo'],
    }),
    updateDemoStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/demo/${id}/status`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Demo'],
    }),
    deleteDemo: builder.mutation({
      query: (id) => ({
        url: `/demo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Demo'],
    }),

    // --- BLOG ENDPOINTS ---
    getBlogs: builder.query({
      query: (params) => {
        let queryString = '/blog';
        if (params) {
          const searchParams = new URLSearchParams(params);
          queryString += `?${searchParams.toString()}`;
        }
        return queryString;
      },
      providesTags: ['Blog'],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => `/blog/${slug}`,
      providesTags: (result, error, arg) => [{ type: 'Blog', id: arg }],
    }),
    getBlogById: builder.query({
      query: (id) => `/blog/id/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Blog', id: arg }],
    }),
    createBlog: builder.mutation({
      query: (formData) => ({
        url: '/blog',
        method: 'POST',
        body: formData,
        // When sending FormData with fetch/RTK query, do NOT set Content-Type to application/json
        // The browser will automatically set multipart/form-data with the correct boundary
      }),
      invalidatesTags: ['Blog'],
    }),
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/blog/id/${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Blog'],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/id/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blog'],
    }),

    // --- NEWSLETTER ENDPOINTS ---
    subscribeNewsletter: builder.mutation({
      query: (data) => ({
        url: '/newsletter',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetContactsQuery,
  useSubmitContactMutation,
  useUpdateContactStatusMutation,
  useDeleteContactMutation,
  useBookDemoMutation,
  useGetDemosQuery,
  useUpdateDemoStatusMutation,
  useDeleteDemoMutation,
  useGetBlogsQuery,
  useGetBlogBySlugQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useSubscribeNewsletterMutation,
} = apiSlice;
