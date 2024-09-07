// ------------------------------------------------------------------------------
// Copyright (c) 2024 Averroes.ai Inc.
// All rights reserved.
//
// This software and associated documentation files (the "Software") may not be
// copied, modified, distributed, or used without express permission from
// Averroes.ai Inc.
//
// For inquiries, contact:
// Averroes.ai Inc.
// Legal@averroes.ai
// ------------------------------------------------------------------------------

import { Components, Theme } from "@mui/material";

export const TooltipStylesOverrides: Components<Omit<Theme, "components">>["MuiTooltip"] = {
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
