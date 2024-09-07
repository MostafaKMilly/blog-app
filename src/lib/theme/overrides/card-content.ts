import { Components, Theme } from "@mui/material";

export const CardContentStylesOverrides: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: {
      paddingLeft: "18px",
      paddingRight: "18px",
      paddingTop: "18px",
      paddingBottom: "29px",
      width: "100%",
    },
  },
};
