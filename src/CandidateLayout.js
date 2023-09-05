import React, { useEffect, useState } from "react"
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { CandidateRoutes } from "./CandidateRoutes"
import { CandidateList } from "./components/CandidateList"
import { CandidateCard } from "./components/CandidateCard"
import { Candidates } from "./pages/Candidates"

export function CandidateLayout(props){
    const { id, name } = useParams()
    const [candidate, setCandidate] = useState(null)

    console.log(id)
    useEffect(() => {
        const fetchCandidateData = async () => {
            try {
                const response = await fetch(`/candidates/${id}`)
                if(!response.ok){
                    throw new Error("Error")
                }
                const data = await response.json()
                setCandidate(data)
            } catch (error){
                console.error("error fetching data", error)
            }
        }
        fetchCandidateData()
    }, [id])
        
    return (

        <>
        <h1 className="profile-heading">Candidate Profile</h1>
        <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
        {candidate && (
            <section key={id}>
            <strong>{candidate.name.name}</strong>
            Location: {candidate.name.location}
            Bio: {candidate.name.bio}
            Skills: {candidate.name.skills}
            Level: {candidate.name.expertise}
        </section>
        )}
        
        </>
    )
}