import { HashLink } from "react-router-hash-link";

import ArrowRightIcon from "./../../assets/images/home/next.svg";

import styles from "./button.module.css";

interface proptsType {
  prevent?: boolean;
  linkto?: string | undefined;
  btnColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  icon?: boolean;
  onClick?: () => void;
  children?: React.ReactElement;
}

const Button: React.FC<proptsType> = ({
  prevent = false,
  linkto,
  children,
  type,
  // disabled = false,
  btnColor,
  icon = false,
  onClick,
}) => {
  return (
    <>
      {prevent && linkto ? (
        <HashLink
          to={prevent && linkto}
          style={{ backgroundColor: btnColor }}
          className={styles.btn1}
          smooth
        >
          {children}
          <div className={styles.icon}>
            <img src={ArrowRightIcon} />
          </div>
        </HashLink>
      ) : icon ? (
        <>
          <button
            className={styles.btn1}
            type={type}
            style={{ backgroundColor: btnColor }}
            onClick={onClick}
          >
            {children}
            <div className={styles.icon}>
              <img src={ArrowRightIcon} />
            </div>
          </button>
        </>
      ) : (
        <button
          className={styles.btn2}
          type={type}
          style={{ backgroundColor: btnColor }}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
