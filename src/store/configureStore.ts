import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects';
import tasksReducer from './tasks';
import settingsReducer from './settings';

export default configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
  },
});
