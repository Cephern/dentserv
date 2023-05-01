import styles from "../../../styles/homePage/Ratings.module.css";

import googleImg from "../../../assets/logos/google.png";
import proImg from "../../../assets/logos/pro.png";
import zoonImg from "../../../assets/logos/zoon.png";
import yandexImg from "../../../assets/logos/yandex.png";
import Stars from "./Stars";

const ratings = [
  {
    id: 0,
    logo: googleImg,
    rating: 4.9,
    rates: 44,
  },
  {
    id: 1,
    logo: proImg,
    rating: 4.8,
    rates: 12,
  },
  {
    id: 2,
    logo: zoonImg,
    rating: 4.5,
    rates: 60,
  },
  {
    id: 3,
    logo: yandexImg,
    rating: 4.4,
    rates: 188,
  },
];

function Ratings() {
  return (
    <div className={styles.Ratings}>
      {ratings.map((rating) => (
        <div key={rating.id} className={styles.rating}>
          <div className={styles.rates}>
            <Stars starsCount={rating.rating} />
            <p>
              <span>{rating.rating}</span> из 5
            </p>
          </div>

          <div className={styles.logo}>
            <img className={styles.img} src={rating.logo} alt="Google Logo" />
            <span className={styles.ratings}>44 отзыва</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ratings;
