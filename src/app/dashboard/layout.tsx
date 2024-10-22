"use client";
import Header from "@/components/header";
import { useTheme } from "@mui/material";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  return (
    <html lang="en">
        <body style={{background:theme.palette.background.default}}>
          <Header />
          {children}
        </body>
    </html>
  );
}
