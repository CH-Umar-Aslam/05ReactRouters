import React from "react";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Fotter/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
