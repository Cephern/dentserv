import styles from "../../../styles/homePage/Info.module.css";
import ClinicImgGallery from "./ClinicImgGallery";
import Ratings from "./Ratings";
import Reviews from "./Reviews";

import { useState } from "react";

function Info() {
  const [activeImg, setActiveImg] = useState(null);
  const [imgIsActive, setImgIsActive] = useState(false);

  const handleClick = (img) => {
    setActiveImg(img);
    setImgIsActive(true);
  };

  const handleClose = () => {
    setImgIsActive(false);
    setActiveImg(null);
  };

  return (
    <div className={styles.Info}>
      <div
        className={`${styles.fullscreenImg} ${
          imgIsActive ? styles.active : ""
        }`}
      >
        <img src={activeImg} alt="Hi" />
        <span className={styles.cross} onClick={handleClose}>
          x
        </span>
      </div>
      <ClinicImgGallery handleClick={handleClick} handleClose={handleClose} />
      <div className={styles.wrapper}>
        <Reviews />
        <Ratings />
      </div>
    </div>
  );
}

export default Info;
