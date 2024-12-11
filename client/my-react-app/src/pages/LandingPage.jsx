import React from "react"
import LandingFeatureSection from "../components/LandingFeatureSection"
import LandingFooter from "../components/LandingFooter"
import LandingNavbar from "../components/LandingNavbar"
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <LandingNavbar></LandingNavbar>
            <LandingFeatureSection></LandingFeatureSection>
            <LandingFooter></LandingFooter>
        </>
    )
}