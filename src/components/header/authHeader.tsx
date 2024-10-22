import { images } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setMode } from "@/lib/reducers/authReducer";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  PaletteMode,
  Toolbar,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const AuthHeader = () => {
  const theme = useTheme();
  const { logo, mobileLogo } = images;

  const mode: PaletteMode = useAppSelector((state) => state.auth.mode);
  const dispatch = useAppDispatch();

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: theme.palette.background.alt }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ padding: "0px !important" }}>
          <Box
            component="a"
            href="#"
            sx={{ display: { md: "none", xs: "block", sm: "none" } }}
          >
            <Image src={mobileLogo} alt="logo" width={30} height={30} />
          </Box>
          <Box
            component="a"
            href="#"
            sx={{ display: { md: "block", xs: "none", sm: "block" } }}
          >
            <Image src={logo} alt="logo" width={190} />
          </Box>
          <Box flexGrow={1} textAlign="end">
            <IconButton
            disableRipple
              onClick={() => dispatch(setMode())}
              sx={{
                fontSize: "30px",
                color: `${theme.palette.primary.light}`,
                cursor: "pointer",
              }}
            >
              {mode !== "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AuthHeader;
