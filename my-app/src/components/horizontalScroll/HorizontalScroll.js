import React from "react";
import style from "./horizontalScroll.module.scss";

function HorizontalScroll({ children, totalWidth }) {
  return (
    <div className={style.outerWrapper}>
      <div className={style.innerWrapper} style={{ width: totalWidth }}>
        {children}
      </div>
    </div>
  );
}

export default HorizontalScroll;
