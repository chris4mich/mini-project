import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  styled,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
// Styles
const StyledTable = styled(Table)`
  width: 60%;
  margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background: #0072ba;
  & > th {
    color: white;
    font-size: 20px;
  }
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
`;

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeesGet();
  }, []);

  const EmployeesGet = () => {
    fetch("http://localhost:4000/employee/")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  };

  const UpdateEmployee = (employee_id) => {
    window.location = "/editemployee/" + employee_id;
  };

  const EmployeeDelete = (employee_id) => {
    var data = {
      employee_id: employee_id,
    };
    fetch("http://localhost:4000/employee/" + employee_id, {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["Delete done"]);
        if (result["status"] === "ok") {
          EmployeesGet();
        }
      });
  };

  return (
    <div>
      <StyledTable maxWidth="lg">
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              gutterBottom
            >
              Employees
            </Typography>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <Thead>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">AFM</TableCell>
                <TableCell align="center">Date of Birthday</TableCell>
                <TableCell align="center">Department</TableCell>
                <TableCell align="center">Actions</TableCell>
              </Thead>
              {employees.map((employee) => (
                <TableRow key={employee.ID}>
                  <TableCell align="center">{employee.employee_id}</TableCell>
                  <TableCell align="center">{employee.firstname}</TableCell>
                  <TableCell align="center">{employee.lastname}</TableCell>
                  <TableCell align="center">{employee.afm}</TableCell>
                  <TableCell align="center">{employee.dateofbirth}</TableCell>
                  <TableCell align="center">{employee.department_id}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        variant="contained"
                        style={{ marginRight: 10 }}
                        onClick={() => UpdateEmployee(employee.employee_id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        style={{ marginRight: 10 }}
                        onClick={() => EmployeeDelete(employee.employee_id)}
                      >
                        Del
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableHead>
          </Table>
        </TableContainer>

        <ButtonLink to="/addemployee">
          <Button variant="contained" style={{ marginTop: 20, padding: 15 }}>
            Add Employee
          </Button>
        </ButtonLink>
      </StyledTable>
    </div>
  );
}
