import accountPanelReducer from '@kupm/features/accountPanel/accountPanelSlice';
import { apiSlice } from '@kupm/features/api/apiSlice';
import appearancePanelReducer from '@kupm/features/appearancePanel/appearancePanelSlice';
import deleteProjectsModalReducer from '@kupm/features/deleteProjectsModal/deleteProjectsModalSlice';
import inviteModalReducer from '@kupm/features/inviteModal/inviteModalSlice';
import newProjectModalReducer from '@kupm/features/newProjectModal/newProjectModalSlice';
import projectsReducer from '@kupm/features/projects/projectsSlice';
import sidebarReducer from '@kupm/features/sidebar/sidebarSlice';
import tasksReducer from '@kupm/features/tasks/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    projects: projectsReducer,
    inviteModal: inviteModalReducer,
    newProjectModal: newProjectModalReducer,
    deleteProjectsModal: deleteProjectsModalReducer,
    tasks: tasksReducer,
    accountPanel: accountPanelReducer,
    appearancePanel: appearancePanelReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
