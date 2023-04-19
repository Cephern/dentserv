import styles from "../../../styles/homePage/Promos.module.css";

import promo0 from "../../../assets/photos/promo0.png";
import promo1 from "../../../assets/photos/promo1.png";
import promo2 from "../../../assets/photos/promo2.png";
import promo3 from "../../../assets/photos/promo3.png";
import promo4 from "../../../assets/photos/promo4.png";
import { useState } from "react";

const setPosition = (positionArr) => {
  const result = {};
  if (positionArr[0]) result.top = positionArr[0];
  if (positionArr[1]) result.right = positionArr[1];
  if (positionArr[2]) result.bottom = positionArr[2];
  if (positionArr[3]) result.left = positionArr[3];

  return result;
};

function Promos() {
  const [promos, setPromos] = useState([
    {
      id: 0,
      promoPhoto: promo0,
      promoText: {
        h4: "Приходите с Пн по Вск и заплатите всего 100% стоимости услуг!",
        ul: [
          "Доступно круглый год",
          "Возможна предоплата",
          "Записывайтесь уже сегодня",
        ],
        position: [null, "10%", "20%", null], // top, right, bottom, left
      },
    },
    {
      id: 1,
      promoPhoto: promo1,
      promoText: {
        h4: "Приходите с Пн по Вск и заплатите всего 100% стоимости услуг!",
        ul: [
          "Доступно круглый год",
          "Возможна предоплата",
          "Записывайтесь уже сегодня",
        ],
        position: [null, "10%", "20%", null], // top, right, bottom, left
      },
    },
    {
      id: 2,
      promoPhoto: promo2,
      promoText: {
        h4: "Приходите с Пн по Вск и заплатите всего 100% стоимости услуг!",
        ul: [
          "Доступно круглый год",
          "Возможна предоплата",
          "Записывайтесь уже сегодня",
        ],
        position: [null, "10%", "20%", null], // top, right, bottom, left
      },
    },
    {
      id: 3,
      promoPhoto: promo3,
      promoText: {
        h4: "Приходите с Пн по Вск и заплатите всего 100% стоимости услуг!",
        ul: [
          "Доступно круглый год",
          "Возможна предоплата",
          "Записывайтесь уже сегодня",
        ],
        position: [null, "10%", "20%", null], // top, right, bottom, left
      },
    },
    {
      id: 4,
      promoPhoto: promo4,
      promoText: {
        h4: "Приходите с Пн по Вск и заплатите всего 100% стоимости услуг!",
        ul: [
          "Доступно круглый год",
          "Возможна предоплата",
          "Записывайтесь уже сегодня",
        ],
        position: [null, "10%", "20%", null], // top, right, bottom, left
      },
    },
  ]);

  const [currentPromo, setCurrentPromo] = useState(1);

  const handleLeftArrowClick = () => {
    if (currentPromo > 0) return setCurrentPromo((prev) => prev - 1);
    if (currentPromo === 0) return setCurrentPromo(promos.length - 1);
  };

  const handleRightArrowClick = () => {
    if (currentPromo < promos.length - 1)
      return setCurrentPromo((prev) => prev + 1);
    if (currentPromo === promos.length - 1) return setCurrentPromo(0);
  };

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

          <img src={promos[currentPromo].promoPhoto} alt="Promo1" />

          <svg
            className={styles.right_arrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={handleRightArrowClick}
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
          </svg>

          <div
            className={styles.promo_text}
            style={{ ...setPosition(promos[currentPromo].promoText.position) }}
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

        <div className={styles.counter}>
          {promos.map((promo) => (
            <div
              key={promo.id}
              className={`${styles.counterItem} ${
                promo.id === currentPromo ? styles.active : ""
              }`}
              style={{ width: `${100 / promos.length}%` }}
              onClick={() => setCurrentPromo(promo.id)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promos;
