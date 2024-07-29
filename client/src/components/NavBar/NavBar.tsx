import { Typography, Box, AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { NavBarProps } from '../../interface';

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
                        <Typography variant="h5" className={classes.link}>
                            {account}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;