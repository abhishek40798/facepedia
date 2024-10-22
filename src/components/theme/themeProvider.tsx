"use Client";
import { useAppSelector } from "@/lib/hooks";
import { themeSettings } from "@/theme";
import { createTheme, PaletteMode } from "@mui/material";
import React, { useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";

const CustomThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const mode: PaletteMode = useAppSelector((state) => state.auth.mode);;
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
