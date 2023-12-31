// import React from 'react'
import styles from "./header.module.css";
import Navbar from "../navbar/navbar";
import Button from "../button/button";
import CalendarIcon from "./../../assets/images/home/calendar-white.svg";
import MapIcon from "./../../assets/images/home/map.svg";
import DollarIcon from "./../../assets/images/home/dollar.svg";
import HeaderImage from "./../../assets/images/home/Men-Hero.png";
import TwitterIcon from "./../../assets/images/home/twitter.svg";
import InstagramIcon from "./../../assets/images/home/instagram.svg";
import FacebookIcon from "./../../assets/images/home/facebook.svg";
import BUSINESSImage from "./../../assets/images/home/BUSINESS.png";
// import LinkToGS from "../link-to-golden-sports/linkToGS";

export const Header = () => {
  return (
    <>
      {/* <LinkToGS /> */}
      <div className={styles.header_wrapper}>
        <div className={styles.business_image_bg}>
          <img src={BUSINESSImage} />
        </div>
        <div className={styles.introducing}>
          <Navbar />
          <div className={styles.header}>
            <div className={styles.text_wrapper}>
              <div className={styles.title}>
                <h1>BE FEARLESS BUSINESSMAN AN ATHLETHE SAME</h1>
              </div>
              <div className={styles.explain}>
                <p>
                  A Certified Running Coach And Personal Trainer For Over A
                  Decade,I've helped Thousands Of Runners Through 1-1
                  personalized Coaching And Fitness Club
                </p>
              </div>
              <Button
                prevent={true}
                linkto={"#register"}
                icon={true}
                btnColor={"#21B891"}
              >
                <p>REGISTER YOUR TEAM</p>
              </Button>
              <div className={styles.location_calender_dollar}>
                <span className={styles.lcd}>
                  <div className={styles.icon}>
                    <img src={CalendarIcon} />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.lcdinfo}>2ND SEPT</p>
                    <p>10AM</p>
                  </div>
                </span>
                <span className={styles.lcd}>
                  <div className={styles.icon}>
                    <img src={MapIcon} />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.lcdinfo}>LOCATION</p>
                    <p>VIENNA</p>
                  </div>
                </span>
                <span className={styles.lcd}>
                  <div className={styles.icon}>
                    <img src={DollarIcon} />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.lcdinfo}>ENTER PRICE</p>
                    <p>599 EURO</p>
                  </div>
                </span>
              </div>
            </div>
            <div className={styles.heroMan}>
              <img src={HeaderImage} />
            </div>
          </div>
        </div>

        <div className={styles.FollowWrapper}>
          <div className={styles.ImageWrapper}>
            <a href="#" className={styles.icon}>
              <img src={TwitterIcon} />
            </a>
            <a href="#" className={styles.icon}>
              <img src={InstagramIcon} />
            </a>
            <a href="#" className={styles.icon}>
              <img src={FacebookIcon} />
            </a>
          </div>
          <div className={styles.followUsWrapper}>
            <p className={styles.FollowUS}>FOLLOW US</p>
          </div>
        </div>
      </div>
    </>
  );
};
