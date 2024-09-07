import { alpha, Components, Theme } from "@mui/material";

export const ButtonStylesOverrides: Components<
  Omit<Theme, "components">
>["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
    variant: "contained",
    size: "medium",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      padding: "8px 16px",
      borderRadius: "4px",
      paddingRight: ownerState.endIcon ? "10px" : "16px",
      paddingLeft: ownerState.startIcon ? "10px" : "16px",
      minWidth: "fit-content",
      textTransform: "none",
      fontWeight: 500,
      "& .MuiButton-startIcon, .MuiButton-endIcon": {
        padding: 4,
        "& svg": {
          fontSize: "medium",
        },
      },
    }),
    fullWidth: {
      padding: "12px 24px",
      height: "48px !important",
    },
    contained: ({ theme, ownerState }) => {
      const color = ownerState.color ?? "inherit";
      const focusColor = color !== "inherit" ? theme.palette[color].main : "";

      return {
        "&:disabled": {
          backgroundColor: alpha(theme.palette.grey[300], 0.4),
          color: theme.palette.grey[500],
        },
        color: color === "inherit" ? "#000" : theme.palette[color].contrastText,
        backgroundColor:
          color === "inherit" ? "#e0e0e0" : theme.palette[color].main,
        "&:hover": {
          backgroundColor:
            color === "inherit"
              ? "#d5d5d5"
              : alpha(theme.palette[color].main, 0.8),
        },
        "&:focus": {
          boxShadow: `0 0 0 2px #FFFFFF, 0 0 0 4px ${focusColor}`,
        },
      };
    },
    outlined: ({ theme, ownerState }) => {
      const color = ownerState.color ?? "inherit";
      const focusColor =
        color === "inherit" ? "#7791F0" : theme.palette[color].main;

      return {
        borderWidth: "1px !important",
        "&:disabled": {
          background: "#F3F5F9",
          border: "1px solid #97A4F4",
          color: "#97A4F4",
        },
        "&:hover": {
          backgroundColor:
            color === "inherit"
              ? "inherit"
              : alpha(theme.palette[color]?.light, 0.2),
          color: color === "inherit" ? "inherit" : theme.palette[color].main,
        },
        "&:active": {
          backgroundColor:
            color === "inherit"
              ? "inherit"
              : alpha(theme.palette[color].light, 0.2),
          color: color === "inherit" ? "inherit" : theme.palette[color].main,
        },
        "&:focus": {
          boxShadow: `0 0 0 2px #FFFFFF, 0 0 0 4px ${focusColor}`,
        },
      };
    },
    text: {
      minWidth: "fit-content !important",
      height: "fit-content !important",
      padding: "4px 8px",
      "&:hover": {
        backgroundColor: "transparent",
        border: "none",
        "&:disabled": {
          color: "#CBD5E1",
        },
      },
    },
  },
  variants: [
    {
      props: {
        color: "primary",
        variant: "outlined",
      },
      style: ({ theme }) => ({
        border: "1px solid #6A7DF4 !important",
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.light, 0.1),
          color: `${theme.palette.primary.main} !important`,
        },
      }),
    },
    {
      props: {
        size: "small",
      },
      style: {
        height: 32,
        fontSize: "12px",
      },
    },
    {
      props: {
        size: "medium",
      },
      style: {
        height: 40,
      },
    },
    {
      props: {
        size: "large",
      },
      style: {
        height: 48,
        fontSize: "16px",
      },
    },
    {
      props: {
        color: "inherit",
        variant: "contained",
      },
      style: () => ({
        backgroundColor: "#E7EAEE",
        color: "#282A34",
        "&:hover": {
          backgroundColor: alpha("#E7EAEE", 0.6),
        },
      }),
    },
  ],
};
