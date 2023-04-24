import styles from "../../../styles/homePage/Advantages.module.css";

import img0 from "../../../assets/photos/advantage0.png";
import img1 from "../../../assets/photos/advantage1.png";
import img2 from "../../../assets/photos/advantage2.png";
import img3 from "../../../assets/photos/advantage3.png";
import img4 from "../../../assets/photos/advantage4.png";

import { useEffect, useRef, useState } from "react";

const advantages = [
  {
    id: 0,
    text: "Только современное оборудование и сертифицированные материалы",
    photo: img0,
  },
  {
    id: 1,
    text: "Врачи с опытом от 5 лет, владеющие передовыми технологиями лечения",
    photo: img1,
  },
  {
    id: 2,
    text: "Доступные и понятные цены на услуги, бонусы постоянным клиентам",
    photo: img2,
  },
  { id: 3, text: "Красивое расположение клиники", photo: img3 },
  { id: 4, text: "Всегда довольные пациенты", photo: img4 },
];

function Advantages() {
  const [currentAdvantage, setCurrentAdvantage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdvantage((prev) => {
        if (prev < advantages.length - 1) return prev + 1;
        if (prev === advantages.length - 1) return 0;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.Advantages}>
      <h3>Преимущества нашей клиники</h3>
      <div className={styles.text}>
        <ul>
          {advantages.map((li, index) => (
            <li
              key={li.id}
              className={`${styles.li} ${
                currentAdvantage === index ? styles.active : ""
              }`}
            >
              {li.text}
            </li>
          ))}
        </ul>

        <button>Записаться на приём</button>
      </div>

      <div className={styles.imgs}>
        <div className={styles.imgsWrapper}>
          {advantages.map((advantage, index) => (
            <img
              src={advantage.photo}
              alt={`Advantage Photo ${index}`}
              className={`${styles.img} ${
                currentAdvantage === index ? styles.imgActive : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
