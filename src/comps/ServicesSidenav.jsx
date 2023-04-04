import "../styles/Sidenav.css";

function ServicesSidenav({ isActive }) {
  return (
    <ul className={`sidenav${isActive ? " active" : ""}`}>
      <h3>Услуги</h3>
      <li>Имплантация</li>
      <li>Протезы на Имплантах</li>
      <li>Протезирование зубов</li>
      <li>Хирургия</li>
      <li>ЛОР-стоматология</li>
      <li>Лечение зубов</li>
      <li>Пародонтология</li>
      <li>Ортодонтия</li>
      <li>Гнатология</li>
      <li>Косметология</li>
      <li>Детское отделение</li>
    </ul>
  );
}

export default ServicesSidenav;
