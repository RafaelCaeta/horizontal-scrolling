import React from "react";
import style from "./sectionOne.module.scss";

function SectionOne({ children, totalWidth }) {
  return (
    <div className={style.outerWrapper}>
      <div className={style.innerWrapper} style={{ width: totalWidth }}>
        {children}
      </div>
    </div>
  );
}

export default SectionOne;
