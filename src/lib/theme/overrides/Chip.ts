import { Components, Theme } from "@mui/material";

export const ChipStylesOverrides: Components<
  Omit<Theme, "components">
>["MuiChip"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiChip-label": {
        fontFamily: theme.typography.fontFamily,
      },
    }),
  },
};
