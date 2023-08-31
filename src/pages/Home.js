import React, { useState } from "react"
import { Navbar } from "../components/Navbar"
import { CandidateForm } from '../components/CandidateForm'


export function Home(props){
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }



   return (
    <>
        <h1 className='app-heading'>Home</h1>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <CandidateForm onSubmit={props.addCandidate} darkMode={props.darkMode}/>
    </>
   
   )
   
}