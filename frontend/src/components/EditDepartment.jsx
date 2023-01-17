import {
  Button, FormGroup, Grid, styled,
  TextField, Typography
} from "@mui/material";
import { useEffect, useState } from "react";
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
      name: name,
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
      <Typography component="h2" variant="h4" color="primary" gutterBottom>Edit Department</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
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
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >Update Department</Button>
      </form>
    </Container>
  );
}
