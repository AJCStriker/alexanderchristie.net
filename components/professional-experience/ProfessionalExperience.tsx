import React, { FunctionComponent } from "react"
import styles from "./ProfessionalExperience.module.scss"

export const POSITION_INFORMATION = [
  {
    company_name: "Attio",
    position_title: "Head of Engineering",
    timeframe: "August, 2017 - Present",
    description: [
      <p>Attio is a next-generation Pipeline and Workflow Management tool that is disrupting the CRM market with powerful new features backed by Email Intelligence.</p>,
      <p>I joined the company shortly after it's foundation as the first employee to serve as Head of Engineering.</p>
    ]
  }
]

export const ProfessionalExperience: FunctionComponent<{}> = () => {
  return (
    <div id={"professional-experience"} className={styles.ProfessionalExperienceContainer}>
      <div className={styles.ProfessionalExperienceColorBar}>
        <h2>Professional Experience</h2>
      </div>
      <div className={styles.ProfessionalExperienceContent}>
        {
          POSITION_INFORMATION.map((position) =>
            <div className={styles.ProfessionalExperiencePosition}>
              <div className={styles.ProfessionalExperienceHeader}>
                <h3>{position.company_name}</h3>
                <h4>{position.position_title}</h4>
                <h4>{position.timeframe}</h4>
              </div>
              <div className={styles.ProfessionalExperienceDetailBlock}>
                <h5 className={styles.ProfessionalExperienceDetailHeader}>Technologies</h5>
                <ul className={styles.ProfessionalExperienceTechnologies}>
                  <li>Node JS</li>
                  <li>TypeScript</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                  <li>Google Cloud Platform</li>
                  <li>Angular 8</li>
                  <li>React</li>
                  <li>Swift</li>
                </ul>
                <div className={styles.ProfessionalExperienceDetailSkills}>
                </div>
                <h5 className={styles.ProfessionalExperienceDetailHeader}>Description</h5>
                <div className={styles.ProfessionalExperienceDetailBody}>
                  {position.description}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
