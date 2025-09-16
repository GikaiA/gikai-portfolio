import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
// import theme from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"/>
    </ChakraProvider>
      <App />
  </StrictMode>
);
