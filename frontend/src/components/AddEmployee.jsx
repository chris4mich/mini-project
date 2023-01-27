import {
  FormGroup,
  styled, Typography
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";

const Container = styled(FormGroup)`
  width: 30%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

export default function AddEmployees() {
  const [isRedirect, setIsRedirect] = useState(false);

  const handleSubmit = (employee) => {
    axios
      .post("http://localhost:4000/employee/", employee)
      .then((res) => {
        setIsRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  if (isRedirect) {
    return <Navigate to="/employees"></Navigate>;
  } else {
    return (
      <Container>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Create Employee
        </Typography>
        <EmployeeForm onSubmit={handleSubmit} />
      </Container>
    );
  }
}
