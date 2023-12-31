import classes from "./antalya.module.css";
import multiple from "../../../assets/images/home/blueMultiple.svg";
import Button from "../../button/button";
import manAntalya from "../../../assets/images/home/man-antalya.png";
const AntalyaSection = () => {
  return (
    <>
      <section className={classes.sectionWrapper}>
        {/* <div className={classes.leftSide}>
          <div className={classes.multipleImg}>
            <img src={multiple} />
          </div>
          <div className={classes.texts}>
            <div className={classes.topTexts}>
              <div className={classes.title}>
                <div className={classes.helloWrapper}>
                  <p>SAY HELLO TO </p>
                </div>
                <div className={classes.textWrapper}>
                  <h1>Antalya</h1>
                </div>
              </div>
              <div className={classes.detail}>
                <p>
                  Nach dem großen Erfolg des Sommercups am 12.
                  <br /> Juli in Wien, wird das Event nun auf ganz Österreich{" "}
                  <br />
                  ausgeweitet.Die neue Event Management Marke, <br />
                  Golden Sports, n. Am 9. und 16. August 2020 gehen <br />
                  die Events über die Bühne.
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
                <p>REGISTER YOUR TEAM</p>
              </Button>
            </div>
          </div>
        </div> */}
        <div className={classes.rightSide}>
          <img src={manAntalya} />
        </div>
      </section>
    </>
  );
};
export default AntalyaSection;
