import { useState } from "react";

import {
  Button, FormControl,
  FormGroup, styled,
  TextField, Typography
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 30%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
export default function AddEmployees() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      firstname: firstname,
      lastname: lastname,
      afm: afm,
      dateofbirth: dateofbirth,
    };
    fetch("http://localhost:4000/employee/", {
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
          window.location.href = "/employees";
        }
      });
  };
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [afm, setAfm] = useState("");
  const [dateofbirth, setDateofBirth] = useState("");

  return (
    <Container>
      <Typography component="h2" variant="h4" color="primary" gutterBottom>
        Add Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            style={{ marginTop: 20, width: 600 }}
            autoComplete="firstname"
            name="firstname"
            variant="outlined"
            required
            fullWidth
            id="firstname"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            autoFocus
          />
          <TextField
            style={{ marginTop: 20, width: 600 }}
            autoComplete="lastname"
            name="lastname"
            variant="outlined"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            autoFocus
          />
          <TextField
            style={{ marginTop: 20, width: 600 }}
            autoComplete="afm"
            name="afm"
            variant="outlined"
            required
            fullWidth
            id="afm"
            label="AFM"
            onChange={(e) => setAfm(e.target.value)}
            autoFocus
          />
          <TextField
            id="date"
            label="Date of Birthday"
            type="date"
            defaultValue="2023-01-01"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDateofBirth(e.target.value)}
            name="dateofbirth"
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
