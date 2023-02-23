import React from "react";
import styles from "./Features.module.scss";

const Feature = (props) => {
  return (
    <div className={styles.feature}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={props.img} alt="" />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.h3}>{props.title}</h3>
        <p className={styles.p}>{props.text}</p>
      </div>
    </div>
  );
};

export const Features = (props) => {
  return (
    <div className={styles.wrapper}>
      <Feature
        img={props.passionsImg}
        title="Indulge your passions"
        text="Your passions shouldn't be just for the weekend. Earn a living doing what you love."
      />

      <Feature
        img={props.freedomImg}
        title="Gain financial freedom"
        text="Start making money work for you. There’s nothing quite like earning while you sleep. "
      />

      <Feature
        img={props.lifestyleImg}
        title="Choose your lifestyle"
        text="Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
      />

      <Feature
        img={props.workImg}
        title="Work from anywhere"
        text="Selling online means not being pinned down. Want to work AND travel? Go for it!"
      />
    </div>
  );
};
