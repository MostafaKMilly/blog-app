import { Components, Theme } from "@mui/material";

export const CardStylesOverrides: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: {
      borderRadius: "0.75rem",
      overflow: "hidden",
      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
      border: "1px solid #e4e4e7",
    },
  },
};
