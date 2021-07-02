import clsx from "clsx";
import React from "react";
import style from "./sectionTwo.module.scss";

function SectionTwo({ className }) {
  return (
    <div className={clsx([className, style.slideTwo])}>
      <h2>The Dream Team</h2>

      <div className={style.outerWrapper}>
        <div className={style.leftWrapper}>
          <div className={style.frontenders}>
            <img
              src="/assets/tristan.png"
              alt="tristan"
              className={style.tristan}
            />
            <img src="/assets/rafa.png" alt="rafa" className={style.rafa} />
          </div>

          <img src="/assets/renzo.png" alt="renzo" className={style.renzo} />
        </div>

        <div className={style.textWrapper}>
          <p>
            This is just some placeholder text. There is nothing here that will
            increase your knowledge or contribute to your happiness. So... why
            are you still reading this? Lorem impsum lore ipsum badjoras.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
