import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TaxTip from "../components/TaxTip/TaxTip";
import YouTube from "../components/Youtube/YouTubeGallery";

const Home = () => {
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <HeroSlider />
      <TaxTip />
      <YouTube />
    </>
  );
};

export default Home;
