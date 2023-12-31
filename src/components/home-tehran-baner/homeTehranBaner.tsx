// import React from 'react'
// import Card from "../card/card";
import classes from "./homeTehranBaner.module.css";
import TehranImage from "./../../assets/images/home/tehran-image.png";

const HomeTehranBaner: React.FC = () => {
  return (
    <>
      <div className={`${classes.main_content_wrapper}`}>
        <img src={TehranImage} />
      </div>
    </>
  );
};
export default HomeTehranBaner;
