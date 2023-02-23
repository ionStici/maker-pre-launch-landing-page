import React from "react";
import { Features } from "../containers/Features";

import passionsImg from "./../assets/illustration-passions.svg";
import freedomImg from "./../assets/illustration-financial-freedom.svg";
import lifestyleImg from "./../assets/illustration-lifestyle.svg";
import workImg from "./../assets/illustration-work-anywhere.svg";

export class FeaturesComponent extends React.Component {
  render() {
    return (
      <Features
        passionsImg={passionsImg}
        freedomImg={freedomImg}
        lifestyleImg={lifestyleImg}
        workImg={workImg}
      />
    );
  }
}
