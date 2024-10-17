import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface InitialProps {
  mode: PaletteMode;
}

const initialValue: InitialProps = {
  mode: "light",
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = authReducer.actions;
export default authReducer.reducer;
