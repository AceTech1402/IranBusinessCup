import classes from "./singleNews.module.css";

import ClockIcon from "./../../assets/images/home/clock.svg";
import CalendarIcon from "./../../assets/images/home/calendar.svg";

const SingleNews = () => {
  return (
    <div className={classes.single_news_wrapper}>
      <div className={classes.single_news}>
        <div className={classes.container}>
          <div className={classes.image}>
            <img />
          </div>
          <div className={classes.caption_wrapper}>
            <div className={classes.header}>
              <div className={classes.item}>
                <div className={classes.icon}>
                  <img src={ClockIcon} />
                </div>
                <div className={classes.text}>
                  <p>January 9, 2022</p>
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.icon}>
                  <img src={CalendarIcon} />
                </div>
              </div>
            </div>
            <div className={classes.body}>
              <div className={classes.title}>
                <h1>News title news title news title news title news title</h1>
              </div>
              <div className={classes.text}>
                <p>
                  Lorem ipsum dolor sit amet. Est perferendis recusandae hic
                  earum internos qui laboriosam aliquid hic dolor ducimus hic
                  provident dolorum est laboriosam corrupti 33 iste odit! Et
                  dolore rerum qui quis minus et quasi quia. Sed magnam
                  molestiae in saepe perspiciatis 33 omnis perferendis.
                </p>
                <p>
                  Ut labore accusamus eos minus exercitationem eum mollitia
                  excepturi qui necessitatibus ducimus. Sed amet omnis est
                  aperiam molestiae sit reiciendis nihil sit culpa ipsam. Ad
                  omnis veniam sit ratione fuga cum magni aperiam et aliquid
                  quia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
