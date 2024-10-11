import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                try {
                    const response = await axios.get(
                        "http://localhost:3200/api/user/user",
                        { headers: { Authorization: `Bearer ${token}` } }
                    );

                    setUser(response.data.user);
                } catch (err) {
                    console.log(err);
                }
            }
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};
