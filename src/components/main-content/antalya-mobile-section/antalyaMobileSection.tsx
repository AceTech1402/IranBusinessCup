import classes from "./antalyaMobileSection.module.css";
import ManAntaliaImage from "../../../assets/images/home/man-antalya.png";
import Button from "../../button/button";
// import ShapeZarbdarIcon from "../../../assets/images/home/Group.svg";
import { XThreeIcon } from "../../svgs/svgs";

const AntalyaMobileSection = () => {
  return (
    <section className={classes.sectionWrapper}>
      <div className={classes.imgWrapper}>
        <div className={classes.bgAntalia}></div>
        <img src={ManAntaliaImage} />
      </div>
      <div className={classes.textsWrapper}>
        <div className={classes.topWrapper}>
          <div className={classes.multipleWrapper}>
            <XThreeIcon theme="dark" />
          </div>
          <div className={classes.title}>
            <div className={classes.sayHello}>
              <p>سلام کن به</p>
            </div>
            <div className={classes.textWrapper}>
              <h1>Antalya</h1>
            </div>
          </div>
        </div>
        <div className={classes.detail}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع
          </p>
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
    </section>
  );
};
export default AntalyaMobileSection;
