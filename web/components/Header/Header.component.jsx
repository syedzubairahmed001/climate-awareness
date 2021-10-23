import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
  },
}));

const Header = (props) => {
  const styles = useStyles();

  return (
    <Box p={3} mx={3} mt={1} textAlign="center" className={styles.container}>
      <Box mb={1}>
        <Typography variant="h4" align="center">
          Let's not look for a change, Let's be the change
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          eaque nemo deserunt aut quibusdam distinctio nulla, expedita eos
          adipisci sit assumenda asperiores saepe omnis quasi mollitia
          dignissimos neque aliquam autem.
        </Typography>
      </Box>
      <Box display="flex" alignContent="center">
        <Box mr={2}>
          <Button color="primary" variant="contained">
            Share Story
          </Button>
        </Box>
        <Box>
          <Button color="primary" variant="text">
            Organise Event
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
