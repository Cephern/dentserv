import { useEffect, useRef, useState } from "react";
import introVideo from "../../../assets/videos/intro.mp4";

import styles from "../../../styles/homePage/introVideo.module.css";

function IntroVideo() {
  const videoRef = useRef(null);

  const handleClick = () => {
    videoRef.current.muted = false;
    videoRef.current.volume = 0.01;
  };

  return (
    <div className={styles.introVideo}>
      <div className={styles.dimmer}>
        <h2>Доктор Ливси</h2>
        <p>
          Центр <span className={styles.lightBlue}>Приватной</span> Стоматологии
          №1
        </p>
        <div className={styles.btnWrapper}>
          <button onClick={handleClick}>Поддать Фонка</button>
        </div>
      </div>

      <video ref={videoRef} autoPlay loop muted>
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default IntroVideo;
