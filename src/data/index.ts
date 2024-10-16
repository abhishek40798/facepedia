import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Ilinks } from "@/types";



export const links:Ilinks[] = [
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