import React from "react";
import style from "./horizontalScroll.module.scss";

function HorizontalScroll({ children }) {
  return (
    <div className={style.outerWrapper}>
      <div className={style.innerWrapper}>{children}</div>
    </div>
  );
}

export default HorizontalScroll;
