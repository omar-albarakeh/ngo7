import React from "react";
import "./TopBar.css";
import { useTranslation } from "react-i18next";

const TopInfoBar = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: "fas fa-map-marker-alt",
      content: (
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(
            t("footer.address")
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="top-contact-link">
          {t("nav.address")}
        </a>
      ),
    },
    {
      icon: "fas fa-envelope",
      content: (
        <a href={`mailto:${t("footer.email")}`} className="top-contact-link">
          {t("nav.email")}
        </a>
      ),
    },
    {
      icon: "fas fa-phone",
      content: (
        <>
          <a href={`tel:${t("nav.phone1")}`} className="top-contact-link">
            {t("nav.phone1")}
          </a>
          <span className="separator"> / </span>
          <a href={`tel:${t("nav.phone2")}`} className="top-contact-link">
            {t("nav.phone2")}
          </a>
          <span className="separator"> / </span>
          <a href={`tel:${t("nav.phone3")}`} className="top-contact-link">
            {t("nav.phone3")}
          </a>
        </>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/sospalestinefr68/",
      icon: "/images/Social-Media/facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sospalestine68/",
      icon: "/images/Social-Media/instagram.png",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@sospalestine1",
      icon: "/images/Social-Media/tik-tok.png",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@sospalestine68?si=9gQftfQfbCE4ROI_",
      icon: "/images/Social-Media/youtube.png",
    },
  ];

  return (
    <div className="top-bar">
      <div className="top-contact-info">
        {contactItems.map((item, index) => (
          <div key={index} className="top-contact-item">
            <i className={item.icon}></i>
            {item.content}
          </div>
        ))}
      </div>

      <div className="top-social-links">
        <span className="top-follow-label">{t("nav.follow-us")}</span>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="top-social-link"
            aria-label={social.name}>
            <img
              src={social.icon}
              alt={social.name}
              className="top-icon"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopInfoBar;
