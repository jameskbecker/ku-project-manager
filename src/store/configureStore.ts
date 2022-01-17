import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects';

export default configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
