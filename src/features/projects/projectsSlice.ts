import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postInvite } from '@kupm/features/api/invites';
import {
  deleteProjectRequest,
  getProjectActiviy,
  getProjectMembers,
  getProjects,
  postProject,
} from '@kupm/features/api/projects';

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
    /** ----------------------------- FETCH ALL PROJECTS -------------------------------- */
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

    /** -------------------------------- SAVE PROJECT ----------------------------------- */
    builder.addCase(saveProject.pending, ({ payload }) => {
      console.log('Creating Project...');
    });
    //Consider returning new project from API and updating here instead of refetching all
    builder.addCase(saveProject.fulfilled, (state, { payload }) => {
      if (!payload.success || !payload.data) return;
      console.log('Created New Project!');
      state.data = [...state.data, ...payload.data];
    });
    builder.addCase(saveProject.rejected, () => {});

    /** -------------------------------- DELETE PROJECT ----------------------------------- */
    builder.addCase(deleteProject.pending, () => {
      console.log('Deleting Project');
    });
    builder.addCase(deleteProject.fulfilled, (state, { meta, payload }) => {
      if (!payload.success) return;
      state.data = state.data.filter((d: any) => d.id !== meta.arg.id);
    });
    builder.addCase(deleteProject.rejected, () => {
      console.log('Failed to Delete Project');
    });

    /** --------------------------- FETCH PROJECT MEMBERS ------------------------------ */
    builder.addCase(fetchProjectMembers.pending, () => {});
    builder.addCase(fetchProjectMembers.fulfilled, (state, { payload }) => {
      if (!payload.success) {
        console.log('error member');
      }
      state.members = payload.data;
    });
    builder.addCase(fetchProjectMembers.rejected, () => {});

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
