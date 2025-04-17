import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import BacktoTop from "../components/BackToTopButton/BackToTop";
import CharityQuote from "../components/CharityQuote/CharityQuote";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import Parallelscreen from "../components/parallelscreen/Donate";
import { useTranslation } from "react-i18next";
import FeatureSection2 from "../components/FeatureSectionB/FeatureSectionB";
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <Parallelscreen
        backgroundImage="/images/parallelscreen/Parallel2.jpg"
        heading={t("donate.heading")}
        text={t("donate.text")}
        buttonTitle={t("donate.button")}
        buttonLink="/donation"
      />
      <FeatureSection2 />
      <CharityQuote />
      <BacktoTop />
      <BottomBar />
      <div id="footer-trigger" style={{ height: "0.01px" }}></div>
      <Footer />
    </>
  );
};

export default Home;
