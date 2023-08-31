import { Link } from "react-router-dom"

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

            <button onClick={() =>deleteCandidate(id)} className="btn btn-danger">Delete</button>
        </section>
    )
}
