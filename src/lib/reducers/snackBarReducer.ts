import { AppSnackbarState, SnackBarVariant } from "@/types";
import { SnackbarOrigin } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const InitialState: AppSnackbarState = {
  isOpen: false,
  message: "",
  variant: "success",
};

const snackbarReducer = createSlice({
  name: "snackBar",
  initialState: InitialState,
  reducers: {
    setSnackbarOpen: (
      state,
      action: PayloadAction<{
        message: string | JSX.Element;
        snackbarOrigin?: SnackbarOrigin;
        autoHideDuration?: number;
        variant?: SnackBarVariant;
      }>
    ) => {
      const { message, snackbarOrigin, autoHideDuration, variant } =
        action.payload;
      state.message = message;
      state.autoHideDuration = autoHideDuration;
      state.snackbarOrigin = snackbarOrigin;
      state.variant = variant || state.variant;
      state.isOpen = true;
    },
    setSnackBarClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setSnackBarClose, setSnackbarOpen } = snackbarReducer.actions;
export default snackbarReducer.reducer;
