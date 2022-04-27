import { getCookie } from '@kupm/utils/cookie';
declare const BASE_URL: string;

// export const getProjects = async () => {
//   const userId = getCookie('kupm_user_id');
//   const res = await fetch(`${BASE_URL}/api/projects?userId=${userId}`);
//   return await res.json();
// };

// export const postProject = async (payload: any) => {
//   const { id } = payload;
//   const baseEndpoint = `${BASE_URL}/api/projects`;
//   const res = await fetch(id ? `${baseEndpoint}/${id}` : baseEndpoint, {
//     method: id ? 'PUT' : 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });

//   return await res.json();
// };

export const deleteProjectRequest = async (payload: any) => {
  const { id } = payload;
  console.log(id);
  const resp = await fetch(`${BASE_URL}/api/projects/${payload.id}`, {
    method: 'DELETE',
  });

  return await resp.json();
};

export const getProjectMembers = async (payload: any) => {
  const { projectId } = payload;
  const res = await fetch(`${BASE_URL}/api/projects/${projectId}/members`);
  const body = await res.json();
  return body;
};

export const postProjectInvite = async (payload: any) => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(`${BASE_URL}/api/invites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, userId }),
  });

  return await res.json();
};

export const getProjectActiviy = async ({ id }: any) => {
  const res = await fetch(`${BASE_URL}/api/projects/${id}/activity`);
  return await res.json();
};

export const getProjectTasks = async ({ projectId }: any) => {
  const res = await fetch(`${BASE_URL}/api/projects/${projectId}/tasks`);
  return await res.json();
};
