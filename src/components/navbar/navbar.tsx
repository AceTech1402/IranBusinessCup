import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";

import Logo from "./../../assets/images/home/logo.svg";
import LogoDark from "./../../assets/images/home/logo-dark.svg";
import MenuIcon from "./../../assets/images/home/menu.svg";

import paths from "../../constants/paths";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [statusMenu, setStatusMenu] = useState<boolean>(false);

  const toggleStatusMenu = () => {
    setStatusMenu((state) => !state);
  };

  let path = useLocation().pathname.toLowerCase();
  const navBarDrak = [paths.HOME];

  return (
    <>
      <div
        className={`${styles.cover} ${statusMenu ? styles.active : ""}`}
        onClick={() => toggleStatusMenu()}
      ></div>
      <div
        className={`${styles.wrapperNavbar} ${
          !navBarDrak.includes(path) && styles.dark
        }`}
      >
        <div className={`${styles.navbar}`}>
          <NavLink to={paths.HOME} className={styles.logo}>
            <img src={!navBarDrak.includes(path) ? LogoDark : Logo} />
            <p>بیزینس لیگ ایران</p>
          </NavLink>
          <div
            className={styles.button_open_menu}
            onClick={() => toggleStatusMenu()}
          >
            <img src={MenuIcon} />
          </div>
          <div
            className={`${styles.wrapper1} ${statusMenu ? styles.active : ""}`}
          >
            <ul>
              <li>
                <NavLink
                  to={paths.HOME}
                  className={({ isActive }) => {
                    return isActive ? styles.active : "";
                  }}
                  onClick={() => toggleStatusMenu()}
                >
                  <div className={styles.image}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17.99V14.99"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>خانه</p>
                </NavLink>
              </li>
              <li>
                <Link
                  to="#"
                  // className={({ isActive }) => {
                  //   return isActive ? styles.active : "";
                  // }}
                  // onClick={() => toggleStatusMenu()}
                >
                  <div className={styles.image}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66666 1.6665V4.1665"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3333 1.6665V4.1665"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.91666 7.5752H17.0833"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 7.08317V14.1665C17.5 16.6665 16.25 18.3332 13.3333 18.3332H6.66667C3.75 18.3332 2.5 16.6665 2.5 14.1665V7.08317C2.5 4.58317 3.75 2.9165 6.66667 2.9165H13.3333C16.25 2.9165 17.5 4.58317 17.5 7.08317Z"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.0789 11.4167H13.0864"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.0789 13.9167H13.0864"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99623 11.4167H10.0037"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99623 13.9167H10.0037"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.91194 11.4167H6.91942"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.91194 13.9167H6.91942"
                        stroke="#F0A04D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>نتایج / برنامه بازی</p>
                </Link>
              </li>
              {/* <li className={`${styles.last}`}>
                <HashLink
                  to="/#register"
                  smooth
                  onClick={() => {
                    setStatusMenu(false);
                  }}
                >
                  <div className={styles.image}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8.99996L12.5364 13.1562C11.8244 14.0107 11.4683 14.4379 11 14.4379C10.5316 14.4379 10.1756 14.0107 9.46353 13.1562L7.99997 11.4M5.59479 5.01894C7.14254 5.40691 8.71893 4.49678 9.15682 2.9624C9.97313 0.10205 14.0268 0.10205 14.8431 2.9624C15.281 4.49678 16.8574 5.40691 18.4051 5.01894C21.2904 4.29571 23.3173 7.8063 21.2483 9.94342C20.1384 11.0898 20.1384 12.9101 21.2483 14.0565C23.3173 16.1936 21.2904 19.7042 18.4051 18.981C16.8574 18.593 15.281 19.5031 14.8431 21.0375C14.0268 23.8979 9.97313 23.8979 9.15682 21.0375C8.71893 19.5031 7.14254 18.593 5.59479 18.981C2.70949 19.7042 0.682652 16.1936 2.75164 14.0565C3.8615 12.9101 3.8615 11.0898 2.75164 9.94342C0.682653 7.8063 2.70949 4.29571 5.59479 5.01894Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p>درباره ما</p>
                </HashLink>
              </li> */}
            </ul>
            <HashLink
              to="/#register"
              smooth
              onClick={() => {
                setStatusMenu(false);
              }}
            >
              <p>ثبت نام</p>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
