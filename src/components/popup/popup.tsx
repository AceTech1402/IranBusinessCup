import classes from "./popup.module.css";

// import SuccessIcon from "./../../icons/tick.svg";
// import ErrorIcon from "./../../icons/close.svg";
// import WarnningIcon from "./../../icons/danger.svg";
import { NavLink } from "react-router-dom";

interface propsType {
  showPopup: boolean;
  result_req: number;
  message: string;
  changeShowPopupStatus: () => void;
}

const Popup = ({
  showPopup,
  result_req,
  message,
  changeShowPopupStatus,
}: propsType) => {
  return (
    <>
      <div
        className={`${classes.cover} ${showPopup ? classes.active : ""}`}
        onClick={() => {
          changeShowPopupStatus();
        }}
      ></div>
      <div
        className={`${classes.popup_wrapper} ${
          showPopup ? classes.active : ""
        }`}
      >
        <div className={classes.popup}></div>
        <div className={classes.header}>
          {/* <div className={classes.image}>
          <img
            src={
              result_req === 1
                ? SuccessIcon
                : result_req === 0
                ? WarnningIcon
                : ErrorIcon
            }
          />
        </div> */}
          <div className={classes.text}>
            <p
              style={{
                color:
                  result_req === 1
                    ? "#1496F5"
                    : result_req === 0
                    ? "#FFEA00"
                    : "#FA0000",
              }}
            >
              {result_req === 1 ? "Register Successful" : "Register Faild"}
            </p>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.text}>
            <p>{message}</p>
          </div>
          {result_req === 1 ? (
            <NavLink
              to="/"
              onClick={() => {
                changeShowPopupStatus();
              }}
              className={classes.button}
            >
              Go to homepage
            </NavLink>
          ) : (
            <button
              className={classes.button}
              onClick={() => changeShowPopupStatus()}
              style={{
                color:
                  result_req === 0
                    ? "#ffffff"
                    : result_req === 2
                    ? "#ffffff"
                    : "",
                backgroundColor:
                  result_req === 0
                    ? "#1496F5"
                    : result_req === 2
                    ? "#1496F5"
                    : "",
              }}
            >
              <p>try again</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Popup;
