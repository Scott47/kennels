import React from "react"
import "./Customer.css"

export const Customer = ({cus}) => (
    <section className="customer">
        <h3 className="customer__name">{cus.name}</h3>
        <div className="customer__address">{cus.email}</div>
    </section>
)