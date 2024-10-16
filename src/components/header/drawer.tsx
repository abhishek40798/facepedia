import React from "react";
import { Ilinks } from "@/types";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

interface Props {
  isOpen: boolean;
  links: Ilinks[];
  onDrawerClose: () => void;
}

const drawerWidth = 240;

export const MenuDrawer = ({ isOpen, onDrawerClose, links }: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: `${theme.palette.background.alt}`,
            backgroundImage:"none"
          },
        }}
      >
        <DrawerHeader>
        <IconButton onClick={onDrawerClose}>
             <ChevronRightIcon /> 
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((link) => (
            <ListItem key={link.name} disablePadding onClick={()=> console.log(`${link.path}`)}>
              <ListItemButton>
                <ListItemIcon>{link.inActiveIcon}</ListItemIcon>
                <ListItemText
                  primary={link.name}
                  sx={{ textTransform: "capitalize" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
