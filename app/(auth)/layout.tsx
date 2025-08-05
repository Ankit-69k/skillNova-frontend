import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-layout h-screen flex flex-col ">
      <main className="auth-layout__main ">{children}</main>
    </div>
  );
};

export default Layout;
