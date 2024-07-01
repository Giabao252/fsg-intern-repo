import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles<Theme>((theme) => ({
  navbar_wrapper: {
    backgroundColor: "rgba(255, 196, 0, 0.976)",
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  home: {
    flexGrow: 1,
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
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      textDecoration: "none",
    },
  },
}));
