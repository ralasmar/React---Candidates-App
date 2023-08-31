import { Link, Route, Routes } from "react-router-dom"
import { CandidateLayout } from "../CandidateLayout"

export function CandidateCard({id, name, location, bio, skills, expertise, deleteCandidate}){
    
    return (
        <section key={id}>
            <Link to={`/candidates/${id}`}>
            <div className="candidate-card">
                <section className="candidate-name">
                    <strong >{name}</strong>
                </section>
                Location: {location}
                <br />
                Bio: {bio}
                <br />
                Skills: {skills}
                <br />
                Level: {expertise}
            </div>
            </Link>
            <Routes>
                <Route path="/candidates/*" element={<CandidateLayout />}/>
            </Routes>

            <button onClick={() =>deleteCandidate(id)} className="btn btn-danger">Delete</button>
        </section>
    )
}
