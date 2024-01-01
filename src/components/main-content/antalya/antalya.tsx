import classes from "./antalya.module.css";
import multiple from "../../../assets/images/home/blueMultiple.svg";
import Button from "../../button/button";
import manAntalya from "../../../assets/images/home/man-antalya.png";
import { XThreeIcon } from "../../svgs/svgs";

const AntalyaSection = () => {
  return (
    <>
      <section className={classes.sectionWrapper}>
        <div className={classes.leftSide}>
          <div className={classes.multipleImg}>
            <XThreeIcon />
          </div>
          <div className={classes.texts}>
            <div className={classes.topTexts}>
              <div className={classes.title}>
                <div className={classes.helloWrapper}>
                  <p>سلام کن به</p>
                </div>
                <div className={classes.textWrapper}>
                  <h1>Antalya</h1>
                </div>
              </div>
              <div className={classes.detail}>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع
                </p>
              </div>
            </div>
            <div className={classes.button}>
              <Button
                prevent={true}
                linkto={"#register"}
                icon={true}
                btnColor={"#21B891"}
              >
                <p>ثبت نام</p>
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}>
          <img src={manAntalya} />
        </div>
      </section>
    </>
  );
};
export default AntalyaSection;
