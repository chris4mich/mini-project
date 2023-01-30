import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Department({id, department_name}) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeesGet();
  }, []);

  const employeesGet = () => {
    axios.get(`http://localhost:4000/department/${id}/employees`).then((result) => {
      setEmployees(result.data);
    });
  };

  return (
    <div>
      <h2>{department_name}</h2>
      {JSON.stringify(employees)}
    </div>
  )
}