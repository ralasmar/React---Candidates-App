import React, { useState } from 'react'
import { Link, Route, Routes, useOutletContext } from "react-router-dom"
import { CandidateLayout } from "../CandidateLayout"
import { Popover } from '@mui/material'
import { Typography } from "@mui/material";
import { motion } from 'framer-motion';
import "../style.css"


export function CandidateCard({id, name, photo, location, bio, skills, expertise, deleteCandidate}){
    
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
                <motion.div className="candidate-card"
                     onMouseOver={MouseOver}
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     transition={{delay: 0.1}}
                >
                    <section className="candidate-name">
                        {name}
                    </section>
                    {photo}
                    Location: {location}
                    <br />
                    Skills: {skills}
                    <br />
                    Level: {expertise}
                </motion.div>
            
                {open && (
                    <div>
                        
                        <Popover
                           
                            className="mouse-over-popover"
                        
                            open={open}
                            //anchor element the popover is attached to, updated based on mouse events
                            anchorEl={anchorEl}
                            //positioning of the popover
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            onMouseOut={MouseOut}
                            //prevents the popover from focusing on elements outside the popover when closed
                            disableRestoreFocus
                        >
                            <Typography 
                                className="popover"
                                aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"  
                            >Bio: {bio}
                            </Typography>
                        </Popover>
                    </div>
                )}
            </Link>
            <button onClick={() =>deleteCandidate(id)} className="btn btn-danger">Delete</button>
        </section>
    )
}
