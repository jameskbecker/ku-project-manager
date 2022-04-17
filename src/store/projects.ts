import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postInvite } from '../api/invites';
import {
  deleteProjectRequest,
  getProjectActiviy,
  getProjectMembers,
  getProjects,
  postProject,
} from '../api/projects';

const initialState: any = {
  showNewProject: false,
  showInvite: false,
  showDeleteAll: false,
  isLoading: null,
  selectedProject: '',
  filter: '',
  data: [],
  members: [],
  activity: [],
};

export const fetchAllProjects = createAsyncThunk(
  'projects/getProjects',
  getProjects
);

// Used for PUT and POST
export const saveProject = createAsyncThunk(
  'projects/saveProject',
  postProject
);

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  deleteProjectRequest
);

export const fetchProjectMembers = createAsyncThunk(
  'projects/getMembers',
  getProjectMembers
);

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
    // CRUDL: GET actions
    builder.addCase(fetchAllProjects.pending, (state) => {
      console.log('Fetching Projects');
      state.isLoading = true;
    });

    builder.addCase(fetchAllProjects.fulfilled, (state, { payload }) => {
      console.log('Fetched Projects!', payload);

      // Avoid unneccesary rerenders
      if (state.data === payload.data) return;

      state.data = payload.data;
      state.isLoading = false;
    });

    builder.addCase(fetchAllProjects.rejected, () => {});

    // CRUDL: POST actions
    builder.addCase(saveProject.pending, () => {
      console.log('Creating Project...');
    });

    //Consider returning new project from API and updating here instead of refetching all
    builder.addCase(saveProject.fulfilled, () => {
      console.log('Created New Project!');
    });

    builder.addCase(saveProject.rejected, () => {});

    builder.addCase(fetchProjectMembers.pending, () => {});
    builder.addCase(fetchProjectMembers.fulfilled, (state, { payload }) => {
      if (!payload.success) {
        console.log('error member');
      }
      state.members = payload.data;
    });
    builder.addCase(fetchProjectMembers.rejected, () => {});

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
