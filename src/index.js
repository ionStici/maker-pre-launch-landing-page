import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HeaderComponent } from "./components/HeaderComponent";
import { FeaturesComponent } from "./components/FeaturesComponent";
import { PricingComponent } from "./components/PricingComponent";
import { GetNotifiedComponent } from "./components/GetNotifiedComponent";

class App extends React.Component {
  render() {
    return (
      <main>
        <HeaderComponent />
        <FeaturesComponent />
        <PricingComponent />
        <GetNotifiedComponent />
      </main>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
