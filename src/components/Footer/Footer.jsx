import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Logos and Socials */}
          <div className="footer-col">
            <div className="logos">
              <img
                src="/images/logo/logo1.png"
                alt="Logo 1"
                width="130"
                height="60"
              />
              <img
                src="/images/logo/logo2.png"
                alt="Logo 2"
                width="130"
                height="60"
              />
            </div>
            <div className="socials">
              <span className="follow-label">{t("footer.followUs")}</span>
              <a
                href="https://www.facebook.com/sospalestinefr68/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/images/Social-Media/facebook.png" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/sospalestine68/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/images/Social-Media/instagram.png" alt="Instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@sospalestine1"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/images/Social-Media/tik-tok.png" alt="TikTok" />
              </a>
              <a
                href="https://www.youtube.com/@sospalestine68"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/images/Social-Media/youtube.png" alt="youtube" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h5>{t("footer.contact")}</h5>
            <ul className="contact-list">
              <li>
                <i className="fa fa-map-marker-alt"></i>
                <a
                  href="https://www.google.com/maps?q=17,+avenue+Aristide+Briand+-+68200+Mulhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link">
                  {t("footer.address")}
                </a>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="contact-link">
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h5>{t("footer.newsletter.title")}</h5>
            <p>{t("footer.newsletter.description")}</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
              />
              <button type="submit">{t("footer.newsletter.button")}</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
