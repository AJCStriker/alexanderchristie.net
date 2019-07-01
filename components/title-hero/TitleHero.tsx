import React, { FunctionComponent } from "react"
import styles from "./TitleHero.module.scss"

export const TitleHero: FunctionComponent<{}> = () => {
  return (
    <div className={styles.TitleHeroContainer}>
      <h1 className={styles.TitleHero}>I'm Alex,<br/> I lead brilliant teams that design and build modern software to help scale amazing businesses</h1>
      <div className={styles.ScrollPrompt}>
        <span className={styles.ScrollPromptText}>Scroll Down</span>
        <div className={styles.ScrollPromptChaserContainer}>
          <div className={styles.ScrollPromptChaser}/>
        </div>
      </div>
    </div>
  )
}
