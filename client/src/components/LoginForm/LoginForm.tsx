import { Avatar, Button, TextField, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styles";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
// google sign-in imports
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';


const LoginForm: React.FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    //SSO login handlers
    const { authData, setAuthData, currentUser } = useAuth();
    const handleSignInSuccess = async (credentialResponse: {}) => {
        console.log(credentialResponse);

        const { data } = await axios.post(
            "http://localhost:8080/login",
            {
                // pass the token as part of the req body
                token: credentialResponse.credential,
            }
        );

        localStorage.setItem("authData", JSON.stringify(data));
        setAuthData(data);
    }

    const handleSignInError = () => {
        console.log("Login attempt failed");
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.container}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Log in
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
                        Login
                    </Button>
                    <Typography className={classes.text}>Haven't got an account? Sign up <Link to="/signup">here</Link></Typography>
                    <GoogleLogin useOneTap={true} theme='filled_black' onSuccess={(credentialResponse) => handleSignInSuccess(credentialResponse)} onError={handleSignInError}/>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;