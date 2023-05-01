import styles from "../../../styles/homePage/Info.module.css";
import ClinicImgGallery from "./ClinicImgGallery";
import Ratings from "./Ratings";
import Reviews from "./Reviews";

function Info() {
  return (
    <div className={styles.Info}>
      <ClinicImgGallery />
      <div className={styles.wrapper}>
        <Reviews />
        <Ratings />
      </div>
    </div>
  );
}

export default Info;
