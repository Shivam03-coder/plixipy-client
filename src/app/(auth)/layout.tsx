import React, { type ReactNode } from "react";

const RootAuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="root">{children}</main>;
};

export default RootAuthLayout;
