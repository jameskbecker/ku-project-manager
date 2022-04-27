import { getCookie } from '@kupm/utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  RegisterPayload,
  LoginPayload,
  PostProjectArgs,
  UpdateProjectArgs,
  CompleteProjectArgs,
} from '@kupm/features/api/types';
declare const BASE_URL: string;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers, api) => {
      headers.set('Access-Control-Allow-Origin', location.origin);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (args: RegisterPayload) => ({
        url: '/auth/register',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: args,
      }),
    }),
    login: builder.mutation({
      query: (args: LoginPayload) => ({
        url: '/auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: args,
      }),
    }),
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

    getProjects: builder.query({
      query: () => {
        const id = getCookie('kupm_user_id');
        return `/projects?userId=${id}`;
      },
    }),
    addProject: builder.mutation({
      query: (args: PostProjectArgs) => ({
        url: '/projects',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: args,
      }),
    }),
    updateProject: builder.mutation({
      query: ({ id, ...body }: UpdateProjectArgs | CompleteProjectArgs) => ({
        url: `/projects/${id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body,
      }),
    }),
    deleteProject: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
    }),
    getProjectMembers: builder.query({
      query: (args) => {
        return `/projects/${args.id}/members`;
      },
    }),
    getProjectTasks: builder.query({
      query: (args) => {
        return `/projects/${args.id}/tasks`;
      },
    }),
    addTask: builder.mutation({
      query: (args: PostProjectArgs) => ({
        url: `/tasks`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: args,
      }),
    }),
    updateTask: builder.mutation({
      query: ({ id, ...body }: UpdateProjectArgs | CompleteProjectArgs) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserQuery,
  useGetNotificationsQuery,
  useGetTodoQuery,
  useGetProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetProjectMembersQuery,
  useGetProjectTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
} = apiSlice;
