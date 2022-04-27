import { apiSlice } from '@kupm/features/api/apiSlice';
import projectsReducer from '@kupm/features/projects/projectsSlice';
import settingsReducer from '@kupm/features/settings/settingsSlice';
import tasksReducer from '@kupm/features/tasks/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
