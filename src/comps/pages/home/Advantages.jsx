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
    text: {
      first: "Только",
      emphasis: "современное",
      last: "оборудование и сертифицированные материалы",
    },
    photo: img0,
  },
  {
    id: 1,
    text: {
      first: "Врачи с",
      emphasis: "опытом",
      last: "от 5 лет, владеющие передовыми технологиями лечения",
    },
    photo: img1,
  },
  {
    id: 2,
    text: {
      first: "",
      emphasis: "Доступные и понятные",
      last: "цены на услуги, бонусы постоянным клиентам",
    },
    photo: img2,
  },
  {
    id: 3,
    text: {
      first: "",
      emphasis: "Красивое",
      last: "расположение клиники",
    },
    photo: img3,
  },
  {
    id: 4,
    text: {
      first: "Всегда",
      emphasis: "довольные",
      last: "пациенты",
    },
    photo: img4,
  },
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
      {advantages.map((advantage, index) => (
        <img
          src={advantage.photo}
          alt={`Advantage Photo ${advantage.id}`}
          key={advantage.id}
          className={`${styles.img} ${
            currentAdvantage === index ? styles.imgActive : ""
          }`}
        />
      ))}

      <div className={styles.textBox}>
        <p className={styles.text}>
          {`${advantages[currentAdvantage].text.first}`}{" "}
          <span
            className={styles.emphasis}
          >{`${advantages[currentAdvantage].text.emphasis}`}</span>{" "}
          {`${advantages[currentAdvantage].text.last}`}
        </p>
      </div>
    </div>
  );
}

export default Advantages;
