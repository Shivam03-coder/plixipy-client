import React from "react";
import { AuthBackground } from "@/components/AuthBackground";
import { LoginForm } from "@/app/(auth)/sign-in/[[...sign-in]]/sign-in-form";

const SignInPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      <AuthBackground />
      <div
        className="z-10 rounded-xl bg-white"
        style={{
          width: "361px",
          height: "410px",
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default SignInPage;
