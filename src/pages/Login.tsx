import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { LoginLayout } from "../layouts/LoginLayout";
import { InputField } from "../components/InputField";
import Logo from "../assets/Logo-name-violet.svg";
import { userAuth } from "../hooks/userAuth";

export function Login() {
  const { login, loading, error } = userAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      alert(`Email: ${email}\nPassword: ${password}`);
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err);
      console.error(err);
    }
  };

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md mx-auto">
        <img
          src={Logo}
          alt="InfraWatch"
          className="w-30 mx-auto invert brightness-0 mb-8"
        />
        <InputField
          type="email"
          placeholder="Email Corporativo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <a href="#" className="text-sm text-gray-300 text-center mb-4">
          Esqueceu a password?
        </a>

        <Button
          type="submit"
          className="text-lg py-3 px-6"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>

        {error && (
          <p className="text-red-500 text-center text-sm">{error}</p>
        )}
      </form>
    </LoginLayout>
  );
}
