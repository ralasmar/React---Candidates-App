import React, { useState } from 'react'
import { Navbar } from "../components/Navbar"
import { CandidateForm } from '../components/CandidateForm'
import { CandidateList } from '../components/CandidateList'

export function Candidates(){
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

    function addCandidate(name, location, bio, skills){
        setCandidates(currentCandidates => {
            const newCandidates = [
                { id: crypto.randomUUID(), name, location, bio, skills },
                ...currentCandidates
            ]
            localStorage.setItem("CANDIDATES", JSON.stringify(newCandidates))
            return newCandidates
        })
        alert("New Candidate Added")
    }

    function deleteCandidate(id){
        setCandidates(currentCandidates => {
            return currentCandidates.filter(candidate => candidate.id !== id)
        })
        alert("Candidate removed from database")
    }

    return (
        <>
            <h1 className="candidates-heading">Candidates</h1>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <CandidateForm onSubmit={addCandidate} darkMode={darkMode}/>
            <CandidateList candidates={candidates} deleteCandidate={deleteCandidate} darkMode={darkMode} />
        </>
    ) 
    
}