import React from "react";

import styles from "../../../styles/homePage/Ratings.module.css";
import starImg from "../../../assets/logos/star.png";
import starFilledImg from "../../../assets/logos/starFilled.png";

const makeStars = (starsCount = 5) => {
  const starsArr = [];

  const filledStarsCount = Math.round(starsCount);
  const hollowStarsCount = Math.ceil(5 - filledStarsCount);

  for (let i = 0; i < filledStarsCount; i++) {
    starsArr.push(<img src={starFilledImg} alt="Full Star"></img>);
  }

  for (let i = 0; i < hollowStarsCount; i++) {
    starsArr.push(<img src={starImg} alt="Hollow Star"></img>);
  }

  return starsArr;
};

function Stars({ starsCount }) {
  return (
    <div className={styles.stars}>
      {makeStars(starsCount).map((star) => (
        <React.Fragment key={Math.random()}>{star}</React.Fragment>
      ))}
    </div>
  );
}

export default Stars;
