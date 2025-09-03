import { useState } from "react";
import { updateProfile, updatePassword as updatePasswordService } from "../services/userService";
import type { User, UpdateUserPayload } from "../services/userService";

interface UpdatePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export function useProfile() {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = async (payload: UpdateUserPayload) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const updated = await updateProfile(user.id, payload);
      setUser(updated);
      localStorage.setItem("user", JSON.stringify(updated));
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao atualizar perfil");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (payload: UpdatePasswordPayload) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      await updatePasswordService(user.id, payload);
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao alterar senha");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { user, update, updatePassword, loading, error };
}
