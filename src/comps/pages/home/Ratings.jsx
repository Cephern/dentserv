import styles from "../../../styles/homePage/Ratings.module.css";

import googleImg from "../../../assets/logos/google.png";
import proImg from "../../../assets/logos/pro.svg";
import zoonImg from "../../../assets/logos/zoon.png";
import yandexImg from "../../../assets/logos/yandex.png";
import Stars from "./Stars";

const ratings = {
  google: 4.9,
  pro: 4.4,
  zoon: 4.5,
  yandex: 4.4,
};

function Ratings() {
  return (
    <div className={styles.Ratings}>
      <div className={styles.googleRating}>
        <div className={styles.rating}>
          <Stars starsCount={ratings.google} />
          <p>
            <span>{ratings.google}</span> из 5
          </p>
        </div>

        <div className={styles.logo}>
          <img className={styles.img} src={googleImg} alt="Google Logo" />
          <span className={styles.ratings}>44 отзыва</span>
        </div>
      </div>

      <div className={styles.proRating}>
        <div className={styles.rating}>
          <Stars starsCount={ratings.pro} />
        </div>

        <div className={styles.logo}>
          <img className={styles.img} src={proImg} alt="ProDoctorov Logo" />
        </div>
      </div>

      <div className={styles.zoonRating}>
        <div className={styles.rating}>
          <Stars starsCount={ratings.zoon} />
        </div>

        <div className={styles.logo}>
          <img className={styles.img} src={zoonImg} alt="Zoon Logo" />
        </div>
      </div>

      <div className={styles.yandexRating}>
        <div className={styles.rating}>
          <Stars starsCount={ratings.yandex} />
          <p>
            <span>{ratings.yandex}</span> из 5
          </p>
        </div>

        <div className={styles.logo}>
          <img className={styles.img} src={yandexImg} alt="Yandex Logo" />
          <span className={styles.ratings}>188 отзывов</span>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
