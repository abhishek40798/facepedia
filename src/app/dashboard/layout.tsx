"use client";
import Header from "@/components/header";
import { themeSettings } from "@/theme";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mode: PaletteMode = "light";
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
