import classes from "./footer.module.css";

import logoWithName from "./../../assets/images/home/logo-with-name.svg";
import { NavLink } from "react-router-dom";
import SmsIcon from "./../../assets/images/home/sms.svg";
import LocationIcon from "./../../assets/images/home/location.svg";
import call from "./../../assets/images/home/call.svg";
interface ItemsType {
  id: number;
  text: string;
  link?: string;
}

interface ItemsFooterType {
  id: number;
  title: string;
  items: ItemsType[];
}

const ItemsFooter: ItemsFooterType[] = [
  {
    id: 1,
    title: "Get In Touch",
    items: [
      // { id: 1, text: "درباره ما", link: "https://goldensports.at/#contactus" },
      {
        id: 2,
        text: "ارتباط با ما",
        // link: "https://goldensports.at/impressum",
      },
      { id: 3, text: " نتایج/برنامه بازی" },
      { id: 4, text: " خانه", link: "/" },
    ],
  },
  {
    id: 2,
    title: "Über die Business League",
    items: [
      { id: 1, text: "قوانین بازی"},
      { id: 2, text: "قوانین ثبت نام"},
    ],
  },
];

const cantactus = [
  {
    id: 1,
    title: "ارتباط  با  ما",
    items: [
      { id: 1, icon: call, text: "02144464914" },
      { id: 2, icon: SmsIcon, text: "info@eramond.ir" },
      {
        id: 3,
        icon: LocationIcon,
        text: "جنت آباد مرکزی",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer}>
        <div className={classes.items_left}>
          <div className={classes.items}>
            <div className={classes.item_start}>
              <div className={classes.logo_wrapper}>
                <img src={logoWithName} />
              </div>
            </div>
          </div>
          {ItemsFooter.map((item) => (
            <ul className={classes.items} key={item.id}>
              {item.items.map((text) => (
                <li className={classes.item} key={text.id}>
                  {text.link ? (
                    <NavLink
                      to={text.link}
                      className={({ isActive }) => (isActive ? classes.active : "")}
                    >
                      {text.text}
                    </NavLink>
                  ) : (
                    <p>{text.text}</p>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className={classes.items_right}>
          {cantactus.map((item) => (
            <div className={classes.item} key={item.id}>
              <div className={classes.title}>
                <p>{item.title}</p>
              </div>
              <ul className={classes.contactUsItems}>
                {item.items.map((txt) => (
                  <li key={txt.id} className={classes.item}>
                    <div className={classes.icon}>
                      <img src={txt.icon} />
                    </div>
                    <div className={classes.text}>
                      <p>{txt.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <div className={classes.socials}>
                
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.link_wrapper}>
        <p>
          Powered by
          <NavLink to="https://www.goldensports.at/" target="_blank">
            Goldensports.at
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Footer;
