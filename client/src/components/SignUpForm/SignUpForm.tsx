import { useState } from "react";
import { Button, TextField, Container, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const SignUpForm: React.FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle the form submission, such as sending the signup data to your server
      console.log('Email:', email);
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.container}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    );
  };

export default SignUpForm;