import { getCookie } from '../utils/cookie';
declare const BASE_URL: string;

export const postInvite = async (payload: any) => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(`${BASE_URL}/api/invites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, userId }),
  });

  return await res.json();
};
