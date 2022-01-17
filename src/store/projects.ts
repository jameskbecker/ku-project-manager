import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewProject: false,
  isLoading: null,
  selectedProject: '',
  data: [],
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
    console.log(payload);
    // 'https://kupm-api.herokuapp.com/api/projects'
    const resp = await fetch(`/local/api/projects/${payload.id}`, {
      method: 'DELETE',
    });

    return await resp.json();
  }
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    toggleNewProject: (state) => {
      state.showNewProject = !state.showNewProject;
    },

    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
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
      if (state.data === payload) return;

      state.data = payload;
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
  },
});

export const { toggleNewProject, selectProject } = projectsSlice.actions;
export default projectsSlice.reducer;
