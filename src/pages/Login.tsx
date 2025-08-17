import { Button } from "../components/Button";
import { LoginLayout } from "../layouts/LoginLayout";
import { InputField } from "../components/InputField";
import Logo from "../assets/Logo-name-violet.svg";

export function Login() {
  return (
    <LoginLayout>
      <div className="flex flex-col gap-6">
        <img
          src={Logo}
          alt="InfraWatch"
          className="w-30 mx-auto invert brightness-0 mb-8"
        />
        <InputField type="email" placeholder="Email Corporativo" />
        <InputField type="password" placeholder="Password" />

        <a href="#" className="text-sm text-gray-300 text-center mb-4">
          Esqueceu a password?
        </a>

        <Button
          type="submit"
          className="text-lg py-3 px-6 mb-6"
        >
          Entrar
        </Button>
      </div>
    </LoginLayout>
  );
}

