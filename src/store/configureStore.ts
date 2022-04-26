import authReducer from '@kupm/store/auth';
import dashboardReducer from '@kupm/store/dashboard';
import projectsReducer from '@kupm/store/projects';
import settingsReducer from '@kupm/store/settings';
import tasksReducer from '@kupm/store/tasks';
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
