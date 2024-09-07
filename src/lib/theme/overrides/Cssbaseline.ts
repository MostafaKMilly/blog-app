import { Components, Theme } from "@mui/material";

export const CssBaselineStylesOverrides: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    "html, body": {
      margin: 0,
      padding: 0,
      height: "100%",
      backgroundColor: "#F7F8F9",
      fontFamily: "var(--font-inter)",
    },
    "*": {
      boxSizing: "border-box",
    },
  },
};
