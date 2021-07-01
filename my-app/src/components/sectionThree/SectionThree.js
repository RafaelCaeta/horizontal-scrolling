import clsx from "clsx";
import React from "react";
import style from "./sectionThree.module.scss";

function SectionThree() {
  return (
    <div className={clsx([style.slide, style.slideThree])}>
      <h2 className={style.bill}>The Wizards</h2>

      <div className={style.wizards}>
        <img src="/assets/glenn.png" alt="glenn" className={style.glenn} />
        <img src="/assets/colin.png" alt="colin" className={style.colin} />
      </div>
    </div>
  );
}

export default SectionThree;
