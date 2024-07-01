import { Typography, Box, AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

interface NavBarProps {
    home_endpoint: string;
    account: string;
}

const NavBar = ({home_endpoint, account}: NavBarProps) => {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.navbar_wrapper}>
                <Toolbar>
                    <Typography variant="h5" className={classes.home}>
                        <Link to={home_endpoint} className={classes.home} >
                            Home
                        </Link>
                    </Typography>
                    <div className={classes.navlinks}>
                        <Link to={account} className={classes.link}>
                            Account
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;