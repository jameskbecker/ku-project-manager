import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects';
import tasksReducer from './tasks';

export default configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
  },
});
