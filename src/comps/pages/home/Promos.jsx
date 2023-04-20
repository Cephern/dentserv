import styles from "../../../styles/homePage/Promos.module.css";

import { useEffect, useState } from "react";

import { data } from "../../../context/promosData.jsx";

const setPosition = (positionArr) => {
  const result = {};
  if (positionArr[0] === "center") {
    result.top = "50%";
    result.left = "50%";
    result.transform = "translate(-50%, -50%)";
    return result;
  }

  if (positionArr[0]) result.top = positionArr[0];
  if (positionArr[1]) result.right = positionArr[1];
  if (positionArr[2]) result.bottom = positionArr[2];
  if (positionArr[3]) result.left = positionArr[3];

  return result;
};

function Promos() {
  const [promos, setPromos] = useState(data);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  const handleLeftArrowClick = () => {
    setAutoScroll(false);
    setIsFading(true);
    setTimeout(() => {
      if (currentPromo > 0) setCurrentPromo((prev) => prev - 1);
      if (currentPromo === 0) setCurrentPromo(promos.length - 1);
      setIsFading(false);
    }, 400);
  };

  const handleRightArrowClick = () => {
    setAutoScroll(false);
    setIsFading(true);
    setTimeout(() => {
      if (currentPromo < promos.length - 1) setCurrentPromo((prev) => prev + 1);
      if (currentPromo === promos.length - 1) setCurrentPromo(0);
      setIsFading(false);
    }, 400);
  };

  const handleManualChange = (id) => {
    setAutoScroll(false);
    if (id === currentPromo) return;

    setIsFading(true);
    setTimeout(() => {
      setCurrentPromo(id);
      setIsFading(false);
    }, 400);
  };

  useEffect(() => {
    let interval;
    if (autoScroll) {
      interval = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentPromo((prev) => {
            if (prev === promos.length - 1) {
              return 0;
            } else {
              return prev + 1;
            }
          });
          setIsFading(false);
        }, 400);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <div className={styles.Promos}>
      <div className={styles.slider}>
        <div className={styles.content}>
          <svg
            className={styles.left_arrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={handleLeftArrowClick}
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
          </svg>

          <svg
            className={styles.right_arrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={handleRightArrowClick}
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
          </svg>

          <div
            className={`${styles.promo} ${isFading ? styles.fading : ""}`}
            onClick={() => {
              setAutoScroll(false);
            }}
          >
            <img src={promos[currentPromo].promoPhoto} alt="Promo1" />

            <div
              className={styles.promo_text}
              style={{
                ...setPosition(promos[currentPromo].promoText.position),
              }}
            >
              <h3>Акция</h3>
              <h4>{promos[currentPromo].promoText.h4}</h4>
              <ul>
                {promos[currentPromo].promoText.ul.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>

              <div className={styles.btns}>
                <button>Подробнее</button>
                <button>Записаться на приём</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.counter}>
          {promos.map((promo) => (
            <div
              key={promo.id}
              className={`${styles.counterItem} ${
                promo.id === currentPromo ? styles.active : ""
              }`}
              style={{ width: `${100 / promos.length}%` }}
              onClick={() => handleManualChange(promo.id)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promos;
