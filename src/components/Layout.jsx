import React from "react";
import TopNavBar from "./Header/TopNavBar";
import { Box } from "@chakra-ui/react";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <Box width="full" px={{ base: 4, md: 10, lg: 20, xl: 40 }}>
        <Header />
      </Box>
    </>
  );
};

export default Layout;
