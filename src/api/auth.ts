declare const BASE_URL: string;
type LoginPayload = {
  email: string;
  password: string;
};

export const postAuthLogin = async (payload: LoginPayload) => {
  const { email, password } = payload;
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({ email, password }),
  });

  return await res.json();
};

type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export const postAuthRegister = async (payload: RegisterPayload) => {
  const { firstName, lastName, email, password } = payload;
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({ firstName, lastName, email, password }),
  });

  return await res.json();
};
