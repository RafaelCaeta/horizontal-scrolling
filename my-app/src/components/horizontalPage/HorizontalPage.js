import clsx from "clsx";
import React, { useRef, useEffect, useState } from "react";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";
import style from "./horizontalPage.module.scss";

function HorizontalPage() {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    if (
      sectionOne.current &&
      sectionTwo.current &&
      sectionThree.current &&
      sectionFour.current
    ) {
      const sectionWidth1 = sectionOne.current.clientWidth;
      const sectionWidth2 = sectionTwo.current.clientWidth;
      const sectionWidth3 = sectionThree.current.clientWidth;
      const sectionWidth4 = sectionFour.current.clientWidth;

      const totalWidth =
        sectionWidth1 + sectionWidth2 + sectionWidth3 + sectionWidth4;

      console.log("sectionOne", sectionOne);
      console.log("sectionWidth1", sectionWidth1);
      console.log("sectionWidth2", sectionWidth2);
      console.log("sectionWidth3", sectionWidth3);
      console.log("sectionWidth4", sectionWidth4);
      console.log("totalWidth", totalWidth);
      setTotalWidth(totalWidth);
    }
  }, [sectionOne, sectionTwo, sectionThree, sectionFour]);

  return (
    <HorizontalScroll totalWidth={totalWidth}>
      <div ref={sectionOne} className={clsx([style.slide, style.slideOne])}>
        <img src="/assets/bill.png" alt="bill" className={style.bill} />
        <h1>Devs Master</h1>
      </div>

      <div ref={sectionTwo} className={clsx([style.slide, style.slideTwo])}>
        <h2 className={style.bill}>The Dream Team</h2>

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

      <div ref={sectionThree} className={clsx([style.slide, style.slideThree])}>
        <h2 className={style.bill}>The Wizards</h2>

        <div className={style.wizards}>
          <img src="/assets/glenn.png" alt="glenn" className={style.glenn} />
          <img src="/assets/colin.png" alt="colin" className={style.colin} />
        </div>
      </div>

      <div ref={sectionFour} className={clsx([style.slide, style.slideFour])}>
        <h2>The Rescue Team</h2>

        <div className={style.rescueTeam}>
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
    </HorizontalScroll>
  );
}

export default HorizontalPage;
