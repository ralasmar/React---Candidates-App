import React from "react"
import { Route, Routes } from "react-router-dom"
import { CandidateList } from "./components/CandidateList"
import { CandidateCard } from "./components/CandidateCard"
import { CandidateLayout } from "./CandidateLayout"


export function CandidateRoutes(){
    return (
        <>
        <CandidateLayout />
        <Routes>
            <Route element={<CandidateLayout />}>
                <Route index element={<CandidateList />} />
                <Route path=":id" element={<CandidateCard />} />
            </Route>
        </Routes>
        </>
    )
}