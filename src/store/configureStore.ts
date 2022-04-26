import { apiSlice } from '@kupm/features/api/apiSlice';
import authReducer from '@kupm/features/auth/authSlice';
import dashboardReducer from '@kupm/features/dashboard/dashboardSlice';
import projectsReducer from '@kupm/features/projects/projectsSlice';
import settingsReducer from '@kupm/features/settings/settingsSlice';
import tasksReducer from '@kupm/features/tasks/tasksSlice';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
