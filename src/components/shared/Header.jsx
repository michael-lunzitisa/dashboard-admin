import React from "react";
import {
    HiOutlineBell,
    HiOutlineChatAlt,
    HiOutlineSearch,
} from "react-icons/hi";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import classNames from "classnames";

const Header = () => {
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
                                        This is messagepPanel
                                    </div>
                                </div>
                            </PopoverPanel>
                        </>
                    )}
                </Popover>

                <HiOutlineBell fontSize={24} />
            </div>
        </div>
    );
};

export default Header;
