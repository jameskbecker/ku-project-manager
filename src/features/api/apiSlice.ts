import { getCookie } from '@kupm/utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
declare const BASE_URL: string;

interface PostProjectArgs {
  name: string;
  dueAt: string;
  description: string;
  priority: string;
  createdBy: string;
}

interface UpdateProjectArgs extends PostProjectArgs {
  id: string;
}

interface CompleteProjectArgs {
  id: string;
  is_complete: boolean;
}

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
        const userId = getCookie('kupm_user_id');
        return `/projects?userId=${userId}`;
      },
    }),
    postProject: builder.mutation({
      query: (args: PostProjectArgs) => ({
        url: `${BASE_URL}/api/projects`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: args,
      }),
    }),
    updateProject: builder.mutation({
      query: ({ id, ...body }: UpdateProjectArgs | CompleteProjectArgs) => ({
        url: `${BASE_URL}/api/projects/${id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body,
      }),
    }),
    deleteProject: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${BASE_URL}/api/projects/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProjectsQuery,
  usePostProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = apiSlice;
