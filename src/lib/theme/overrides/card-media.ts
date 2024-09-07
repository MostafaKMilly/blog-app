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
