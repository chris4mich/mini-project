import { Button, FormControl, FormGroup, Grid, Input, InputLabel, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// Styles
const Container = styled(FormGroup)`
  width: 20%;
  margin: 0 auto 0 auto;
`;

export default function LoginScreen({onLogin}) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth/login", user)
      .then((res) => {
        if (res.status >= 200 || res.status <= 204) {
          localStorage.setItem("token", res.data);
          setIsAuthenticated(true);
          onLogin(true);
        }
      })
      .catch((err) => {
        onLogin(false);
        setError(true);
      });
  };

  if (isAuthenticated) {
    return <Navigate to="/departments" />;
  }

  return (
    <Container>
    <Grid style={{ padding: 60 }}>
    <Typography
              component="h2"
              variant="h4"
              color="primary"
              gutterBottom
            >Login</Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name="username" onChange={handleChange} value={user.username} />
          </FormControl>
        
          <FormControl style={{ marginTop: 20}}>
            <InputLabel>Password</InputLabel>
            <Input
              name="password"
              type="password"
              onChange={handleChange}
              value={user.password}
            />
             {error && <Typography style={{margin: 0}}>Incorrect username or password</Typography>}
        <Button variant="contained" color="primary" type="submit"
         style={{ marginTop: 20}}>
          Login
        </Button>
        </FormControl>
      </form>
      </Container>
  );
};
