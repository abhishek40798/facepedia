"use client";

import { images } from "@/constants";
import {
    alpha,
  AppBar,
  Box,
  Container,
  InputBase,
  styled,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.primary.dark}`,
  backgroundColor: alpha(theme.palette.primary.light,0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
  marginRight: theme.spacing(2),
//   marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  right: 0,
  color: "#000"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.light,
  paddingRight: "30px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

const Header = () => {
  return (
    <AppBar position="fixed" style={{backgroundColor: "#fff"}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box component="a" href="#">
            <Image src={images.logo} alt="logo" width={200} />
          </Box>
          <Search>
            <StyledInputBase
              placeholder="search here…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
