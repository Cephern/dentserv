import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/homePage/Home.module.css";
import IntroVideo from "./IntroVideo";
import Promos from "./Promos";
import Info from "./Info";
import Doctors from "./Doctors";

function Home() {
  return (
    <div className={styles.Home}>
      <IntroVideo />
      <Promos />
      <Doctors />
      <Info />
    </div>
  );
}

export default Home;
