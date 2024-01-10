// import React from 'react'

import { Helmet } from "react-helmet";

import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import { Header } from "../../components/header/header";
import MainContent from "../../components/main-content/mainContent";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ایران بیزینس کاپ</title>
      </Helmet>
      <Header />
      <MainContent />
      <Form />
      <Footer />
    </>
  );
};
export default Home;
