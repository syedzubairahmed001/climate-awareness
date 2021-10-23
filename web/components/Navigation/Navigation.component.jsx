import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import AccountPopup from "../AccountPopup/AccountPopup.component";
import { test } from "../../store/actions/user";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  sec1: {
    flexGrow: 1,
  },
}));

const Navigation = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

    return (
    <AppBar position="static" className={styles.container}>
      <Toolbar>
        <Box mr={1}>
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        </Box>
        <Typography variant="h6">ThatProtest</Typography>
        <Box className={styles.sec1}></Box>
        <Button
          color="inherit"
          color="primary"
          variant="contained"
          disableElevation
          onClick={() => {
            dispatch(test()).then(res => console.log(res))
          }}
        >
          test
        </Button>
        <AccountPopup />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
