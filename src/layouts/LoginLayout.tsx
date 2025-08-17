import loginBack from "../assets/login-back.jpg";

export function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col sm:flex-row">
      {/* Painel do login */}
      <div className="
        bg-primary flex items-center justify-center p-8 
        w-full sm:w-1/2 md:w-[35%] md:max-w-[468px] min-h-screen
      ">
        <div className="w-full max-w-sm">{children}</div>
      </div>

      {/* Background */}
      <div className="hidden sm:flex flex-1 w-1/2">
        <img
          src={loginBack}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
