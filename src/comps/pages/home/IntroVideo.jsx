import { useEffect, useRef, useState } from "react";
import introVideo from "../../../assets/videos/intro.mp4";

import styles from "../../../styles/homePage/introVideo.module.css";

function IntroVideo() {
  const [currentVideoPercent, setCurrentVideoPercent] = useState(20);

  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoPercent(
        Math.ceil(
          (videoRef.current.currentTime * 100) / videoRef.current.duration
        )
      );
    }, 423);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.introVideo}>
      <div className={styles.dimmer}>
        <div className={styles.hero}>
          <h2>Дент Сервис</h2>
          <p>
            Центр <span className={styles.lightBlue}>Приватной</span>{" "}
            Стоматологии <span className={styles.lightBlue}>№1</span>{" "}
          </p>

          <div className={styles.btns}>
            <button>Подробнее о Нас</button>
            <button>Наши услуги</button>
          </div>
        </div>

        <div className={styles.videoProgressBar}>
          <div className={styles.progressWrapper}>
            <div
              className={styles.progressBar}
              style={{ width: `${currentVideoPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      <video ref={videoRef} autoPlay loop muted>
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default IntroVideo;
