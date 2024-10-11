import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layaout = () => {
    // useEffect(() => {
    //     const getUser = async () => {
    //         const token = localStorage.getItem("token");
    //         const response = await axios.post(
    //             "http://localhost:3200/api/auth/layout",{
    //                 Headers:{"Authorization":`Bearer ${token}`}
    //             }
    //         );
    //         console.log(response);

    //     };
    // }, []);
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />

                <div className="p-4">{<Outlet />}</div>
            </div>
        </div>
    );
};

export default Layaout;
