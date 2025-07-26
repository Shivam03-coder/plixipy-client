import React from "react";

import { AuthBackground } from "@/components/AuthBackground";
import { PreferenceSelector } from "@/components/PreferenceSelector";

const SignUpPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Background visuals */}
      <AuthBackground />

      {/* Centered preference form */}
      <div className="z-10">
        <PreferenceSelector />
      </div>
    </div>
  );
};

export default SignUpPage;
