// import React from 'react'

import { Helmet } from "react-helmet";

import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import { Header } from "../../components/header/header";
import MainContent from "../../components/main-content/mainContent";
import RewardPart from "../../components/reward-part/rewardPart";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <MainContent />
      <RewardPart />
      <Form />
      <Footer />
    </>
  );
};
export default Home;
