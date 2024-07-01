import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles<Theme>((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(8),
        backgroundColor: "rgba(255, 196, 0, 0.976)",
        borderRadius: "5%",
        padding: theme.spacing(2)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        padding: theme.spacing(2), // Add padding to the form
        boxSizing: 'border-box',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontWeight: "bold"
    },
    title: {
        color: "black",
        fontWeight: "bold"
    }, 
    avatar: {
        backgroundColor: "blue"
    }
}));
