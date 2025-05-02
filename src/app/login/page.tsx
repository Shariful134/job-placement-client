import { Suspense } from "react";
import { LoginForm } from "@/components/modules/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="px-10 h-[100vh] flex flex-col items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
