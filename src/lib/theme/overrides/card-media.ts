import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const CardMediaStylesOverrides: Components<Theme>["MuiCardMedia"] = {
  styleOverrides: {
    root: {
      height: 110,
      width: "100%",
      objectFit: "cover",
    },
  },
};
