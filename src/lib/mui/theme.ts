import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    calculator: string;
  }
  interface PaletteOptions {
    calculator: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#bd0e32",
      light: "#e8949d",
    },
    secondary: {
      main: "#0ebd9a",
    },
    calculator: "#000000",
  },
});
