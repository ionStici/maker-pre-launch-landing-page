import React from "react";
import { GetNotified } from "../containers/GetNotified";
import squiggle from "./../assets/bg-footer-squiggle.svg";

export class GetNotifiedComponent extends React.Component {
  render() {
    return (
      <GetNotified
        squiggle={squiggle}
        error="Oops! That doesn’t look like an email address"
      />
    );
  }
}
