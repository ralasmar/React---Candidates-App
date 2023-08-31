import { CandidateCard } from "./CandidateCard";

export function CandidateList(props){
    return (
        <>
        <main className={props.darkMode ? "dark": ""}>
            <section className="card-area">
                {props.candidates.length === 0 && "No Candidates Available"}
                {props.candidates.map(candidate => {
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
        </main>
        </>
    )
}