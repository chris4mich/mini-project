import { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 30%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;


export default function AddDepartment() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      department_name: name,
    };
    fetch("http://localhost:4000/department/", {
      method: "POST",
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
          window.location.href = "/departments";
        }
      });
  };
  const [name, setName] = useState("");

  return (
    <Container>
      <Typography component="h2" variant="h4" color="primary" gutterBottom>
        Add Departments
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
          Create
        </Button>
      </form>
    </Container>
  );
}
