import { useState } from "react";
import { login as loginService, logout as logoutService } from "../services/authService";

export function userAuth() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const loggedUser = await loginService({ email, password });
      setUser(loggedUser);
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao fazer login");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return { user, login, logout, loading, error };
}
