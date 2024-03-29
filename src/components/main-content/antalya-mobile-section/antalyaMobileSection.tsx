import classes from "./antalyaMobileSection.module.css";
// import ManAntaliaImage from "../../../assets/images/home/man-antalya.png";
import Button from "../../button/button";

const AntalyaMobileSection = () => {
  return (
    <section className={classes.sectionWrapper}>
      <div className={classes.topWrapper}>
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
          تیم اول و دوم هر تورنمنت شانس شرکت و قهرمانی در فینال ایران بیزینس کاپ
          را داشته و قهرمان فینال این دوره از مسابقات، از طرف ایران بیزینس کاپ
          به آنتالیا، ترکیه اعزام خواهد شد و به عنوان نماینده ایران در کنار تیم
          های برتر اروپایی در مسابقات یورو بیزینس کاپ شرکت خواهد کرد.
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
    </section>
  );
};
export default AntalyaMobileSection;
