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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeesGet();
  }, []);

  const EmployeesGet = () => {
    axios.get("http://localhost:4000/employee/").then((result) => {
      setEmployees(result.data);
    });
  };

  const handleEmployeeDelete = (id) => {
    axios
      .delete(`http://localhost:4000/employee/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee Deleted Successfully!");
          EmployeesGet();
        }
      })
      .catch((err) => console.log(err));
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
                {/* <p>Id: {employees.department}</p> */}
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">AFM</TableCell>
                <TableCell align="center">Date of Birthday</TableCell>
                <TableCell align="center">Department</TableCell>
                <TableCell align="center">Actions</TableCell>
              </Thead>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell align="center">{employee.id}</TableCell>
                  <TableCell align="center">{employee.firstname}</TableCell>
                  <TableCell align="center">{employee.lastname}</TableCell>
                  <TableCell align="center">{employee.afm}</TableCell>
                  <TableCell align="center">{employee.dateofbirth}</TableCell>
                  <TableCell align="center">
                    {employee.department
                      ? employee.department.department_name
                      : ""}
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        component={Link}
                        to={"/employees/" + employee.id}
                        variant="contained"
                        style={{ marginRight: 10 }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        style={{ marginRight: 10 }}
                        onClick={() => handleEmployeeDelete(employee.id)}
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
        <Button
          component={Link}
          to="/employees/add"
          variant="contained"
          style={{ marginTop: 20, padding: 15 }}
        >
          Add Employee
        </Button>
      </StyledTable>
    </div>
  );
}
