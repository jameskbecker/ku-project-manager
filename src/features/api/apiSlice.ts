import { getCookie } from '@kupm/utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
declare const BASE_URL: string;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api` }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => {
        const userId = getCookie('kupm_user_id');
        return `/projects?userId=${userId}`;
      },
    }),
  }),
});

export const { useGetProjectsQuery } = apiSlice;
