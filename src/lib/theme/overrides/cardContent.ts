import { Components, Theme } from "@mui/material";

export const CardContentStylesOverrides: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: {
      padding: "16px",
      "& h3": {
        fontSize: "1.25rem",
        fontWeight: 700,
        marginBottom: "0.5rem",
      },
      "& p": {
        color: "text.secondary",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  },
};
