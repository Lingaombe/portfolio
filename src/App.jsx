import { Box, useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"


import Nav from './components/Nav.jsx';
import Footer from "./components/Footer.jsx";
import SparkleCursor from "./utils/cursor-tracking.jsx";

import Home from "./pages/Home.jsx";

export default function App() {
  return(
    <Box minH={"100vh"} bg={useColorModeValue("blue.300", "blue.900")} className="font1"	>
      <Nav />
      <SparkleCursor/>
      <Home />
      <Footer />
    </Box>
  )
}