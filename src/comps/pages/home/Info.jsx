import styles from "../../../styles/homePage/Info.module.css";
import Advantages from "./Advantages";
import Ratings from "./Ratings";
import Results from "./Results";

function Info() {
  return (
    <div className={styles.Info}>
      <Advantages />
      <Ratings />
      <Results />
    </div>
  );
}

export default Info;
