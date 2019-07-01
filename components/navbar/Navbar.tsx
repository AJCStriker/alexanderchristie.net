import React, { FunctionComponent } from "react"
import styles from "./Navbar.module.scss"

const SECTION_LINKS = [
  {
    name: "About",
    link: "#about"
  },
  {
    name: "Professional Experience",
    link: "#professional-experience"
  },
  {
    name: "Open Source",
    link: "#open-source"
  },
  {
    name: "Education",
    link: "#education"
  },
  {
    name: "Contact",
    link: "#contact"
  }
]

export const Navbar: FunctionComponent<{}> = () => {
  return (
    <div className={styles.NavbarContainer}>
      <ol className={styles.Navbar}>
        {
          SECTION_LINKS.map(({name, link}) => {
            return (
              <li className={styles.NavbarLink}>
                <a href={link}>
                  {name}
                </a>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}
