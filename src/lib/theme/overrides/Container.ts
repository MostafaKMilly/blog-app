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

export const ContainerStylesOverrides: Components<Theme>["MuiContainer"] = {
  defaultProps: {
    maxWidth: false,
  },
  styleOverrides: {
    root: {
      marginTop: "40px",
      paddingLeft: "70px !important",
      paddingRight: "70px !important",
    },
  },
};
