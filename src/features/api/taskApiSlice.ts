import { apiSlice } from '@kupm/features/api/apiSlice';
import {
  CompleteProjectArgs,
  PostProjectArgs,
  UpdateProjectArgs,
} from './types';

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubTasks: builder.query({
      query: ({ taskId }) => `/tasks/${taskId}/subtasks`,
    }),
    addTask: builder.mutation({
      query: (args: PostProjectArgs) => ({
        url: `/tasks`,
        method: 'POST',
        body: args,
      }),
    }),
    updateTask: builder.mutation({
      query: ({ id, ...body }: UpdateProjectArgs | CompleteProjectArgs) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetSubTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApiSlice;
