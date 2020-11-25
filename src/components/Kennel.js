import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Kennel.css";
import "./kennelLogo.png"

export const Kennel = () => (
  <>
    <NavBar />
    <section className="Kennel">
      <img src="./kennelLogo.png" className="Kennel-logo" alt="Kennel" />
      <h2>Nashville Kennels</h2>
      <small>Where you never have to ask who let the dogs out.</small>
    </section>
    <ApplicationViews />
  </>
);
// import kennelLogo from "./kennelLogo.png";
