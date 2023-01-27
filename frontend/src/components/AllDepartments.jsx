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

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

export default function AllDepartments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    departmentsGet();
  }, []);

  const departmentsGet = () => {
    axios.get("http://localhost:4000/department/").then((result) => {
      setDepartments(result.data);
    });
  };

  const handleDepartmentDelete = (id) => {
    axios
      .delete(`http://localhost:4000/department/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Department Deleted Successfully!");
          departmentsGet();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <StyledTable>
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
                <Tbody key={department.id}>
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
                        component={Link}
                        to={"/departments/" + department.id}
                        variant="contained"
                        style={{ marginRight: 10 }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        style={{ marginRight: 10 }}
                        onClick={() => handleDepartmentDelete(department.id)}
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
        <Button
          component={Link}
          to="/departments/add"
          variant="contained"
          style={{ marginTop: 20, marginBottom: 40, padding: 15 }}
        >
          Add Department
        </Button>
      </StyledTable>
    </div>
  );
}
