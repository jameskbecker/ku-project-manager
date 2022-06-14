import accountPanelReducer from '@kupm/features/accountPanel/accountPanelSlice';
import addCommentModalReducer from '@kupm/features/addCommentModal/addCommentSlice';
import { apiSlice } from '@kupm/features/api/apiSlice';
import appearancePanelReducer from '@kupm/features/appearancePanel/appearancePanelSlice';
import deleteProjectsModalReducer from '@kupm/features/deleteProjectsModal/deleteProjectsModalSlice';
import inviteModalReducer from '@kupm/features/inviteModal/inviteModalSlice';
import membersModalReducer from '@kupm/features/membersModal/membersModalSlice';
import myProjectsControlbarReducer from '@kupm/features/myProjectsControlbar/myProjectsControlbarSlice';
import newProjectModalReducer from '@kupm/features/newProjectModal/newProjectModalSlice';
import newTaskModalReducer from '@kupm/features/newTaskModal/newTaskModalSlice';
import passwordResetModalReducer from '@kupm/features/passwordResetModal/passwordResetModalSlice';
import projectsReducer from '@kupm/features/projects/projectsSlice';
import SharedProjectsControlbarReducer from '@kupm/features/sharedProjectsControlbar/SharedProjectsControlbarSlice';
import sidebarReducer from '@kupm/features/sidebar/sidebarSlice';
import tasksReducer from '@kupm/features/tasks/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    projects: projectsReducer,
    tasks: tasksReducer,

    inviteModal: inviteModalReducer,
    newProjectModal: newProjectModalReducer,
    newTaskModal: newTaskModalReducer,
    addCommentModal: addCommentModalReducer,
    membersModal: membersModalReducer,
    deleteProjectsModal: deleteProjectsModalReducer,
    passwordResetModal: passwordResetModalReducer,

    myProjectsControlbar: myProjectsControlbarReducer,
    sharedProjectsControlbar: SharedProjectsControlbarReducer,

    accountPanel: accountPanelReducer,
    appearancePanel: appearancePanelReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
