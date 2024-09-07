import { Components, Theme } from "@mui/material";

import { ButtonStylesOverrides } from "./Button";
import { TooltipStylesOverrides } from "./Tooltip";
import { LinkStylesOverrides } from "./Link";
import { CssBaselineStylesOverrides } from "./Cssbaseline";
import { CardStylesOverrides } from "./Card";
import { CardMediaStylesOverrides } from "./cardMedia";
import { CardContentStylesOverrides } from "./cardContent";
import { BreadCrumbsStylesOverrides } from "./BreadCrumbs";
import { ContainerStylesOverrides } from "./Container";

export const componentsOverrides: Components<Theme> = {
  MuiButton: ButtonStylesOverrides,
  MuiTooltip: TooltipStylesOverrides,
  MuiLink: LinkStylesOverrides,
  MuiCssBaseline: CssBaselineStylesOverrides,
  MuiCard: CardStylesOverrides,
  MuiCardMedia: CardMediaStylesOverrides,
  MuiCardContent: CardContentStylesOverrides,
  MuiBreadcrumbs: BreadCrumbsStylesOverrides,
  MuiContainer: ContainerStylesOverrides,
};
