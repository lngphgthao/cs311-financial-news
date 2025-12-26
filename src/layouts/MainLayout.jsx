import React from "react";
import { Outlet } from "react-router-dom";
import SubcribeBar from "../components/common/SubcribeBar";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import CTASection from "../components/common/CTASection";

const MainLayout = () => {
  return (
    <>
      <SubcribeBar />
      <NavBar />
      <Outlet />
      <CTASection />
      <Footer />
    </>
  );
};

export default MainLayout;
