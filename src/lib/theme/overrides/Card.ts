import { Components, Theme } from "@mui/material";

export const CardStylesOverrides: Components<Theme>["MuiCard"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "2px",
      boxShadow: theme.shadows[8],
      border: "none",
      transition: "all 0.3s ease-in-out",
      "& .MuiCardMedia-root": {
        transition: "all 0.3s ease-in-out",
      },
      ".MuiCardActionArea-focusHighlight": {
        background: "transparent !important",
      },
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "0px 10px 22px 0px rgba(45, 77, 108, 0.15)",

        "& .MuiCardMedia-root": {
          transform: "scale(1.02)",
        },
      },
    }),
  },
};
