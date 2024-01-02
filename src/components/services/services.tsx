import { ServiceType } from "../../types/types";
import { XThreeIcon } from "../svgs/svgs";
import serviceImg1 from "./../../assets/images/home/services/service-1.png";
import serviceImg2 from "./../../assets/images/home/services/service-2.png";
import serviceImg3 from "./../../assets/images/home/services/service-3.png";
import serviceImg4 from "./../../assets/images/home/services/service-4.png";
import serviceImg5 from "./../../assets/images/home/services/service-5.png";
import classes from "./services.module.css";

const services: ServiceType[] = [
  {
    id: "1",
    img: serviceImg1,
    title: "ارائه کیت به تمام تیم ها",
    description: "ارائه‌ی کیت ورزشی به رنگ دلخواه با لوگوی اختصاصی هر شرکت",
  },
  {
    id: "2",
    img: serviceImg2,
    title: "ضبط و پخش بازی",
    description: "ضبط و پخش تمامی بازی ها به صورت زنده (Live Stream)",
  },
  {
    id: "3",
    img: serviceImg3,
    title: "پخش مستقیم نتایج",
    description: "ارائه ی  نتایج هر بازی به صورت زنده (Live Score) ",
  },
  {
    id: "4",
    img: serviceImg4,
    title: "بیمه برای تمام بازیکنان",
    description: "تمامی بازیکنان ، تحت پوشش بیمه ورزشی قرار خواهند گرفت.",
  },
  {
    id: "5",
    img: serviceImg5,
    title: "عکس تکی تمام بازیکنان",
    description: "عکاسی حرفه ای از تمام بازیکنان و استفاده در سایت ",
  },
];

export const Services: React.FC = () => {
  return (
    <div className={classes.servicesSection}>
      <div className={classes.right}>
        <XThreeIcon theme="not white" size="small" />
      </div>
      <div className={classes.left}>
        <h2 className={classes.title}>خدمات ما</h2>
        <ul className={classes.services}>
          {services.map((service) => (
            <div className={classes.service} key={service.id}>
              <span className={classes.imgContainer}>
                <img src={service.img} />
              </span>
              <div className={classes.text}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
