import { Components, Theme } from "@mui/material";

export const ContainerStylesOverrides: Components<Theme>["MuiContainer"] = {
  defaultProps: {
    maxWidth: false,
  },
  styleOverrides: {
    root: {
      maxWidth: "1440px !important",
    },
  },
};
