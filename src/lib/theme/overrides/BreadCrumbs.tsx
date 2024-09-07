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
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const BreadCrumbsStylesOverrides: Components<Theme>["MuiBreadcrumbs"] = {
  defaultProps: {
    separator: <NavigateNextIcon fontSize="medium" sx={{ color: "#A0ABBB" }} />,
  },
};
