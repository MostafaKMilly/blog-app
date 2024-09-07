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

export const CardContentStylesOverrides: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: {
      paddingLeft: "18px",
      paddingRight: "18px",
      paddingTop: "18px",
      paddingBottom: "29px",
      width: "100%",
    },
  },
};
