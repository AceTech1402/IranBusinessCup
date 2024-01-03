import { CalendarIcon, MapIcon, XThreeIcon } from "../svgs/svgs";
import classes from "./homeTehranBaner.module.css";
import TehranImage from "./../../assets/images/home/tehran-image.png";

const HomeTehranBaner: React.FC = () => {
  const itemsOfGhore = [
    {
      id: 1,
      icon: <MapIcon />,
      text: "تهران، هتل اسپیناس پالاس",
    },
    // {
    //   id: 2,
    //   icon: <CalendarIcon />,
    //   text: "16  بهمن",
    // },
  ];

  return (
    <>
      <div className={`${classes.main_content_wrapper}`}>
        <div className={classes.textWrapper}>
          <div className={classes.multiIcon}>
            <XThreeIcon />
          </div>
          <div className={classes.text}>
            <div className={classes.title}>
              <p>قرعه کشی</p>
            </div>
            <div className={classes.description}>
              <p>
                مراسم قرعه کشی و افتتاحیه تورنومنت در هتل اسپیناس پالاس برگزار
                خواهد شد.
              </p>
            </div>
            <div className={classes.items}>
              <ul>
                {itemsOfGhore.map((item) => (
                  <li key={item.id}>
                    <div className={classes.icon}>{item.icon}</div>
                    <div className={classes.text}>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.image}>
          <img src={TehranImage} alt="" />
        </div>
      </div>
    </>
  );
};
export default HomeTehranBaner;
