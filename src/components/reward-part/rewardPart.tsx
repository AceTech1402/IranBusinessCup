// import React from 'react'
import styles from "./rewardPart.module.css";

import EuroCupImage from "./../../assets/images/home/euroCup.png";
import CupImage from "./../../assets/images/home/cup.png";
import ZarbdarImage from "./../../assets/images/home/Group40.png";

const RewardPart = () => {
  const rewards = [
    {
      id: 1,
      title: {
        sub: "تیم",
        top: "اول",
      },
      description: "وجه نقد",
      price: 100,
      subDescription: "+ شرکت در فینال ایران بیزینس کاپ",
    },
    {
      id: 2,
      title: {
        sub: "تیم",
        top: "دوم",
      },
      // description: "میلیون تومان  وجه نقد ",
      price: 70,
    },
    {
      id: 3,
      title: {
        sub: "تیم",
        top: "سوم",
      },
      // description: "میلیون تومان  وجه نقد ",
      price: 50,
    },
  ];

  return (
    <>
      <div className={styles.rewardPart}>
        <div className={styles.left}>
          <div className={styles.Multiple}>
            <img src={ZarbdarImage} />
          </div>
          <div className={styles.texts}>
            <h2 className={styles.title}>جایزه تیم های برتر</h2>
            <ul>
              {rewards.map((reward: any, index) => (
                <li key={reward.id}>
                  <div className={styles.rewardTitle}>
                    <p>{reward.title.sub}</p>
                    <p>{reward.title.top}</p>
                  </div>
                  <div className={styles.description}>
                    <div className={styles.top}>
                      <p className={index === 0 ? styles.active : ""}>
                        {reward.price}
                      </p>
                      میلیون تومان &nbsp;{reward?.description}
                    </div>
                    <div className={styles.bottom}>
                      <p> {reward.subDescription} </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <img src={CupImage} />
        </div>
      </div>
    </>
  );
};
export default RewardPart;
