import React from "react";
import {
    HiOutlineBell,
    HiOutlineChatAlt,
    HiOutlineSearch,
} from "react-icons/hi";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate;
    return (
        <div className=" bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
            <div className=" relative">
                <HiOutlineSearch
                    fontSize={20}
                    className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11 pr-4"
                />
            </div>
            <div className=" flex items-center gap-2 mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <PopoverButton
                                className={classNames(
                                    open && "bg-gray-100",
                                    "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:opacity-100 focus:outline-none active:bg-gray-100"
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </PopoverButton>
                            <PopoverPanel className="absolute right-0 z-10 mt-4 w-80">
                                <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.0">
                                    <strong className=" text-gray-700 font-medium">
                                        Messages
                                    </strong>
                                    <div className="mt-2 px-1 text-sm">
                                        This is message panel
                                    </div>
                                </div>
                            </PopoverPanel>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <PopoverButton
                                className={classNames(
                                    open && "bg-gray-100",
                                    "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:opacity-100 focus:outline-none active:bg-gray-100"
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </PopoverButton>
                            <PopoverPanel className="absolute right-0 z-10 mt-4 w-80">
                                <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.0">
                                    <strong className=" text-gray-700 font-medium">
                                        Notifications
                                    </strong>
                                    <div className="mt-2 px-1 text-sm">
                                        This is notifications panel
                                    </div>
                                </div>
                            </PopoverPanel>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-0-neutral-400 ">
                            <span className=" sr-only">Open user menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{
                                    backgroundImage:
                                        'url("https://img.freepik.com/vecteurs-premium/visage-jeune-homme-noir-barbe-portrait-masculin-avatar-dans-style-plat-vue-face_497399-251.jpg?w=740")',
                                }}
                            >
                                <span className=" sr-only">John Doe</span>
                            </div>
                        </MenuButton>
                    </div>
                    <MenuItems className=" origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-sm p-1 bg-white ring-1 right-black ring-opacity-5  focus:outline-none">
                        <MenuItem>
                            {({ active }) => (
                                <div
                                    className={classNames(
                                        active && "bg-gray-100",
                                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                                    )}
                                    onClick={() => navigate("/profile")}
                                >
                                    Your profil
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <div
                                    className={classNames(
                                        active && "bg-gray-100",
                                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                                    )}
                                    onClick={() => navigate("/setings")}
                                >
                                    Setings
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <div
                                    className={classNames(
                                        active && "bg-gray-100",
                                        "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                                    )}
                                    onClick={() => navigate("/logout")}
                                >
                                    Logout
                                </div>
                            )}
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    );
};

export default Header;
