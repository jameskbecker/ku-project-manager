type LoginPayload = {
  email: string;
  password: string;
};

export const postAuthLogin = async (payload: LoginPayload) => {
  const { email, password } = payload;
  const res = await fetch('https://kupm-api2.herokuapp.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return await res.json();
};
