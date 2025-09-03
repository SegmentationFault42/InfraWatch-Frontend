import api from "./api";

export interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  profileImageUrl?: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  profileImageUrl: string | null;
}

export async function updateProfile(
  userId: string,
  payload: UpdateUserPayload
): Promise<User> {
  const response = await api.patch(`/users/${userId}`, payload);
  const updatedUser = response.data;
  localStorage.setItem("user", JSON.stringify(updatedUser));
  return updatedUser;
}

export interface UpdatePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export async function updatePassword(
  userId: string,
  payload: UpdatePasswordPayload
): Promise<void> {
  await api.patch(`/users/${userId}`, payload);
}
