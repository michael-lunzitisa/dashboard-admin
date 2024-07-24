import React from "react";
import Layaout from "./components/shared/Layaout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layaout />}>
                <Route index="dasboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default App;
