// import React from 'react'
// import Card from "../card/card";
import styles from "./mainContent.module.css";

import CalendarIcon from "./../../assets/images/home/calendar.svg";
import ShapeZarbdarIcon from "./../../assets/images/home/Group.svg";
import AntalyaSection from "./antalya/antalya";
import AntalyaMobileSection from "./antalya-mobile-section/antalyaMobileSection";

const MainContent = () => {
  return (
    <>
      <div className={`${styles.main_content_wrapper} shape-box`}>
        <div className={styles.main_content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src={ShapeZarbdarIcon} />
            </div>
            <div className={styles.right}>
              <div className={styles.title}>
                <h2>Turniererklärung</h2>
              </div>
              <div className={styles.explain}>
                <p>
                  Nach dem großen Erfolg des Sommercups am 12. Juli in Wien,
                  wird das Event nun auf ganz Österreich ausgeweitet.
                </p>
                <p>
                  Die neue Event Management Marke, Golden Sports, veranstaltet
                  die dritte Ausgabe vom Sommercup.In diesem Jahr wieder mit top
                  Preisen. Am 9. und 16. August 2020 gehen die Events über die
                  Bühne.
                </p>
                <p>
                  Gespielt wird in 4 Top Standorten in Graz, Linz, Innsbruck und
                  Salzburg.
                </p>
              </div>
              <div className={styles.calender}>
                <div className={styles.icon}>
                  <img src={CalendarIcon} />
                </div>
                <p className={styles.month}>2. September: Vienna</p>
              </div>
            </div>
          </div>
          
          {/* <div className={styles.bottom}>
            <div className={styles.left}>
              <img src={ShapeZarbdarIcon} />
            </div>
            <div className={styles.right}>
              <div className={styles.title}>
                <h2>NEWS</h2>
              </div>

              <div className={styles.explain}>
                <p>
                  Nach dem großen Erfolg des Sommercups am 12. Juli in Wien,
                  wird das Event nun auf ganz Österreich ausgeweitet.
                </p>
                <p>
                  Die neue Event Management Marke, Golden Sports, veranstaltet
                  die dritte Ausgabe vom Sommercup.In diesem Jahr wieder mit top
                  Preisen. Am 9. und 16. August 2020 gehen die Events über die
                  Bühne.
                </p>
                <p>
                  Gespielt wird in 4 Top Standorten in Graz, Linz, Innsbruck und
                  Salzburg.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div> */}
        </div>
        {/* ///////////////////////////////antalya section//////////////////////////// */}
      <AntalyaSection/>
      <AntalyaMobileSection />

      </div>
    </>
  );
};
export default MainContent;
