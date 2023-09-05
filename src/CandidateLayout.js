import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "./components/Navbar"


export function CandidateLayout(props){
    const { id } = useParams()
    const [candidate, setCandidate] = useState(null)

    useEffect(() => {
        const fetchCandidateData = async () => {
            try {
                const response = JSON.parse(window.localStorage.getItem("CANDIDATES"))
                const index =  response.findIndex(candidate => id === candidate.id)
                
                setCandidate(response[index])
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
        <section className="profile-page" key={id}>
            <strong className="profile-name">{candidate.name.name}</strong>
            <p className="profile-location">Location: {candidate.name.location}</p>
            <p classname="profile-level">Level: {candidate.name.expertise}</p>
            <p className="proile-skills">Skills: {candidate.name.skills}</p>
            <p className="profile-bio">Bio: {candidate.name.bio}</p>
        </section>
        )}
        
        </>
    )
}