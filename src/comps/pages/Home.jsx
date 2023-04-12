import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home.module.css";

import introVideo from "../../assets/videos/intro.mp4";

function Home() {
  const videoRef = useRef(null);

  const handleClick = () => {
    videoRef.current.muted = false;
    videoRef.current.volume = 0.01;
  };

  return (
    <div className="Home">
      <div className={styles.introVideo}>
        <div className={styles.dimmer}>
          <h2>Доктор Ливси</h2>
          <p>
            Центр <span className={styles.lightBlue}>Приватной</span>{" "}
            Стоматологии №1
          </p>
          <div className={styles.btnWrapper}>
            <button onClick={handleClick}>Навалить Фонка</button>
          </div>
        </div>

        <video ref={videoRef} autoPlay loop muted>
          <source src={introVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
