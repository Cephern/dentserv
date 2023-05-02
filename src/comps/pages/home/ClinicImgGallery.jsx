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
import { useState } from "react";

const imgs = [
  {
    id: 0,
    img: img1,
    style: "wide",
  },
  {
    id: 1,
    img: img2,
    style: "tall",
  },
  {
    id: 2,
    img: img3,
    style: "",
  },
  {
    id: 3,
    img: img4,
    style: "",
  },
  {
    id: 4,
    img: img5,
    style: "tall",
  },
  {
    id: 5,
    img: img6,
    style: "wide",
  },
  {
    id: 6,
    img: img7,
    style: "",
  },
  {
    id: 7,
    img: img8,
    style: "",
  },
  {
    id: 8,
    img: img9,
    style: "tall",
  },
  {
    id: 9,
    img: img10,
    style: "",
  },
  {
    id: 10,
    img: img11,
    style: "",
  },
  {
    id: 11,
    img: img12,
    style: "wide",
  },
];

function ClinicImgGallery({ handleClick, handleClose }) {
  return (
    <div className={styles.ClinicImgGallery}>
      <div className={styles.gallery}>
        {imgs.map(({ id, style, img }) => (
          <div
            key={id}
            className={`${styles.imgHolder} ${styles[style]}`}
            onClick={() => handleClick(img)}
          >
            <img
              src={img}
              className={styles.img}
              alt={`Clinic image ${id + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClinicImgGallery;
