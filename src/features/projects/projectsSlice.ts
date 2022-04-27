import { postInvite } from '@kupm/features/api/invites';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewProject: false,
  showInvite: false,
  showDeleteAll: false,
  selectedProject: '',
  filter: '',
};

export const sendInvite = createAsyncThunk('projects/sendInvite', postInvite);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    toggleDeleteAll: (state) => {
      state.showDeleteAll = !state.showDeleteAll;
    },

    toggleNewProject: (state) => {
      state.showNewProject = !state.showNewProject;
    },

    toggleInvite: (state) => {
      state.showInvite = !state.showInvite;
    },

    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
    },

    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
  extraReducers: (builder) => {
    /** -------------------------------- SEND INVITE ----------------------------------- */
  },
});

export const {
  toggleDeleteAll,
  toggleInvite,
  toggleNewProject,
  selectProject,
  applyFilter,
} = projectsSlice.actions;
export default projectsSlice.reducer;
