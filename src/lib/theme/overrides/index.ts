import { Components, Theme } from "@mui/material";

import { ButtonStylesOverrides } from "./Button";
import { TooltipStylesOverrides } from "./Tooltip";
import { LinkStylesOverrides } from "./Link";
import { CssBaselineStylesOverrides } from "./Cssbaseline";
import { CardStylesOverrides } from "./Card";
import { CardMediaStylesOverrides } from "./card-media";
import { CardContentStylesOverrides } from "./card-content";
import { BreadCrumbsStylesOverrides } from "./BreadCrumbs";
import { ChipStylesOverrides } from "./Chip";

export const componentsOverrides: Components<Theme> = {
  MuiButton: ButtonStylesOverrides,
  MuiTooltip: TooltipStylesOverrides,
  MuiLink: LinkStylesOverrides,
  MuiCssBaseline: CssBaselineStylesOverrides,
  MuiCard: CardStylesOverrides,
  MuiCardMedia: CardMediaStylesOverrides,
  MuiCardContent: CardContentStylesOverrides,
  MuiBreadcrumbs: BreadCrumbsStylesOverrides,
  MuiChip: ChipStylesOverrides,
};
