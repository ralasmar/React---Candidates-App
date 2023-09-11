import { CandidateCard } from "./CandidateCard";
import { Pagination } from "@mui/material"
import { useState, useEffect } from "react";

export function CandidateList(props){
    
    const [currentPage, setCurrentPage] = useState(1)
    const candidatesPerPage = 6;

    const startIndex = (currentPage - 1) * candidatesPerPage;
    const endIndex = startIndex + candidatesPerPage

    const currentCandidates = props.candidates.slice(startIndex, endIndex)

    // const [candidates, setCandidates] = useState(
    //     JSON.parse(window.localStorage.getItem("CANDIDATES")) || []
    //     )
   
    const handlePageChange =(event, newPage) => {
        setCurrentPage(newPage)
    }

    // function sortByName(){
    //     const sortedNames = [...candidates].sort((a,b) => a.name.name.localeCompare(b.name))
    //     console.log(sortedNames)
    //     setCandidates(sortedNames)
    // }


    return (
        <>
        <main className={props.darkMode ? "dark": ""}>
            {/* <ul>
                Sort by: <button type="submit" onClick={sortByName}>Name</button>
                <button>Location</button>
            </ul> */}
            <section className="card-area">
                {currentCandidates.length === 0 && "No Candidates Available"}
                {currentCandidates.map(candidate => {
                    return (
                        <CandidateCard
                            id={candidate.id}
                            name={candidate.name.name}
                            location={candidate.name.location}
                            bio={candidate.name.bio}
                            skills={candidate.name.skills}
                            expertise={candidate.name.expertise}
                            key={candidate.id}
                            deleteCandidate={props.deleteCandidate}
                        />
                    )
                })}
            </section>
            <Pagination 
                count={Math.ceil(props.candidates.length / candidatesPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                className="pagination"
            />
        </main>
        </>
    )
}