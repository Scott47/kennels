import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = (props) => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        // console.log("EmployeeList: Initial render before data", employees)
        getLocations()
        .then(getEmployees)
    }, [])

    return (
        <div className="employees">
            <article className="employeeList">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            {employees.map(employee => {
                    const loc = locations.find(l => l.id === employee.locationId)
                return <Employee key={employee.id} employee={employee} loc={loc} />
                }
                )}
            </article>
        </div>
    )
}