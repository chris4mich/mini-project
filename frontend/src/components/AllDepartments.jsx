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

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const ButtonLink = styled(NavLink)`
  text-decoration: none;
`;

export default function UserList() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    DepartmentsGet();
  }, []);

  const DepartmentsGet = () => {
    fetch("http://localhost:4000/department/")
      .then((res) => res.json())
      .then((result) => {
        setDepartments(result);
      });
  };

  const UpdateDepartment = (id) => {
    window.location = "/editdepartment/" + id;
  };

  const DepartmentDelete = (id) => {
    var data = {
      id: id,
    };
    fetch("http://localhost:4000/department/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["Done delete"]);
        if (result["status"] === "ok") {
          DepartmentsGet();
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
              Departments
            </Typography>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <Thead>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Actions</TableCell>
              </Thead>
              {departments.map((department) => (
                <Tbody key={department.ID}>
                  <TableCell align="center">{department.id}</TableCell>
                  <TableCell align="center">
                    {department.department_name}
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        variant="contained"
                        style={{ marginRight: 10 }}
                        onClick={() => UpdateDepartment(department.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        style={{ marginRight: 10 }}
                        onClick={() => DepartmentDelete(department.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </Tbody>
              ))}
            </TableHead>
          </Table>
        </TableContainer>

        <ButtonLink to="/adddepartment">
          <Button
            variant="contained"
            style={{ marginTop: 20, marginBottom: 40, padding: 15 }}
          >
            Add Department
          </Button>
        </ButtonLink>
      </StyledTable>
    </div>
  );
}
