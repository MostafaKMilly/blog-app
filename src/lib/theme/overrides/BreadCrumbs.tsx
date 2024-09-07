import { Components, Theme } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const BreadCrumbsStylesOverrides: Components<Theme>["MuiBreadcrumbs"] = {
  defaultProps: {
    separator: <NavigateNextIcon fontSize="medium" sx={{ color: "#A0ABBB" }} />,
  },
};
