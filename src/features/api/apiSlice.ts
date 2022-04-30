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
      headers.set('Access-Control-Allow-Origin', location.origin);
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
    getProjectActivity: builder.query({
      query: (args) => {
        return `/projects/${args.id}/activity`;
      },
    }),
    getProjectTasks: builder.query({
      query: (args) => {
        return `/projects/${args.id}/tasks`;
      },
    }),
    getSubTasks: builder.query({
      query: (args) => {
        return `tasks/${args.taskId}/subtasks`;
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
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
    sendInvite: builder.mutation({
      query: (args: any) => {
        const userId = getCookie('kupm_user_id');
        return {
          url: `/invites`,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
  useGetSubTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useSendInviteMutation,
} = apiSlice;
