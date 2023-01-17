import {
  Button, FormControl, FormGroup,
  Input, InputLabel, styled, Typography
} from '@mui/material';

// Styles
const Container = styled(FormGroup)`
  width: 20%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const Title = styled(Typography)`
  margin: 20px auto 40px;
`

const LoginScreen = () => {
  
  return (
    <Container>
      <Title variant="h4">Welcome to MiniProject</Title>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input name="password" type="password" fullWidth={true} />
      </FormControl>
      <FormControl>
        <Button variant="contained">Login</Button>
      </FormControl>
    </Container>
  );
};

export default LoginScreen;
