import classes from "./antalyaMobileSection.module.css";
import antalyaMobile from "../../../assets/images/home/antalyaMobile.png";
// import Button from "../../button/button";
// import ShapeZarbdarIcon from "../../../assets/images/home/Group.svg";
const AntalyaMobileSection = () => {
  return (
    <section className={classes.sectionWrapper}>
      <div className={classes.imgWrapper}>
        <img src={antalyaMobile} />
      </div>
    </section>
  );
};
export default AntalyaMobileSection;
