import React, { useState } from 'react'
import "./style.css"
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom"
import { Home } from "./pages/Home"
import { Candidates } from './pages/Candidates'



function App() {
    
    return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/candidates">Candidates</NavLink></li>
            </ul>
        </nav>
        
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/candidates" element={<Candidates />} />
        </Routes>
    </BrowserRouter> 
    )
}
export default App