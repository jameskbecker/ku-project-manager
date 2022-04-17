import { getCookie } from '../utils/cookie';

export const postInvite = async (payload: any) => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch('https://kupm-api.herokuapp.com/api/invites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, userId }),
  });

  return await res.json();
};
