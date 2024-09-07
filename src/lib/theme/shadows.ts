import { ThemeOptions, createTheme } from "@mui/material";
import { Shadows } from "@mui/material/styles";

const defaultTheme = createTheme();

const customShadows: ThemeOptions["shadows"] = [...defaultTheme.shadows];

export const shadows = [
  "none",
  "0px 2px 6px rgba(20, 20, 43, 0.06)",
  "0px 2px 12px rgba(20, 20, 43, 0.08)",
  "0px 8px 28px rgba(20, 20, 43, 0.1)",
  "0px 14px 42px rgba(20, 20, 43, 0.14)",
  "0px 24px 65px rgba(20, 20, 43, 0.16)",
  "0px 32px 72px rgba(20, 20, 43, 0.24)",
  "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2)",
  "0px 2px 6px 1px rgba(168, 168, 168, 0.14)",
  ...customShadows.slice(6),
] as Shadows;
