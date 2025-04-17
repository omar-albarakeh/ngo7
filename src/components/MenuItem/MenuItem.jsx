import React from "react";
import "./MenuItem.css";
import { useTranslation } from "react-i18next";
import CustomButton from "../NavBar/customButton/customButton";

const MenuItem = ({ image, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-image" />
      <div className="menu-content">
        <h3 className="menu-title">{title}</h3>
        <p className="menu-subtitle">{subtitle}</p>
        <CustomButton title={buttonText} to={buttonLink} />{" "}
        {/* Use CustomButton here */}
      </div>
    </div>
  );
};

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      image: "/images/MenuItem/slide1.jpg",
      title: t("menu.aidAlAdha.title"),
      subtitle: t("menu.aidAlAdha.subtitle"),
      buttonText: t("menu.learnMore"),
      buttonLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide2.jpg",
      title: t("menu.sosGaza.title"),
      subtitle: t("menu.sosGaza.subtitle"),
      buttonText: t("menu.learnMore"),
      buttonLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide3.jpg",
      title: t("menu.zakatAlMaal.title"),
      subtitle: t("menu.zakatAlMaal.subtitle"),
      buttonText: t("menu.learnMore"),
      buttonLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide4.jpg",
      title: t("menu.rafahEmergency.title"),
      subtitle: t("menu.rafahEmergency.subtitle"),
      buttonText: t("menu.learnMore"),
      buttonLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide5.jpg",
      title: t("menu.orphanSponsorship.title"),
      subtitle: t("menu.orphanSponsorship.subtitle"),
      buttonText: t("menu.learnMore"),
      buttonLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide6.jpg",
      title: t("menu.waterForGaza.title"),
      subtitle: t("menu.waterForGaza.subtitle"),
      buttonText: t("menu.learnMore"),
      buttonLink: "/donation",
    },
  ];

  return (
    <>
      <h1 className="menu-heading">{t("menu.heading")}</h1>
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
