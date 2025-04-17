import React from "react";
import TopInfoBar from "../../components/TopInfo/TopBar";
import MyNavBar from "../../components/NavBar/MyNavBar/MyNavBar";
import CharityQuote from "../../components/CharityQuote/CharityQuote";
import Footer from "../../components/Footer/Footer";
import BottomBar from "../../components/BottomBar/BottomBar";
import ContactForm from "./ContactForm";
import BackToTop from "../../components/BackToTopButton/BackToTop";

const Contact = () => {
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <ContactForm />
      <CharityQuote />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Contact;
