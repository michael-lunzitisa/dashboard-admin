// import React from "react";
// import Layaout from "./components/shared/Layaout";
// import Accueil from "./components/Accueil";
// import Messages from "./components/Messages";
// import { AuthProvider } from "./context/AuthContext";
// import { Routes, Route } from "react-router-dom";
// import Register from "./pages/auth/Register";
// import Login from "./pages/auth/signup/Login";
// import Profile from "./components/shared/Profile";

// const App = () => {
//     const [login, setLogin] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.post(
//                     "http://localhost:3200/api/auth/login",
//                     { email, password }
//                 );
//                 console.log(response.data);
//                 setLogin(response.data);
//             } catch (error) {
//                 console.error("Erreur lors de l'envoi des données:", error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <AuthProvider>
//             <Routes>
//                 <Route path="/" element={<Layaout />}>
//                     <Route index element={<Accueil />} />
//                     <Route path="messages" element={<Messages />} />
//                     <Route path="profile" element={<Profile />} />
//                 </Route>
//                 <Route path="register" element={<Register />} />
//                 <Route path="login" element={<Login />} />
//             </Routes>
//         </AuthProvider>
//     );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Layaout from "./components/shared/Layaout";
import Accueil from "./components/Accueil";
import Messages from "./components/Messages";
import { UserProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/signup/Login";
import Profile from "./components/shared/Profile";

const App = () => {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Layaout />}>
                    <Route index element={<Accueil />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </UserProvider>
    );
};

export default App;
