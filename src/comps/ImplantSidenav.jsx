import styles from "../styles/SecondarySubNav.module.css";

function ImplantSidenav({ isActive }) {
  return (
    <ul className={`${styles.implantSidenav} ${isActive ? styles.active : ""}`}>
      <h3>Имплантация</h3>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
  );
}

export default ImplantSidenav;
