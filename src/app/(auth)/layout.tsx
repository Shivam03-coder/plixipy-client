import Image from "next/image";
import React, { type ReactNode } from "react";

const RootAuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="root relative">
    {/* <Image src={"./"} width={} height={} alt=""/> */}
    <div className="absolute left-0 top-0 w-full h-full">
    {children}
    </div>
    </main>;
};

export default RootAuthLayout;
