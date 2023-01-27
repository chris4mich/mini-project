import {
  FormGroup,
  styled, Typography
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";

const Container = styled(FormGroup)`
  width: 30%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

export default function AddDepartment() {
  const [isRedirect, setIsRedirect] = useState(false);

  const handleSubmit = (department) => {
    axios
      .post("http://localhost:4000/department/", department)
      .then((res) => {
        setIsRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  if (isRedirect) {
    return <Navigate to="/departments"></Navigate>;
  } else {
    return (
      <Container>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Create Department
        </Typography>
        <DepartmentForm onSubmit={handleSubmit} />
      </Container>
    );
  }
}
