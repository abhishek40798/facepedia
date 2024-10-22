"use client";
import AuthHeader from "@/components/header/authHeader";
import { useTheme } from "@mui/material";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();

  return (
    <html lang="en">
      <body style={{ backgroundColor: theme.palette.background.default }}>
        <AuthHeader />
        {children}
      </body>
    </html>
  );
}
