import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";

const Layout = props => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
