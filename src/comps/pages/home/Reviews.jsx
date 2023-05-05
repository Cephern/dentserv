import styles from "../../../styles/homePage/Reviews.module.css";
import Stars from "./Stars";

const reviews = [
  {
    id: 0,
    headerText: "Хорошая стоматология, рекомендую",
    headerRating: 5,
    headerDate: "20.04.2023",
    reviewText:
      "Привозил сына 5 лет, вчера на удаление молочного зуба. Попали к Татьяне. Удалила зуб быстро, отвлекала ребенка разговорами. Все прошло хорошо, без слез и стресса. Спасибо =)",
  },
  {
    id: 1,
    headerText: "Очень понравилась клиника",
    headerRating: 4,
    headerDate: "19.04.2023",
    reviewText:
      "Очень понравилась клиника! Консультировал доктор Савин, все мне рассказал, озвучил стоимость решения моих проблем с зубами и даже сделал скидку! Поставил 4 коронки, лучше своих зубов!!!! Спасибо! Семенкин Е.Д.",
  },
];

function Reviews() {
  return (
    <div className={styles.Reviews}>
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <div className={styles.header}>
            <div className={styles.headerText}>{review.headerText}</div>
            <div className={styles.headerRating}>
              <Stars starsCount={review.headerRating} />
              <div className={styles.date}>{review.headerDate}</div>
            </div>
          </div>

          <div className={styles.reviewText}>
            {review.reviewText.length > 140
              ? review.reviewText.slice(0, 120) + "..."
              : review.reviewText}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
