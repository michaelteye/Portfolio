import { BiHomeAlt2 } from "react-icons/bi";
import { FaPhoneAlt, FaRProject } from "react-icons/fa";
import { PiChatCircleBold } from "react-icons/pi";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "About",
    href: "/about",
    Icon: PiChatCircleBold,
  },
  {
    title: "Work",
    href: "/work",
    Icon: FaRProject,
  },
  {
    title: "Contact",
    href: "/contact",
    Icon: FaPhoneAlt,
  },
];