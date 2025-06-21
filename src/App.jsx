import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import "./App.css"


import Nav from './components/Nav';
import Footer from "./components/footer";
import SparkleCursor from "./utils/cursor-tracking";

import Home from "./pages/Home";

export default function App() {
  return(
    <Box minH={"100vh"} bg={useColorModeValue("blue.100", "blue.920")} className="font1"	>
      <Nav />
      <SparkleCursor/>
      <Home />
      <Footer />
    </Box>
  )
}