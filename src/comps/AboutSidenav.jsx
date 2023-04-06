import styles from "../styles/SecondaryNav.module.css";

function AboutSidenav({ isActive }) {
  return (
    <ul className={`${styles.sidenav} ${isActive ? styles.active : ""}`}>
      <h3>О Центре</h3>
      <li>Принципы работы</li>
      <li>Пресса о нас</li>
      <li>№1 в рейтинге КоммерсантЪ</li>
      <li>Зуботехническая лаборатория</li>
      <li>Безопасность лечения зубов</li>
      <li>Преимущества нашего Центра</li>
      <li>Неудобства нашего Центра</li>
      <li>Правила обслуживания</li>
      <li>Направления деятельности</li>
      <li>Независимые консультации</li>
      <li>Взаимодействие с другими клиниками</li>
      <li>Вакансии</li>
    </ul>
  );
}

export default AboutSidenav;
