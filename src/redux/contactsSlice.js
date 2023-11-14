import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6553de625449cfda0f2f42e0.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact']
    }),
    addContact: builder.mutation({
      query: (values) => ({
        url: '/contacts',
        method: postMessage,
        body: values,
      }),
      invalidatesTags: ['Contact'],
    })     
  }),
});

export const { useGetContactsQuerry, useAddContactMutation } = contactsApi;