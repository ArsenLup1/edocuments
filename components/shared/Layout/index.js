import React from "react";
import NavbarAir  from "../NavbarAir";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarAir/>
      <main>{children} </main>
      <Footer />
    </>
  );
};

export default Layout;