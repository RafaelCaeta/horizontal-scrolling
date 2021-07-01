import clsx from "clsx";
import React from "react";
import style from "./sectionOne.module.scss";

function SectionOne() {
  return (
    <div className={clsx([style.slide, style.slideOne])}>
      <img src="/assets/bill.png" alt="bill" className={style.bill} />
      <h1>Devs Master</h1>
    </div>
  );
}

export default SectionOne;
