import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light", // or "dark"
  useSystemColorMode: false, // true = match user's system preference
};

const theme = extendTheme({ config });

export default theme;