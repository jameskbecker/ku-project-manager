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
