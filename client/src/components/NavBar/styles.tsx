import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    navbar_wrapper: {
        color: "black"
    },
    navlinks: {
      marginLeft: 20,
      display: "flex",
      fontWeight: "bold",
      textDecoration: "none",
    },
    home: {
      flexGrow: "1",
      cursor: "pointer",
      color: "black",
      fontWeight: "bold",
      textDecoration: "none",
    },
    link: { 
      textDecoration: "none",
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: 20,
      "&:hover": {
        color: "yellow",
        textDecoration: "none"
      },
    },
  }));