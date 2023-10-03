// theme.js
import { extendTheme } from "@chakra-ui/react";
import "../fonts/fonts.css";

const theme = extendTheme({
  fonts: {
    body: "CraftworkGrotesk, sans-serif",
    heading: "CraftworkGrotesk, sans-serif",
  },
});

export default theme;
