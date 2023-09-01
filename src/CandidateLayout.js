import React, { useState } from "react"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { CandidateRoutes } from "./CandidateRoutes"

export function CandidateLayout(props){
    return (
        <>
        <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
        <h1>{props.name}</h1>
        </>
    )
}