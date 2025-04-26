import React from "react";
import TopNavBar from "./Header/TopNavBar";
import Header from "./Header/Header";
import SideDrawer from "./Header/SideDrawer";

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <Header />
      <SideDrawer />
    </>
  );
};

export default Layout;
