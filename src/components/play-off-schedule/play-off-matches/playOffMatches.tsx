// import React from 'react'
import styles from "./playOffMatches.module.css";

// import { MatchesType } from "../../../types/types";
import flag1 from "./../../../assets/images/play-off/flag1.svg";
import flag2 from "./../../../assets/images/play-off/flag2.svg";
// interface MatchType {
//   homeTeam : TeamInMatch;
//   awayTeam: TeamInMatch;
//   levelGame: string;
// }

export const PlayOffMatches: React.FC = () => {
  return (
    <li className={styles.matchContainer}>
      <div className={styles.match}>
        <div className={styles.team}>
          <span className={styles.flag}>
            <img src={flag1} />
          </span>
          <span className={styles.name}>team name</span>
        </div>
        <div className={styles.result}>
          <span>1</span>
          <span> - </span>
          <span>2</span>
        </div>
        <div className={styles.team}>
          <span className={styles.flag}>
            <img src={flag2} />
          </span>
          <span className={styles.name}>team name</span>
        </div>
      </div>
    </li>
  );
};
export default PlayOffMatches;
