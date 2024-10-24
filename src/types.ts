import { SnackbarOrigin } from "@mui/material";

export interface Ilinks {
  path: string;
  name: string;
  inActiveIcon: React.ReactNode;
  activeIcon: React.ReactNode;
}

export interface UserProps {
  name: string;
  email: string;
  password: string;
}

export type SnackBarVariant = "error" | "warning" | "info" | "success";
export interface AppSnackbarState {
  variant: SnackBarVariant;
  message: string | JSX.Element;
  isOpen: boolean;
  secondaryMessage?: string | JSX.Element;
  snackbarOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
}

