import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewProject: false,
  showInvite: false,
  showDeleteAll: false,
  isLoading: null,
  selectedProject: '',
  filter: '',
  data: [],
  members: [],
};

export const fetchAllProjects = createAsyncThunk(
  'projects/getProjects',
  async () => {
    // 'https://kupm-api.herokuapp.com/api/projects'
    const res = await fetch('/local/api/projects');
    return await res.json();
  }
);

// Used for PUT and POST
export const saveProject = createAsyncThunk(
  'projects/saveProject',
  async (payload: any) => {
    // 'https://kupm-api.herokuapp.com/api/projects',
    const { id } = payload;
    const baseEndpoint = '/local/api/projects';
    const res = await fetch(id ? `${baseEndpoint}/${id}` : baseEndpoint, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return await res.json();
  }
);

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (payload: any) => {
    // 'https://kupm-api.herokuapp.com/api/projects'
    const resp = await fetch(`/local/api/projects/${payload.id}`, {
      method: 'DELETE',
    });

    return await resp.json();
  }
);

export const fetchProjectMembers = createAsyncThunk(
  'projects/getMembers',
  async (payload: any) => {
    // 'https://kupm-api.herokuapp.com/api/projects'
    const { projectId } = payload;
    const res = await fetch(`/local/api/projects/${projectId}/members`);
    const body = await res.json();
    console.log(body);
    return body;
  }
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
