import React, { useEffect, useState } from 'react'
import { Navbar } from "../components/Navbar"
import { CandidateForm } from '../components/CandidateForm'
import { CandidateList } from '../components/CandidateList'
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

    const addCandidate = (name, photo, location, bio, skills, expertise) => {
        setCandidates(currentCandidates => {
            const newCandidates = [
                { id: crypto.randomUUID(), name, photo, location, bio, skills, expertise },
                ...currentCandidates
            ]
            localStorage.setItem("CANDIDATES", JSON.stringify(newCandidates))
            return newCandidates
        })
        alert("New Candidate Added")
    }

    const deleteCandidate = (id) => {
        setCandidates(currentCandidates => {
            const updatedCandidates = currentCandidates.filter(candidate => candidate.id !== id)

            localStorage.setItem("CANDIDATES", JSON.stringify(updatedCandidates))
            return updatedCandidates
        })
        alert("Candidate removed from database")
    }

    const sortByName = () => {
        const sortedNames = [...candidates].sort((a,b) => a.name.name.localeCompare(b.name.name))
        console.log(sortedNames)
        setCandidates(sortedNames)
    }

    const sortByLocation = () => {
        const sortedNames = [...candidates].sort((a,b) => a.name.location.localeCompare(b.name.location))
        setCandidates(sortedNames)
    }
    
    return (
        <>
            <h1 className="candidates-heading">Candidates</h1>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSearchResults={setCandidates} />
            
            <div className="form-and-list">
                <CandidateForm onSubmit={addCandidate} darkMode={darkMode}/>
                <div className="list-and-search">
                    <Searchbar darkMode={darkMode} onSearchResults={setCandidates} />
                    <ul>
                        Sort by: <button className='sort-btn' type="submit" onClick={sortByName}>Name</button>
                        <button className='sort-btn' type="submit" onClick={sortByLocation}>Location</button>
                     </ul>
                    <CandidateList candidates={candidates} deleteCandidate={deleteCandidate} darkMode={darkMode}  />
                </div>
            </div>
           
        </>
    ) 
    
}