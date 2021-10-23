import React from "react";
import { Box, Grid, Button, TextField } from "@material-ui/core";

import Header from "../../components/Header/Header.component";
import Navigation from "../../components/Navigation/Navigation.component";
import Layout from "../../hoc/Layout/Layout.container";
import ProtestCard from "../../components/CustomCard/Card1/Card1.component";

const Home = (props) => {
  const [authOpen, setAuthOpen] = React.useState(false);

  const onAuthClose = () => {
    setAuthOpen(false);
  };

  return (
    <Layout>
      <Navigation />
      <Header />
    </Layout>
  );
};

export default Home;
