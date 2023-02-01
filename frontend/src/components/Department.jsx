import {
  Paper,
  styled,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const StyledTable = styled(Table)`
  width: 100%;
  margin: 0 30rem 0 auto;
`;

const Thead = styled(TableRow)`
  background: #0072ba;
  & > th {
    color: white;
    font-size: 15px;
  }
`;

export default function Department({ id }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeesGet();
  });

  const employeesGet = () => {
    axios
      .get(`http://localhost:4000/department/${id}/employees`)
      .then((result) => {
        setEmployees(result.data);
      });
  };

  return (
    <Fragment>
      <StyledTable>
        <TableHead component={Paper}>
          <Thead>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>AFM</TableCell>
            <TableCell>Date Of Birth</TableCell>
          </Thead>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.firstname}</TableCell>
              <TableCell>{employee.lastname}</TableCell>
              <TableCell>{employee.afm}</TableCell>
              <TableCell>{employee.dateofbirth}</TableCell>
            </TableRow>
          ))}
        </TableHead>
      </StyledTable>
    </Fragment>
  );
}
