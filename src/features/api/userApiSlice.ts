import { apiSlice } from '@kupm/features/api/apiSlice';
import { getCookie } from '@kupm/utils/cookie';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        const id = getCookie('kupm_user_id');
        return `/users/${id}`;
      },
    }),
    getNotifications: builder.query({
      query: () => {
        const id = getCookie('kupm_user_id');
        return `/users/${id}/notifications`;
      },
    }),
    getTodo: builder.query({
      query: () => {
        const id = getCookie('kupm_user_id');
        return `/users/${id}/todo`;
      },
    }),
  }),
});

export const { useGetUserQuery, useGetNotificationsQuery, useGetTodoQuery } =
  userApiSlice;
