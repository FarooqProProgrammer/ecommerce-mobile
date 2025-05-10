"use client";

import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className="min-h-screen h-full  p-4 w-full">
      <h2 className="font-montserat leading-10 text-[36px] font-bold">Welcome <br /> Back!</h2>
      {children}
    </section>
  );
};

export default AuthLayout;
