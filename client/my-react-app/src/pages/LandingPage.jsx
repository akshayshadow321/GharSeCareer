import React from "react"
import LandingFeatureSection from "../components/LandingFeatureSection"
import LandingFooter from "../components/LandingFooter"
import LandingNavbar from "../components/LandingNavbar"

export default function LandingPage(){
    return(
        <>
            <LandingNavbar></LandingNavbar>
            <LandingFeatureSection></LandingFeatureSection>
            <LandingFooter></LandingFooter>
        </>
    )
}