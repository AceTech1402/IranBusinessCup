import { NavLink } from "react-router-dom";
import classes from "./tabs.module.css";
import paths from "../../../constants/paths";
// import { useState } from "react";
import styles from "./tabs.module.css";
export const Tabs: React.FC = () => {
  // const [statusMenu, setStatusMenu] = useState<boolean>(false);

  // const toggleStatusMenu = () => {
  //   setStatusMenu((state) => !state);
  // };
  return (
    <div className={classes.tabs}>
      <NavLink
        to={paths.RESULT}
        className={({ isActive }) => {
          return isActive ? styles.active : "";
        }}
        // onClick={() => toggleStatusMenu()}
      >
        Table
      </NavLink>
      <NavLink
        to={paths.PLAYOFF}
        className={({ isActive }) => {
          return isActive ? styles.active : "";
        }}
        // onClick={() => toggleStatusMenu()}
      >
        Play off
      </NavLink>
    </div>
  );
};
