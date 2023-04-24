import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/homePage/Home.module.css";
import IntroVideo from "./IntroVideo";
import Promos from "./Promos";
import Info from "./Info";

function Home() {
  return (
    <div className={styles.Home}>
      <IntroVideo />
      <Promos />
      <Info />
    </div>
  );
}

export default Home;
