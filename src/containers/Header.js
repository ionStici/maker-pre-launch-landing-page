import React from "react";
import styles from "./Header.module.scss";

export const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <img src={props.logo} alt="Logo" />
      </nav>

      <header className={styles.header}>
        <img className={styles.bgImg} src={props.heroMobileImg} alt="" />

        <img className={styles.heroLeftImg} src={props.heroLeftImg} alt="" />
        <img className={styles.heroRightImg} src={props.heroRightImg} alt="" />
        <img className={styles.squiggle} src={props.squiggleImg} alt="" />

        <h1 className={styles.h1}>
          Get paid for the work you <span className={styles.love}>love</span> to
          do.
        </h1>
        <p className={styles.p}>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <img className={styles.iconScroll} src={props.iconScroll} alt="" />
      </header>
    </div>
  );
};
