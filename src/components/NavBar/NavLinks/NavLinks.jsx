import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "react-i18next";
import CustomButton from "../customButton/customButton";
import "./NavLinks.css";

const NavLinks = ({
  isMobile,
  menuOpen,
  activeDropdown,
  setActiveDropdown,
  handleDropdown,
  closeMenu,
}) => {
  const { t } = useTranslation();

  const dropdownItems = {
    services: [
      { path: "/sos-gaza", label: t("nav.services.sosGaza") },
      { path: "/zakat-al-maal", label: t("nav.services.zakatAlMaal") },
      { path: "/ramadan-2025", label: t("nav.services.ramadan2025") },
      { path: "/rafah-emergency", label: t("nav.services.rafahEmergency") },
      { path: "/aid-al-adha", label: t("nav.services.aidAlAdha") },
      {
        path: "/orphan-sponsorship",
        label: t("nav.services.orphanSponsorship"),
      },
      { path: "/water-for-gaza", label: t("nav.services.waterForGaza") },
      { path: "/ramadan-donations", label: t("nav.services.ramadanDonations") },
    ],
    whoWeAre: [
      { path: "/Whoweare", label: t("nav.whoWeAre.whoAreWe") },
      { path: "/history", label: t("nav.whoWeAre.history") },
    ],
  };

  return (
    <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
      <DropdownMenu
        label={t("nav.ourServices")}
        name="services"
        items={dropdownItems.services}
        isMobile={isMobile}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        handleDropdown={handleDropdown}
        closeMenu={closeMenu}
      />

      <DropdownMenu
        label={t("nav.whoWeAre.title")}
        name="whoWeAre"
        items={dropdownItems.whoWeAre}
        isMobile={isMobile}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        handleDropdown={handleDropdown}
        closeMenu={closeMenu}
      />

      <Link to="/gallery" onClick={closeMenu}>
        {t("nav.gallery")}
      </Link>
      <Link
        to="/Contact
      "
        onClick={closeMenu}>
        {t("nav.contactUs")}
      </Link>
      <CustomButton titleKey="nav.donateNow" to="/donation" />
    </nav>
  );
};

export default NavLinks;
