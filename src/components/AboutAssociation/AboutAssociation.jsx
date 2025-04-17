import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutAssociation.css";

const AboutAssociation = () => {
  const { t } = useTranslation();

  return (
    <section className="about-container">
      <h2 className="about-title">
        {t("about.title")} <span>{t("about.name")}</span>
      </h2>

      <blockquote className="about-quote">{t("about.quote")}</blockquote>

      <div className="about-content">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p>{t("about.p3")}</p>
        <p>{t("about.p4")}</p>
        <p>{t("about.p5")}</p>
        <p className="about-conclusion">{t("about.conclusion")}</p>
      </div>
    </section>
  );
};

export default AboutAssociation;
