import { apiSlice } from '@kupm/features/api/apiSlice';
import { LoginPayload, RegisterPayload } from '@kupm/features/api/types';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (args: RegisterPayload) => ({
        url: '/auth/register',
        method: 'POST',
        body: args,
      }),
    }),
    login: builder.mutation({
      query: (args: LoginPayload) => ({
        url: '/auth/login',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApiSlice;
