import styles from "../../../styles/homePage/Info.module.css";
import Advantages from "./Advantages";
import Ratings from "./Ratings";
import Reviews from "./Reviews";

function Info() {
  return (
    <div className={styles.Info}>
      <Advantages />
      <Ratings />
      <Reviews />
    </div>
  );
}

export default Info;
