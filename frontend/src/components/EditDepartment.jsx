import {
  Button,
  FormGroup,
  FormControl,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 30%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

export default function EditDepartment() {
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/department/" + id)
      .then((res) => res.json())
      .then((result) => {
        setName(result.departments.name);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      department_name: name,
    };
    fetch("http://localhost:4000/department/" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      });
  };

  const [name, setName] = useState("");

  return (
    <Container>
      <Typography component="h2" variant="h4" color="primary" gutterBottom>
        Edit Department
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            style={{ marginTop: 20, width: 600 }}
            autoComplete="name"
            name="departmentName"
            variant="outlined"
            required
            fullWidth
            id="departmentName"
            label="Department Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: 30 }}
        >
          Update Department
        </Button>
      </form>
    </Container>
  );
}
