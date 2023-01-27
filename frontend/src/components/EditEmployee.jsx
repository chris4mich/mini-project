import { FormGroup, styled, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";

// Styles
const Container = styled(FormGroup)`
  width: 30%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const AddEmployee = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/employee/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (employee) => {
    axios
      .patch(`http://localhost:4000/employee/${id}`, employee)
      .then((res) => {
        setIsRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isRedirect) {
    return <Navigate to="/employees"></Navigate>;
  } else {
    return (
      <Container>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Edit Employee
        </Typography>
        <EmployeeForm employee={employee} onSubmit={handleSubmit} />
      </Container>
    );
  }
};
export default AddEmployee;
