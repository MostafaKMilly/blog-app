"use client";

import { createTheme } from "@mui/material";
import typography from "./typography";
import { componentsOverrides } from "./overrides";
import { palette } from "./palette";
import { shadows } from "./shadows";

export const theme = createTheme({
  palette,
  typography,
  shadows,
  components: componentsOverrides,
  direction: "ltr",
});
