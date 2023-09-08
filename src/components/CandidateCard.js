import React, { useState } from 'react'
import { Link, Route, Routes, useOutletContext } from "react-router-dom"
import { CandidateLayout } from "../CandidateLayout"
import { Popover } from '@mui/material'
import { Typography } from "@mui/material";


export function CandidateCard({id, name, location, bio, skills, expertise, deleteCandidate}){
    
    //state to manage anchor element for popover
    const [anchorEl, setAnchorEl] = useState(null)

    const MouseOver = (event) => {
        // console.log("hello")
        setAnchorEl(event.currentTarget)
    }
    const MouseOut = () => {
        setAnchorEl(null)
    }
    //boolean to check if the popover is open
    const open = Boolean(anchorEl)

    
    return (
        <section key={id}>
            <Link to={`/candidates/${id}/`}>
                <div className="candidate-card"
                     onMouseOver={MouseOver}
                     //onMouseOut={MouseOut}
                >
                    <section className="candidate-name">
                        <strong >{name}</strong>
                    </section>
                    Location: {location}
                    <br />
                    Skills: {skills}
                    <br />
                    Level: {expertise}
                </div>
            </Link>
            <button onClick={() =>deleteCandidate(id)} className="btn btn-danger">Delete</button>
            {open && (
                <div>
                    
                    <Popover
                        className="popover"
                        id="mouse-over-popover"
                        //styling properties
                        sx={{
                            //allows interactions with elements beneath the popover
                            PointerEvents: 'none'
                        }}
                        open={open}
                        //anchor element the popover is attached to, updated based on mouse events
                        anchorEl={anchorEl}
                        //positioning of the popover
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        onMouseOut={MouseOut}
                        //prevents the popover from focusing on elements outside the popover when closed
                        disableRestoreFocus
                    >
                        <Typography 
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            // onMouseOver={MouseOver}
                            // onMouseOut={MouseOut}
                        >Bio: {bio}
                        </Typography>
                    </Popover>
                </div>
            )}
            
        </section>
    )
}
