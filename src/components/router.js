import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, Add, Edit } from "../pages";

export function Router(id) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit id={id} />} />
            <Route path="*" element={<div>404 not found!</div>} />
        </Routes>
    ) 
}