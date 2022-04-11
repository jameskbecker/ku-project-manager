import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboard';
import projectsReducer from './projects';
import tasksReducer from './tasks';
import settingsReducer from './settings';
import authReducer from './auth';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
    auth: authReducer,
  },
});
