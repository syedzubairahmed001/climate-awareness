import React from "react";
import { Box, Grid, Button, TextField } from "@material-ui/core";
import { jsPDF } from "jspdf";
import ReactToPdf from "react-to-pdf";

import Navigation from "../../components/Navigation/Navigation.component";
import Layout from "../../hoc/Layout/Layout.container";
import ResumeHeader from "./ResumeHeader/ResumeHeader.component";

const Home = (props) => {
  const ref = React.createRef();
  const getPDF = () => {
    const pdf = new jsPDF();
    pdf.html(document.getElementById("resume"));
    pdf.save();
  };
  return (
    <Layout>
      <Navigation />

      <div
        id="resume"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={ref}
      >
        <div>
          <div>test 1 23</div>
        </div>
        <ResumeHeader />
      </div>
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>pdf</Button>}
      </ReactToPdf>
    </Layout>
  );
};

export default Home;
