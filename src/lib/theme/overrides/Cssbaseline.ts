import { Components, Theme } from "@mui/material";

export const CssBaselineStylesOverrides: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    "html, body": {
      margin: 0,
      padding: 0,
      height: "100%",
      backgroundColor: "#F7F8F9",
      color: "#18181b",
      fontFamily: "var(--font-inter)",
    },
    "*": {
      boxSizing: "border-box",
    },
    "&": {
      scrollbarWidth: "thin",
      scrollbarColor: "#bfbfbf transparent",
    },
    "&::-webkit-scrollbar": {
      width: "7px",
      height: "7px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#E1E5F2",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#697DFC",
      borderRadius: "10px",
    },
  },
};
