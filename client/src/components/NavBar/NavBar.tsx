import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.navbar_wrapper}>
                <Toolbar>
                    <Typography variant="h5" className={classes.home}>
                        <Link to="/" className={classes.home}>
                            Home
                        </Link>
                    </Typography>
                    <div className={classes.navlinks}>
                        <Link to="/user" className={classes.link}>
                            Account
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;