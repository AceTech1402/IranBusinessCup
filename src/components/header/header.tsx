import styles from "./header.module.css";
import Navbar from "../navbar/navbar";
import Button from "../button/button";
import HeaderImage from "./../../assets/images/home/Men-Hero.png";
import EuroBusinessCupImage from "./../../assets/images/home/euro-business-cup-image.svg";
import BUSINESSImage from "./../../assets/images/home/BUSINESS.png";

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
                <h1>
                  <span>فوتبال</span> بازی کن
                  <p>کسب و کارتو گسترش بده</p>
                </h1>
              </div>
              <div className={styles.explain}>
                <p>
                  مسابقات ایران بیزینس کاپ تحت نظارت فدراسیون جهانی مینی فوتبال
                  در قالب چندین تورنمنت با مشارکت مجموعه
                  های تجاری، شرکت ها و کسب و کارهای مختلف در ایران
                  برگزار میشود.
                </p>
              </div>
              <Button prevent={true} linkto={"#register"} btnColor={"#21B891"}>
                <p>ثبت نام</p>
              </Button>
              <div className={styles.imageEuroCup}>
                <img src={EuroBusinessCupImage} alt="" />
              </div>
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
