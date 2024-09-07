import { Components, Theme } from "@mui/material";

export const TooltipStylesOverrides: Components<
  Omit<Theme, "components">
>["MuiTooltip"] = {
  defaultProps: {
    arrow: true,
  },
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: "#FEFEFE",
      boxShadow: theme.shadows[5],
      color: theme.palette.common.black,
      lineHeight: "20px",
    }),
    arrow: {
      color: "#FEFEFE",
    },
  },
};
