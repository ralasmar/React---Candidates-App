
export function CandidateCard({id, name, location, bio, skills, expertise, deleteCandidate}){
    
    return (
        <section key={id}>
            <div className="candidate-card">
                {name}
                <br />
                {location}
                <br />
                {bio}
                <br />
                {skills}
                <br />
                {expertise}
            </div>

            <button onClick={() =>deleteCandidate(id)} className="btn btn-danger">Delete</button>
        </section>
    )
}
