import {
    HiOutlineCog,
    HiOutlineCube,
    HiOutlineQuestionMarkCircle,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineViewGrid,
} from "react-icons/hi";

export const DASHBOARD_SIDBAR_LINKS = [
    {
        key: "dashboard",
        label: "Accueil",
        path: "/",
        icon: <HiOutlineViewGrid />,
    },
    {
        key: "messages",
        label: "Messages",
        path: "/messages",
        icon: <HiOutlineCube />,
    },
];

export const DASHBOARD_SIDBAR_BOTTOM_LINKS = [
    {
        key: "setings",
        label: "Setings",
        path: "/setings",
        icon: <HiOutlineCog />,
    },
];
