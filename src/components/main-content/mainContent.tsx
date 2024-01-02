// import React from 'react'
// import Card from "../card/card";
import classes from "./mainContent.module.css";

// import CalendarIcon from "./../../assets/images/home/calendar.svg";
// import ShapeZarbdarIcon from "./../../assets/images/home/Group.svg";
import AntalyaSection from "./antalya/antalya";
import AntalyaMobileSection from "./antalya-mobile-section/antalyaMobileSection";
import HomeTehranBaner from "../home-tehran-baner/homeTehranBaner";
import { CalendarIcon, MapIcon, XThreeIcon } from "../svgs/svgs";
import RewardPart from "../reward-part/rewardPart";
import { Services } from "../services/services";

const MainContent = () => {
  return (
    <>
      <div className={`${classes.main_content_wrapper} shape-box`}>
        <div className={classes.main_content}>
          <div className={classes.right}>
            <XThreeIcon theme="not white" size="small"/>
          </div>
          <div className={classes.left}>
            <div className={classes.mainContent}>
              <h2 className={classes.title}>ایران بیزینس کاپ</h2>
              <p className={classes.explain}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <div className={classes.details}>
              <div className={classes.detail}>
                <span className={classes.icon}>
                  <MapIcon color="#636363" />
                </span>
                <span className={classes.txt}>تهران، ورزشگاه شهید شیرودی</span>
              </div>
              <div className={classes.detail}>
                <span className={classes.icon}>
                  <CalendarIcon color="#636363" />
                </span>
                <span className={classes.txt}>14 تا 16 بهمن</span>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////antalya section//////////////////////////// */}
        <RewardPart />
        <Services />
        <AntalyaSection />
        <AntalyaMobileSection />
        <HomeTehranBaner />
      </div>
    </>
  );
};
export default MainContent;
