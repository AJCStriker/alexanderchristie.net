import React, { FunctionComponent } from "react"
import styles from "./AboutSection.module.scss"

export const AboutSection: FunctionComponent<{}> = () => {
  return (
    <div id={"about"} className={styles.AboutSectionContainer}>
      <div className={styles.AboutSectionColorBar} >
        <h2>About Me</h2>
      </div>
      <div className={styles.AboutSection}>
        <div className={styles.AboutSectionHeader}>
          <div className={styles.AboutSectionHeaderContent}>
            <img src={"/static/profile.jpg"} className={styles.AboutSectionProfileImage} alt={"Profile picture of Alex"}/>
          </div>
        </div>
        <div className={styles.AboutSectionContent}>
          <div className={styles.AboutSocialLinks}>
            <a href={"https://www.linkedin.com/in/alexander-christie-a42112a7/"}>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href={"https://github.com/AJCStriker"}>
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href={"https://www.instagram.com/alexander__christie"}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <p>I am a naturally enthusiastic and curious software engineer who loves applying computer science to solve hard problems at scale.</p>
          <p>
            I have founded two companies and helped to build several others as a Contributing Engineer, VP of Engineering and as a Co-Founder.
            I love to work at the intersection of hard technical problems and beautiful products where delivering a seamless experience to the user requires
            detailed and complex technical work.
          </p>
          <p>
            Professionally I am passionate about building engineering teams with a competitive advantage through technical innovation and a relaxed management style.
          </p>
          <p>
            Outside of work I am an aspiring martial artist who regularly trains Krav Maga and Brazillian Jiu Jitsu.
          </p>
          <p>
            When I'm not in the Gym I enjoy making Open Source contributions, learning about Cryptography, building modifications for Video Games  and learning new things from people in fields I have never encountered.
          </p>
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}
