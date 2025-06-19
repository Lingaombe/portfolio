import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import "./App.css"

import Nav from './components/Nav';
import Footer from "./components/footer";
import SparkleCursor from "./utils/cursor-tracking";

export default function App() {
  return(
    <Box minH={"100vh"} bg={useColorModeValue("blue.100", "blue.920")}	>
      <Nav />
      <SparkleCursor/>
      <Footer />
    </Box>
  )
}