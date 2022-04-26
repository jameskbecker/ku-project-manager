declare const BASE_URL: string;

export const getSubTasks = async ({ taskId }: any) => {
  const res = await fetch(`${BASE_URL}/api/tasks/${taskId}/subtasks`);
  return await res.json();
};

export const postTask = async (payload: any) => {
  const { id } = payload;
  const baseEndpoint = `${BASE_URL}/api/tasks`;
  const res = await fetch(id ? `${baseEndpoint}/${id}` : baseEndpoint, {
    method: id ? 'PUT' : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return await res.json();
};

export const deleteTaskRequest = async (payload: any) => {
  const resp = await fetch(`${BASE_URL}/api/tasks/${payload.id}`, {
    method: 'DELETE',
  });

  return await resp.json();
};
