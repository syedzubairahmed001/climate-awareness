import React from "react";
import { Box, Grid } from "@material-ui/core";

const ResumeHeader = (props) => {
  return (
    <Grid container>
      <Grid item md={4}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#000",
            borderRadius: "50%",
          }}
        ></div>
      </Grid>
      <Grid item md={4}></Grid>
      <Grid item md={4}></Grid>
    </Grid>
  );
};

export default ResumeHeader;
