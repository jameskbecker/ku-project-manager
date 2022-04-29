import { apiSlice } from '@kupm/features/api/apiSlice';
import appearancePanelReducer from '@kupm/features/appearancePanel/appearancePanelSlice';
import projectsReducer from '@kupm/features/projects/projectsSlice';
import settingsReducer from '@kupm/features/settings/settingsSlice';
import sidebarReducer from '@kupm/features/sidebar/sidebarSlice';
import tasksReducer from '@kupm/features/tasks/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
    appearancePanel: appearancePanelReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
