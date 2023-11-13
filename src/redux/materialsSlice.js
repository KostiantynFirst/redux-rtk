import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6551cd285c69a77903291a91.mockapi.io' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),      
  }),
});

export const { useGetContactsQuerry } = contactsApi;