import React from "react";
import TopNavBar from "./Header/TopNavBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <TopNavBar />
      <Header />
      <div style={{ flex: 1 }}></div>
      <Footer />
    </div>
  );
};

export default Layout;
