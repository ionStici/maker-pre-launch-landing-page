import React from "react";
import { GetNotified } from "../containers/GetNotified";
import squiggle from "./../assets/bg-footer-squiggle.svg";

export class GetNotifiedComponent extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    if (
      document
        .querySelector(".input")
        .value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
      document.querySelector(".input").style.border =
        "2px solid var(--color-white)";
      document.querySelector(".errorMessage").style.display = "none";
      document.querySelector(".errorMessage").style.visibility = "hidden";

      setTimeout(() => {
        document.querySelector(".input").value = "";
        document.querySelector(".notification").textContent = "See Ya!";
      }, 500);
    } else {
      document.querySelector(".input").style.border =
        "2px solid var(--color-red)";
      document.querySelector(".errorMessage").style.display = "revert";
      document.querySelector(".errorMessage").style.visibility = "revert";
    }
  }

  render() {
    return (
      <GetNotified
        squiggle={squiggle}
        error="Oops! That doesn’t look like an email address"
        onSubmit={this.handleSubmit}
      />
    );
  }
}
