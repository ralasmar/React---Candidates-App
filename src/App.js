import React, { useState } from 'react'
import "./style.css"
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom"
import { Home } from "./pages/Home"
import { Candidates } from './pages/Candidates'
import { CandidateLayout } from './CandidateLayout'



function App() {
    
    return (
    <BrowserRouter>  
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/candidates/:id" element={<CandidateLayout />} />
        </Routes>
    </BrowserRouter> 
    )
}
export default App