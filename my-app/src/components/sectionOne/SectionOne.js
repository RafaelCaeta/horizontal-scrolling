import clsx from "clsx";
import React from "react";
import style from "./sectionOne.module.scss";

function SectionOne({ className }) {
  return (
    <div className={clsx([className, style.slideOne])}>
      <img src="/assets/bill.png" alt="bill" className={style.bill} />
      <h1>Lord of this World</h1>
    </div>
  );
}

export default SectionOne;
