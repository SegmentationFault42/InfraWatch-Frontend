import loginBack from "../assets/login-back.jpg";

export function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="bg-primary flex items-center justify-center p-8 w-full md:w-[35%] md:max-w-[468px]">
        <div className="w-full max-w-sm">{children}</div>
      </div>
      <div className="flex-1 w-full">
        <img
          src={loginBack}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
