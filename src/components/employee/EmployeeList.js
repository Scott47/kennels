import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Link } from "react-router-dom"
import "./Employee.css";

export const EmployeeList = (props) => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(() => {
    // console.log("EmployeeList: Initial render before data", employees)
getEmployees()
  }, []);

  return (
    <div className="employees">
      <article className="employeeList">
        <h1>Employees</h1>
        <button onClick={() => props.history.push("/employees/create")}>
          Add Employee
        </button>
        {
            employees.map((employee) => {
                return (
                    <Link key={employee.id} to={`/employees/${employee.id}`}>
                    <h3>{employee.name}</h3>
                    </Link>
                );
            })
        }
      </article>
    </div>
  );
};
