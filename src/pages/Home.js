import React from "react"
import { Navbar } from "../components/Navbar"


export function Home(){
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }
    
   return (
    <>
        <h1 className='app-heading'>Candidate Database</h1>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
   
   )
   
}