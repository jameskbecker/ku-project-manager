import authReducer from '@/store/auth';
import dashboardReducer from '@/store/dashboard';
import projectsReducer from '@/store/projects';
import settingsReducer from '@/store/settings';
import tasksReducer from '@/store/tasks';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
    auth: authReducer,
  },
});
