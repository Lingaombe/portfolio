import { Box, useColorModeValue } from "@chakra-ui/react";
import "./App.css"


import Nav from './components/Nav';
import Footer from "./components/Footer";
import SparkleCursor from "./utils/cursor-tracking";

import Home from "./pages/Home";

export default function App() {
  return(
    <Box minH={"100vh"} bg={useColorModeValue("blue.200", "blue.900")} className="font2"	>
      <Nav />
      <SparkleCursor/>
      <Home /> 
      <Footer />
    </Box>
  )
}