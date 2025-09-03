import api from "./api";

interface LoginPayload {
  email: string;
  password: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string | null;
}

export async function login(payload: LoginPayload): Promise<User> {
  const response = await api.post("/auth/login", payload);
  const { token, user } = response.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
