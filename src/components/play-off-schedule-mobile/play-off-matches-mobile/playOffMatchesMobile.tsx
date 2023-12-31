// import React from 'react'
import styles from "./playOffMatchesMobile.module.css";
// import { MatchesType, TeamInMatch } from "../../../types/types";
import flag1 from "./../../../assets/images/play-off/flag1.svg";
import flag2 from "./../../../assets/images/play-off/flag2.svg";
// interface MatchType {
//   homeTeam : TeamInMatch;
//   awayTeam: TeamInMatch;
//   levelGame: string;
// }

export const PlayOffMatchesMobile: React.FC = () => {

    return (
            <div className={styles.matchContainer}>
                <div className={styles.flagsWrapper}>
                <div className={styles.flag}>
                  <img src={flag1}/>
               </div>
               <div className={styles.flag}>
                  <img src={flag2}/>
               </div>
                </div>
                <div className={styles.countriesWrapper}>
                  <div className={styles.country}><p>IRN</p></div>
                  <div  className={styles.country}><p>AUS</p></div>
                </div>
                <div className={styles.scorsWrapper}>
                 <div className={styles.score}><p>2</p></div> 
                 <div className={styles.score}><p>-</p></div>
                <div className={styles.score}><p>4</p></div>
                </div>
             
            </div>
      );
  
}
export default PlayOffMatchesMobile;