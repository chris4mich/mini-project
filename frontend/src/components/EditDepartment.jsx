import {
  FormGroup, styled, Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";

const Container = styled(FormGroup)`
  width: 30%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditDepartment = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { id } = useParams();
  const [department, setDepartment] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/department/${id}`)
      .then((res) => {
        setDepartment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (department) => {
    axios
      .patch(`http://localhost:4000/department/${id}`, department)
      .then((res) => {
        setIsRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (isRedirect) {
    return <Navigate to="/departments"></Navigate>;
  } else {
    return (
      <Container>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Edit Department
        </Typography>
        <DepartmentForm department={department} onSubmit={handleSubmit} />
      </Container>
    );
  }
};
export default EditDepartment;
