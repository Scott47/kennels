
import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("kennel_customer")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)
// import kennelLogo from "./kennelLogo.png";
      // <img src="./kennelLogo.png" className="Kennel-logo" alt="Kennel" />
      // <h2>Nashville Kennels</h2>
      // <small>Where you never have to ask who let the dogs out.</small>