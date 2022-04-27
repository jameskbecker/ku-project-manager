import { postInvite } from '@kupm/features/api/invites';
import { getProjectActiviy } from '@kupm/features/api/projects';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewProject: false,
  showInvite: false,
  showDeleteAll: false,
  isLoading: null,
  selectedProject: '',
  filter: '',
  activity: [],
};

export const sendInvite = createAsyncThunk('projects/sendInvite', postInvite);

export const fetchActivity = createAsyncThunk(
  'projects/getActivity',
  getProjectActiviy
);

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

    /** --------------------------- FETCH PROJECT ACTIVITY ----------------------------- */
    builder.addCase(fetchActivity.pending, (state) => {});
    builder.addCase(fetchActivity.fulfilled, (state, { payload }) => {
      if (!payload.success) {
        console.log('error activity');
      }
      state.activity = payload.data;
    });
    builder.addCase(fetchActivity.rejected, () => {});
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
