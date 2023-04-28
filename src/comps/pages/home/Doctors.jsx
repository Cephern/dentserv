import styles from "../../../styles/homePage/Doctors.module.css";
import doc from "../../../assets/doctors/doc7.png";

function Doctors() {
  return (
    <div className={styles.Doctors}>
      <div className={styles.info}>
        <div className={styles.credentials}>
          <div className={styles.name}>
            <p>Степовой</p>
            <p>Иван Николаевич</p>
          </div>
          <p className={styles.occupation}>
            Стоматолог - <span className={styles.colorOrtho}>ортопед</span>,{" "}
            <span className={styles.colorImplant}>имплантолог</span>
          </p>
          <p className={styles.exp}>Cтаж - 15 лет</p>
        </div>

        <p className={styles.specialisation}>Специализация</p>

        <ul className={styles.specialisationUl}>
          <li>Протезирование зубов</li>
          <li>Стоматологические виниры</li>
          <li>Композитная реставрация зубов</li>
          <li>Эстетическая реставрация зубов</li>
          <li>Реставрация зубов</li>
          <li>Удаление зуба мудрости</li>
        </ul>

        <button className={styles.btn}>Подробнее</button>
      </div>
      <div className={styles.imgWrapper}>
        <img src={doc} alt="Степовой Иван Николаевич" />
      </div>
    </div>
  );
}

export default Doctors;
