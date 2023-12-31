import { NavLink } from "react-router-dom";
import classes from "./eventBoxItem.module.css";

interface infoTypes {
  text: string;
  logo: string;
  link: string;
}

interface PropsType {
  info: infoTypes;
  activeClass: boolean;
}

const EventBoxItem = ({ info, activeClass }: PropsType) => {
  return (
    <div
      className={`${classes.event_box_item_wrapper} ${
        activeClass ? classes.active : ""
      }`}
    >
      <NavLink to={info.link} className={`${classes.event_box_item}`} target="_blank">
        <div className={classes.text}>
          <p>{info.text}</p>
        </div>
        <div className={classes.icon}>
          <img src={info.logo} />
        </div>
      </NavLink>
    </div>
  );
};

export default EventBoxItem;
