// import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./card.module.css";

import CalendarIcon from "./../../assets/images/home/calendar.svg";
import ClockIcon from "./../../assets/images/home/clock.svg";
import ArrowRightIcon from "./../../assets/images/home/arrow-right.svg";

import CardsImage from "./../../assets/images/home/pic1.jpg";

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={CardsImage} />
        </div>
        <div className={styles.texts}>
          <div className={styles.timeAndDate}>
            <span>
              <div className={styles.image}>
                <img src={CalendarIcon} />
              </div>
              <p>January 9,2022</p>
            </span>
            <span>
              <div className={styles.image}>
                <img src={ClockIcon} />
              </div>
              <p>15min</p>
            </span>
          </div>
          <div className={styles.title}>
            <h2>NEWS TITLE NEWS TITLE NEWS TITLE NEWS TITLE</h2>
          </div>
          <div className={styles.explain}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
              iste?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
              iste?
            </p>
          </div>
          <div className={styles.ReadMoreWrapper}>
            <NavLink to="/" className={styles.more}>
              <p>READ MORE</p>
              <div className={styles.icon}>
                <img src={ArrowRightIcon} />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
