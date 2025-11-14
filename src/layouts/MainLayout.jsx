import React from "react";
import { Outlet } from "react-router-dom";
import SubcribeBar from "../components/common/SubcribeBar.jsx";
import NavBar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <SubcribeBar />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
