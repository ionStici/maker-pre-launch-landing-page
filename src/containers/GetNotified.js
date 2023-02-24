import React from "react";
import styles from "./GetNotified.module.scss";

export class GetNotified extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <h2 className={`${styles.h2} notification`}>
          Get notified when we launch
        </h2>
        <form onSubmit={this.props.onSubmit} className={`${styles.form} form`}>
          <input
            className={`${styles.input} input`}
            placeholder="Email address"
          />
          <button className={styles.btn}>Get notified</button>
          <p className={`${styles.errorMessage} errorMessage`}>
            {this.props.error}
          </p>
        </form>
        <img className={styles.img} src={this.props.squiggle} alt="" />
      </footer>
    );
  }
}
