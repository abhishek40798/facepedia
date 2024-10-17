"use client";

import { images } from "@/constants";
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  PaletteMode,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MenuDrawer } from "./drawer";
import { Ilinks } from "@/types";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setMode } from "@/lib/reducers/authReducer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.primary.dark}`,
  backgroundColor: alpha(theme.palette.primary.light, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  width: "auto",
  marginInline: theme.spacing(2),
  //   marginLeft: 0,
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(5),
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
  color: "#000",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.light,
  paddingRight: "30px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  [theme.breakpoints.between(900, 940)]: {
    paddingRight: "0px",
  },
}));

const links: Ilinks[] = [
  {
    path: "/dashboard",
    name: "home",
    inActiveIcon: <HomeOutlinedIcon />,
    activeIcon: <HomeIcon />,
  },
  {
    path: "/friends",
    name: "find friends",
    inActiveIcon: <GroupOutlinedIcon />,
    activeIcon: <GroupIcon />,
  },
  {
    path: "/message",
    name: "message",
    inActiveIcon: <ChatBubbleOutlineOutlinedIcon />,
    activeIcon: <ChatBubbleIcon />,
  },
  {
    path: "/notification",
    name: "notification",
    inActiveIcon: <NotificationsNoneOutlinedIcon />,
    activeIcon: <NotificationsIcon />,
  },
];

const Header = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { logo, mobileLogo } = images;
  const pathName = usePathname();

  const mode:PaletteMode = useAppSelector((state) => state.auth.mode);
  const dispatch = useAppDispatch();

  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: theme.palette.background.alt }}
      >
        <Container maxWidth="lg">
          <Toolbar>
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
            <Search>
              <StyledInputBase
                placeholder="search here…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
            {/* <Box sx={{ flexGrow: 1 }} /> */}

            <Box sx={{ flexGrow: 1 }}>
              {mode === "dark" ? (
                <IconButton onClick={()=> dispatch(setMode())}>
                  <LightModeIcon
                    sx={{
                      fontSize: "30px",
                      color: `${theme.palette.primary.light}`,
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={()=> dispatch(setMode())}>
                  <DarkModeIcon
                    sx={{
                      fontSize: "30px",
                      color: `${theme.palette.primary.light}`,
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              )}
            </Box>
            <Box
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              {links.map((link) => (
                <IconButton
                  size="large"
                  key={link.path}
                  sx={{
                    borderRadius: "0",
                    flexDirection: "column",
                  }}
                >
                  {link.path === pathName ? link.activeIcon : link.inActiveIcon}
                  <Typography
                    fontSize={10}
                    fontWeight={600}
                    color={theme.palette.primary.light}
                    textTransform="capitalize"
                  >
                    {link.name}
                  </Typography>
                </IconButton>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  setAnchorElUser(event.currentTarget)
                }
                sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {[1, 2, 3].map((setting) => (
                  <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                disableRipple
                onClick={() => setMobileOpen(true)}
                sx={{
                  color: "#000",
                }}
              >
                <MenuIcon sx={{ color: `${theme.palette.primary.light}` }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <MenuDrawer
        isOpen={mobileOpen}
        onDrawerClose={() => setMobileOpen(false)}
        links={links}
      />
    </>
  );
};

export default Header;
