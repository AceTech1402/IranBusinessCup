import { NavLink } from "react-router-dom";
import classes from "./linkToGS.module.css";

import ImageLogo from "./../../assets/images/logos/golden-sports-logo.svg";
import ImageLogoText from "./../../assets/images/logos/golden-sports-logo-lext.svg";

const LinkToGS = () => {
    return(
        <NavLink to="https://www.goldensports.at/" className={classes.link_to_gs_wrapper}>
            <div className={classes.circle_one}></div>
            <div className={classes.circle_two}></div>
            <div className={classes.circle_three}></div>
            <div className={classes.link_to_gs}>
                <div className={classes.container}>

                    <div className={classes.logo_wrapper}>
                        <div className={classes.logo}>
                            <img src={ImageLogo} />
                        </div>
                        <div className={classes.logo_text}>
                            <img src={ImageLogoText} />
                        </div>
                    </div>
                    <div className={classes.text}>
                        <p>Click here to return to Golden Sports</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default LinkToGS;