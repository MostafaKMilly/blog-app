import { Components, Theme } from "@mui/material";

export const LinkStylesOverrides: Components<Theme>["MuiLink"] = {
  styleOverrides: {
    root: {
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "normal",
    },
  },
};
