import React from "react";
import classNames from "classnames";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDBAR_LINKS } from "../../lib/consts/navigation";
import { DASHBOARD_SIDBAR_BOTTOM_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
    "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:bo-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} /> <span className="">OpenShop</span>
            </div>
            {/* <div className="text-neutral-100 text-lg">top bar</div> */}
            <div className="flex-1 py-8 flex flex-col gap-0.5 ">
                {DASHBOARD_SIDBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700  ">
                {DASHBOARD_SIDBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div
                    className={classNames(
                        "text-red-400 cursor-pointer",
                        linkClasses
                    )}
                >
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    );
}

const SidebarLink = ({ item }) => {
    const { pathname } = useLocation();
    return (
        <Link
            to={item.path}
            className={classNames(
                pathname === item.path
                    ? " bg-neutral-700 text-white"
                    : "text-neutral-400",
                linkClasses
            )}
        >
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    );
};