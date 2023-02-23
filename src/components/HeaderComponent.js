import React from "react";
import logo from "./../assets/logo.svg";
import { Header } from "../containers/Header";

import squiggleImg from "./../assets/bg-hero-squiggle.svg";
import heroLeftImg from "./../assets/illustration-hero-left.svg";
import heroRightImg from "./../assets/illustration-hero-right.svg";
import heroMobileImg from "./../assets/illustration-hero-mobile.png";
import iconScroll from "./../assets/icon-scroll.svg";

export class HeaderComponent extends React.Component {
  render() {
    return (
      <Header
        logo={logo}
        iconScroll={iconScroll}
        heroLeftImg={heroLeftImg}
        heroRightImg={heroRightImg}
        heroMobileImg={heroMobileImg}
        squiggleImg={squiggleImg}
      />
    );
  }
}
