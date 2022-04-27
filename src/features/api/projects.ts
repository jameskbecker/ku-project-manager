import { getCookie } from '@kupm/utils/cookie';
declare const BASE_URL: string;

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
