declare const BASE_URL: string;

export const getProjectActiviy = async ({ id }: any) => {
  const res = await fetch(`${BASE_URL}/api/projects/${id}/activity`);
  return await res.json();
};
