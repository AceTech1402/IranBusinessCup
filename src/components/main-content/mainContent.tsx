import classes from "./mainContent.module.css";

import AntalyaSection from "./antalya/antalya";
import AntalyaMobileSection from "./antalya-mobile-section/antalyaMobileSection";
import HomeTehranBaner from "../home-tehran-baner/homeTehranBaner";
import { XThreeIcon } from "../svgs/svgs";
import RewardPart from "../reward-part/rewardPart";
import { Services } from "../services/services";

const MainContent = () => {
  return (
    <>
      <div className={classes.main_content_wrapper}>
        <div className={classes.main_content}>
          <div className={classes.right}>
            <XThreeIcon theme="not white" size="small" />
          </div>
          <div className={classes.left}>
            <div className={classes.mainContent}>
              <h2 className={classes.title}>ایران بیزینس کاپ</h2>
              <p className={classes.explain}>
                مسابقات ایران بیزینس کاپ تحت نظارت فدراسیون جهانی مینی فوتبال در
                قالب چندین تورنمنت مختلف ، در طی سال آتی، با مشارکت مجموعه های
                تجاری ، شرکت ها و کسب و کارهای بزرگ و کوچک در داخل کشور برگزار
                میشود. برگزاری مسابقات ایران بیزینس کاپ با محوریت استفاده از به
                روز ترین تکنولوژی های تحت وب و بالاترین استاندارد های حال حاضر
                اروپا انجام خواهد شد.
              </p>
            </div>
            {/* <div className={classes.details}>
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
            </div> */}
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
