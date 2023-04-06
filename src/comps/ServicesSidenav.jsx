import { useState } from "react";
import styles from "../styles/SecondaryNav.module.css";
import ImplantSidenav from "./ImplantSidenav";

const defaultSidenavStatus = {
  implant: true,
};

function ServicesSidenav({ isActive }) {
  const [sidenavActiveStatus, setSidenavActiveStatus] =
    useState(defaultSidenavStatus);

  const toggleSidenavStatus = (e) => {
    const sidenavToToggle = e.target.getAttribute("data-name");
    setSidenavActiveStatus((prev) => ({
      ...defaultSidenavStatus,
      [sidenavToToggle]: !sidenavActiveStatus[sidenavToToggle],
    }));
  };

  return (
    <ul className={`${styles.sidenav} ${isActive ? styles.active : ""}`}>
      <h3>Услуги</h3>
      <li
        className={sidenavActiveStatus.implant ? styles.secondaryActive : ""}
        data-name={"implant"}
        onClick={(e) => toggleSidenavStatus(e)}
      >
        Имплантация
        <ImplantSidenav isActive={sidenavActiveStatus.implant} />
      </li>
      <li>Протезы на Имплантах</li>
      <li>Протезирование зубов</li>
      <li>Хирургия</li>
      <li>ЛОР-стоматология</li>
      <li>Лечение зубов</li>
      <li>Пародонтология</li>
      <li>Ортодонтия</li>
      <li>Гнатология</li>
      <li>Косметология</li>
      <li>Детское отделение</li>
    </ul>
  );
}

export default ServicesSidenav;
