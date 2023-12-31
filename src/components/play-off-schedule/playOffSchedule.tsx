// import React from 'react'
import styles from "./playOffSchedule.module.css";
import line1 from "./../../assets/images/play-off/line1.svg";
import line2 from "./../../assets/images/play-off/line2.svg";
import line3 from "./../../assets/images/play-off/line3.svg";
import zarb1 from "./../../assets/images/play-off/zarb1.svg";
// import { PlayOffDataType } from "../../types/types";
import PlayOffMatches from "./play-off-matches/playOffMatches";
import flag1 from "./../../assets/images/play-off/flag1.svg";
import flag2 from "./../../assets/images/play-off/flag2.svg";

export const playOffSchedule: React.FC = () => {
 
  return (
    <>
      <div className={styles.resultScheduleContent}>
        <div className={styles.wholePartWrapper}>
        <div className={styles.Wrapper}>
        <div className={styles.leftWrapper}>
        <div className={styles.leftPlays}>
        <PlayOffMatches/>
        <PlayOffMatches/>
       </div>
       <div className={styles.line1}>
       <img src={line1} />
       </div>
        
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.middlePlays}>
          <PlayOffMatches/>
          <PlayOffMatches/>
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.line3}>
          <img src={line3} />
          </div>
        
        <div className={styles.rightPlays}>
          <PlayOffMatches/>
          <PlayOffMatches/>
          </div>
        </div>
        </div>
         <div className={styles.line2}>
          <img src={line2} />
          </div>
          <div className={styles.bottomPart}>
          <img src={zarb1} />
          <li className={styles.matchContainer}>
              <div className={styles.match}>
              <div className={styles.team}>
               <span className={styles.flag}>
                  <img src={flag1}/>
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
                  <img src={flag2}/>
               </span>
            <span className={styles.name}>team name</span>
              </div>
              </div>
              
            </li>
            {/* <div className={styles.zarbWrapper}> */}
            <img src={zarb1} />
            {/* </div> */}
         
          </div>
         
      </div>
        </div>
       
    </>
  );
};
export default playOffSchedule;
