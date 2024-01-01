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
                <h1>فوتبال بازی کسب و کارتو گسترش بده</h1>
              </div>
              <div className={styles.explain}>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپرررر.
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپرررر
                </p>
              </div>
              <Button
                prevent={true}
                linkto={"#register"}
                btnColor={"#21B891"}
              >
                <p>ثبت نام</p>
              </Button>
            </div>
            <div className={styles.heroMan}>
              <img src={HeaderImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
