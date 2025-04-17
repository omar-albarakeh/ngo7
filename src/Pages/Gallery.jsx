import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import BacktoTop from "../components/BackToTopButton/BackToTop";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import { useTranslation } from "react-i18next";
import Projects from "../components/Gallery/GalleryComponent";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <Projects />
      <BacktoTop />
      <BottomBar />
      <div id="footer-trigger" style={{ height: "0.01px" }}></div>
      <Footer />
    </>
  );
};

export default Home;
