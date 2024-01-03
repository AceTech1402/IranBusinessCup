import { HashLink } from "react-router-hash-link";

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
  btnColor,
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
        </HashLink>
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
