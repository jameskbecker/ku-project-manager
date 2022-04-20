import { getCookie } from '../utils/cookie';

export const getUserNotifications = async () => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(
    `https://kupm-api2.herokuapp.com/api/users/${userId}/notifications`
  );
  return await res.json();
};

export const getUserTodo = async () => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(
    `https://kupm-api2.herokuapp.com/api/users/${userId}/todo`
  );
  return await res.json();
};

export const getAccountDetails = async () => {
  const userId = getCookie('kupm_user_id');
  const res = await fetch(
    `https://kupm-api2.herokuapp.com/api/users/${userId}`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  return await res.json();
};
