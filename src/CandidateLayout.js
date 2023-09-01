import React, { useState } from "react"
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { CandidateRoutes } from "./CandidateRoutes"
import { CandidateList } from "./components/CandidateList"
import { CandidateCard } from "./components/CandidateCard"
import { Candidates } from "./pages/Candidates"

export function CandidateLayout(props){
    const { id } = useParams()
    

    return (

        <>
        <h1 className="profile-heading">Candidate Profile</h1>
        <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
        
        <section key={id}> 
            
        </section>
        </>
    )
}