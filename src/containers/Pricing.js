import React from "react";
import styles from "./Pricing.module.scss";

const PriceBox = (props) => {
  const list = props.list.map((item, i) => (
    <li className={styles.item} key={i}>
      {/*  */}
      <svg
        className={styles.iconCheck}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="9"
      >
        <path
          fill={props.fill}
          d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
        />
      </svg>
      {/*  */}
      <span>{item}</span>
    </li>
  ));

  return (
    <div
      className={`
        ${styles.card} 
        ${props.plan === "free" ? styles.free : ""}
        ${props.plan === "paid" ? styles.paid : ""}
      `}
    >
      <img className={styles.icon} src={props.icon} alt="" />
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.text}</p>
      <h3 className={styles.price}>{props.price}</h3>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
};

export class Pricing extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <h2 className={styles.h2}>Our pricing plans</h2>
        <p className={styles.p}>
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
        <div className={styles.wrapper}>
          <PriceBox
            icon={this.props.iconFree}
            fill="hsla(178, 80%, 58%, 1)"
            title="Dip your toe"
            text="Just getting started? No problem at all! Our free plan will take you a long way."
            price="Free"
            list={[
              "Unlimited products",
              "Basic analytics",
              "Limited marketplace exposure",
              "10% fee per transaction",
            ]}
            plan="free"
          />

          <PriceBox
            icon={this.props.iconPaid}
            fill="hsla(206, 84%, 22%, 1)"
            title="Dive right in"
            text="Ready for the big time? Our paid plan will help you take your business to the next level."
            price={
              <span>
                <span>$25.00</span>
                <span className={styles.month}>/ month</span>
              </span>
            }
            list={[
              "Custom domain",
              "Advanced analytics and reports",
              "High marketplace visibility",
              "5% fee per transaction",
            ]}
            plan="paid"
          />
        </div>
      </section>
    );
  }
}
