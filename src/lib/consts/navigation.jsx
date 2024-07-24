import {
    HiOutlineCog,
    HiOutlineQuestionMarkCircle,
    HiOutlineUser,
    HiOutlineViewGrid,
} from "react-icons/hi";

export const DASHBOARD_SIDBAR_LINKS = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: <HiOutlineViewGrid />,
    },
    {
        key: "customers",
        label: "Customers",
        path: "/",
        icon: <HiOutlineUser />,
    },
];

export const DASHBOARD_SIDBAR_BOTTOM_LINKS = [
    {
        key: "setings",
        label: "Setings",
        path: "/setings",
        icon: <HiOutlineCog />,
    },
    {
        key: "support",
        label: "Support",
        path: "/",
        icon: <HiOutlineQuestionMarkCircle />,
    },
];
