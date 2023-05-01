import styles from "../../../styles/homePage/ClinicImgGallery.module.css";

import img1 from "../../../assets/clinicImgs/img1.jpg";
import img2 from "../../../assets/clinicImgs/img2.jpg";
import img3 from "../../../assets/clinicImgs/img3.jpg";
import img4 from "../../../assets/clinicImgs/img4.jpg";
import img5 from "../../../assets/clinicImgs/img5.jpg";
import img6 from "../../../assets/clinicImgs/img6.jpg";
import img7 from "../../../assets/clinicImgs/img7.jpg";
import img8 from "../../../assets/clinicImgs/img8.jpg";
import img9 from "../../../assets/clinicImgs/img9.jpg";
import img10 from "../../../assets/clinicImgs/img10.jpg";
import img11 from "../../../assets/clinicImgs/img11.jpg";
import img12 from "../../../assets/clinicImgs/img12.jpg";

function ClinicImgGallery() {
  return (
    <div className={styles.ClinicImgGallery}>
      <div className={styles.gallery}>
        <div className={`${styles.imgHolder} ${styles.wide}`}>
          <img src={img1} alt="1" className={styles.img} />
        </div>

        <div className={`${styles.imgHolder} ${styles.tall}`}>
          <img src={img2} alt="2" className={styles.img} />
        </div>

        <div className={styles.imgHolder}>
          <img src={img3} alt="3" className={styles.img} />
        </div>

        <div className={styles.imgHolder}>
          <img src={img4} alt="4" className={styles.img} />
        </div>

        <div className={`${styles.imgHolder} ${styles.tall}`}>
          <img src={img5} alt="5" className={styles.img} />
        </div>

        <div className={`${styles.imgHolder} ${styles.wide}`}>
          <img src={img6} alt="6" className={styles.img} />
        </div>

        <div className={styles.imgHolder}>
          <img src={img7} alt="7" className={styles.img} />
        </div>

        <div className={styles.imgHolder}>
          <img src={img8} alt="8" className={styles.img} />
        </div>

        <div className={`${styles.imgHolder} ${styles.tall}`}>
          <img src={img9} alt="9" className={styles.img} />
        </div>

        <div className={styles.imgHolder}>
          <img src={img10} alt="10" className={styles.img} />
        </div>

        <div className={styles.imgHolder}>
          <img src={img11} alt="11" className={styles.img} />
        </div>

        <div className={`${styles.imgHolder} ${styles.wide} `}>
          <img src={img12} alt="12" className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default ClinicImgGallery;
