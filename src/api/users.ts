import { getCookie } from '../utils/cookie';
declare const BASE_URL: string;

export const getUserNotifications = async () => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(`${BASE_URL}/api/users/${userId}/notifications`);
  return await res.json();
};

export const getUserTodo = async () => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(`${BASE_URL}/api/users/${userId}/todo`);
  return await res.json();
};

export const getAccountDetails = async () => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(`${BASE_URL}/api/users/${userId}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  return await res.json();
};
