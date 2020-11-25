import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Kennel.css";
import "./kennelLogo.png"

export const Kennel = () => (
  <>
    <NavBar />
    <ApplicationViews />
  </>
);
// import kennelLogo from "./kennelLogo.png";
      // <img src="./kennelLogo.png" className="Kennel-logo" alt="Kennel" />
      // <h2>Nashville Kennels</h2>
      // <small>Where you never have to ask who let the dogs out.</small>