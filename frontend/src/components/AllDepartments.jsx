import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Department from "./Department";

// Styles
const StyledTable = styled(Table)`
  width: 60%;
  margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background: #0072ba;
  font-size: 20px;
  & > th {
    color: white;
    font-size: 20px;
  }
`;

export default function AllDepartments() {
  const [departments, setDepartments] = useState([]);
  const [open, setOpen] = useState(-1);

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

        <TableContainer style={{ marginTop: 10 }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <Thead>
                <TableCell>Employees</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Actions</TableCell>
              </Thead>
            </TableHead>
            <TableBody>
              {departments.map((department, index) => (
                <>
                  <TableRow key={department.id}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(open === index ? -1 : index)}
                      >
                        {open === index ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
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
                  </TableRow>
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      sx={{ paddingBottom: 0, paddingTop: 0, border: "0px" }}
                    >
                      <Collapse
                        in={open === index}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box
                          sx={{
                            width: "100%",
                            backgroundColor: "rgb(229, 229, 229)",
                            minHeight: 36,
                            textAlign: "center",
                            alignItems: "center",
                            fontSize: 18,
                          }}
                        >
                          <TableCell>
                            <Department id={department.id}></Department>
                          </TableCell>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
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
