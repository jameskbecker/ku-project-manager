import {
  CompleteProjectArgs,
  PostProjectArgs,
  UpdateProjectArgs,
} from '@kupm/features/api/types';
import { getCookie } from '@kupm/utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
declare const BASE_URL: string;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers, api) => {
      if (api.endpoint === 'mutation') {
        headers.set('Content-Type', 'application/json');
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
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
        body: args,
      }),
    }),
    updateProject: builder.mutation({
      query: ({ id, ...body }: UpdateProjectArgs | CompleteProjectArgs) => ({
        url: `/projects/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteProject: builder.mutation({
      query: ({ id }) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
    }),
    getProjectMembers: builder.query({
      query: (args) => `/projects/${args.id}/members`,
    }),
    getProjectActivity: builder.query({
      query: (args) => `/projects/${args.id}/activity`,
    }),
    getProjectTasks: builder.query({
      query: (args) => `/projects/${args.id}/tasks`,
    }),
    sendInvite: builder.mutation({
      query: (args: any) => {
        const userId = getCookie('kupm_user_id');
        return {
          url: `/invites`,
          method: 'POST',
          body: { ...args, userId },
        };
      },
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetProjectMembersQuery,
  useGetProjectActivityQuery,
  useGetProjectTasksQuery,
  useSendInviteMutation,
} = apiSlice;
