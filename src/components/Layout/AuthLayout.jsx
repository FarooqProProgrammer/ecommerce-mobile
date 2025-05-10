"use client";

import React from "react";
import PropTypes from "prop-types";



const AuthLayout = ({ children,title="Welcome <br /> Back!",...props }) => {
  return (
    <section className="min-h-screen h-full  p-4 w-full">
      <h2
        className="font-montserat leading-10 text-[36px] font-bold"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {children}
    </section>
  );
};

AuthLayout.propTypes = { 
    title: PropTypes.string,
    children: PropTypes.node,
}

AuthLayout.defaultProps = {
    title: "Welcome <br /> Back!",
};

export default AuthLayout;
