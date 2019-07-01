import { NextFunctionComponent } from "next"
import React from "react"
import { AboutSection } from "../components/about-section/AboutSection"
import { Navbar } from "../components/navbar/Navbar"
import { PageHead } from "../components/page-head/PageHead"
import "../styles/normalize.scss"
import { ProfessionalExperience } from "../components/professional-experience/ProfessionalExperience"
import { TitleHero } from "../components/title-hero/TitleHero"

const IndexPage: NextFunctionComponent<never> = () => {
  return (
    <div style={{
      height: "100%"
    }}>
      <PageHead/>
      <Navbar/>
      <TitleHero/>
      <AboutSection/>
      <ProfessionalExperience/>
    </div>
  )
}

export default IndexPage
