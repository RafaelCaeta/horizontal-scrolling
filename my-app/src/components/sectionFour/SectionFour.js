import clsx from "clsx";
import React from "react";
import style from "./sectionFour.module.scss";

function SectionFour({ className }) {
  return (
    <div className={clsx([className, style.slideFour])}>
      <h2>The Rescue Team</h2>

      <div className={clsx([style.rescueTeam, "on-scroll-animated"])}>
        <img src="/assets/stefan.png" alt="stefan" className={style.stefan} />
        <img src="/assets/roel.png" alt="roel" className={style.roel} />
        <img
          src="/assets/yelitza.png"
          alt="yelitza"
          className={style.yelitza}
        />
        <img src="/assets/dave.png" alt="dave" className={style.dave} />
      </div>
    </div>
  );
}

export default SectionFour;
