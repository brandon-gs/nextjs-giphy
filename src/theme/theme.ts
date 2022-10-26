import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import palette from "./_palette.module.scss";

// Create a theme instance.
const theme = createTheme({
  palette: {
    black: {
      main: palette.blackMain,
      contrastText: palette.blackContrastText,
    },
    grayInput: {
      light: palette.grayInputLight,
      main: palette.grayInputMain,
      dark: palette.grayInputDark,
      contrastText: palette.grayInputContrastText,
    },
    placeholder: {
      main: palette.placeholderMain,
    },
    pink: {
      main: palette.pinkMain,
    },
    error: {
      main: red.A400,
    },
    primary: {
      main: palette.blackMain,
    },
  },
  typography: {
    fontFamily: '"Inter", cursive',
  },
});

declare module "@mui/material/styles" {
  export interface Palette {
    black: Palette["primary"];
    grayInput: Palette["primary"];
    placeholder: Palette["primary"];
    pink: Palette["primary"];
  }

  export interface PaletteOptions {
    black: PaletteOptions["primary"];
    grayInput: PaletteOptions["primary"];
    placeholder: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
  }
}

export default theme;
