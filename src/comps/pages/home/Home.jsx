import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/homePage/Home.module.css";
import IntroVideo from "./IntroVideo";
import Promos from "./Promos";

function Home() {
  return (
    <div className="Home">
      <IntroVideo />
      <Promos />
    </div>
  );
}

export default Home;
