import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { CandidateForm } from '../components/CandidateForm'
import { CandidateList } from '../components/CandidateList'
import { CandidateRoutes } from '../CandidateRoutes'
import { CandidateLayout } from '../CandidateLayout'
import { Searchbar } from '../components/Searchbar'

export function Candidates(props){
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    const [candidates, setCandidates] = useState(() => {
        const localValue = localStorage.getItem("CANDIDATES")
        if(localValue == null) {
            return []
        }
        return JSON.parse(localValue)
    })

    function addCandidate(name, location, bio, skills, expertise){
        setCandidates(currentCandidates => {
            const newCandidates = [
                { id: crypto.randomUUID(), name, location, bio, skills, expertise },
                ...currentCandidates
            ]
            localStorage.setItem("CANDIDATES", JSON.stringify(newCandidates))
            return newCandidates
        })
        alert("New Candidate Added")
    }

    function deleteCandidate(id){
        setCandidates(currentCandidates => {
            const updatedCandidates = currentCandidates.filter(candidate => candidate.id !== id)

            localStorage.setItem("CANDIDATES", JSON.stringify(updatedCandidates))
            return updatedCandidates
        })
        alert("Candidate removed from database")
    }

    return (
        <>
            <h1 className="candidates-heading">Candidates</h1>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSearchResults={setCandidates} />
            
            <div className="form-and-list">
                <CandidateForm onSubmit={addCandidate} darkMode={darkMode}/>
                <div className="list-and-search">
                    <Searchbar darkMode={darkMode} onSearchResults={setCandidates} />
                    <CandidateList candidates={candidates} deleteCandidate={deleteCandidate} darkMode={darkMode} />
                </div>
            </div>
            {/* <Routes>
                <Route path="/candidates/:id" element={<CandidateLayout />} />
            </Routes> */}
        </>
    ) 
    
}