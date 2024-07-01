import { Avatar, Button, TextField, Container, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styles";

const LoginForm: React.FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the form submission, such as sending the login data to your server
        console.log('Email:', email);
        console.log('Password:', password);
    };

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
                    <Typography >Haven't got an account? Sign up <Link to="/signup">here</Link></Typography>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;