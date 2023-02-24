import React from "react";
import { Pricing } from "../containers/Pricing";

import iconFree from "./../assets/icon-free.svg";
import iconPaid from "./../assets/icon-paid.svg";
import iconCheck from "./../assets/icon-check.svg";

export class PricingComponent extends React.Component {
  render() {
    return (
      <Pricing iconFree={iconFree} iconPaid={iconPaid} iconCheck={iconCheck} />
    );
  }
}
