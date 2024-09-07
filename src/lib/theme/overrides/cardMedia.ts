import { Components, Theme } from "@mui/material";

export const CardMediaStylesOverrides: Components<Theme>["MuiCardMedia"] = {
  styleOverrides: {
    root: {
      width: "100%",
      height: "12rem",
      objectFit: "cover",
      aspectRatio: "400 / 225",
    },
  },
};
