import React from 'react'
import styles from "./playOffScheduleMobile.module.css";
import line1 from "./../../assets/images/play-off/line1Mobile.svg";
// import line2 from "./../../assets/images/play-off/line2.svg";
import line from "./../../assets/images/play-off/line.svg";
// import zarb1 from "./../../assets/images/play-off/zarb1.svg";
// import { MatchesType, PlayOffDataType } from "../../types/types";
// import FlagIcon from "./../../assets/images/result-schedule/flag.svg";
import flag1 from "./../../assets/images/play-off/flag1.svg";
import flag2 from "./../../assets/images/play-off/flag2.svg";
import PlayOffMatchesMobile from './play-off-matches-mobile/playOffMatchesMobile';

export const PlayOffScheduleMobile: React.FC = () => {
 
  return (
    <>
    <div className={styles.wrapper}>
    <div className={styles.playOff}>
     <div className={styles.leftWrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.matches}>
        <PlayOffMatchesMobile/>
        <PlayOffMatchesMobile/>
        </div>
        <div className={styles.line1Img}><img src={line1}/></div>
      </div>
      <div className={styles.bottomWrapper}>
      <PlayOffMatchesMobile/>
      </div>
     </div>
     <div className={styles.rightWrapper}>
     <div className={styles.topWrapper}>
        <div className={styles.matches}>
        <PlayOffMatchesMobile/>
        <PlayOffMatchesMobile/>
        </div>
        <div className={styles.line1Img}><img src={line1}/></div>
      </div>
      <div className={styles.bottomWrapper}>
      <PlayOffMatchesMobile/>
      </div>
     </div>
      </div>
      <div className={styles.score}>
        <div className={styles.lineCountainer}><img src={line}/></div>
        <div className={styles.resultWrapper}>                  
              <div className={styles.team}>
               <div className={styles.flag}>
                  <img src={flag1}/>
               </div>
               <div className={styles.teamName}><p>team Name</p></div>
              </div>
                <div className={styles.result}>
                  <div className={styles.number}><p>1</p></div>
                  <div className={styles.number}><p>-</p></div>
                  <div className={styles.number}><p>2</p></div>
                </div>
                <div className={styles.team}>
                <div className={styles.teamName}><p>team Name</p></div>
               <div className={styles.flag}>
                  <img src={flag2}/>
               </div>
              
              </div> 
          </div>
      </div>
    </div>
    

 
       
       
    </>
  );
};
export default PlayOffScheduleMobile;

