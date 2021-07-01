import React, { useRef, useEffect } from "react";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";
import SectionThree from "../sectionThree/SectionThree";
import SectionFour from "../sectionFour/SectionFour";
import style from "./horizontalPage.module.scss";

function HorizontalPage() {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);

  useEffect(() => {
    if (
      sectionOne.current &&
      sectionTwo.current &&
      sectionThree.current &&
      sectionFour.current
    ) {
      const width1 = sectionOne.current.getBoundingClientRect().width;
      const width2 = sectionTwo.current.getBoundingClientRect().width;
      const width3 = sectionThree.current.getBoundingClientRect().width;
      const width4 = sectionFour.current.getBoundingClientRect().width;
      const totalWidth = width1 + width2 + width3 + width4;

      const root = document.querySelector(":root");

      root.style.setProperty(
        "--horizontal-scroll-container-width",
        `${totalWidth}px`
      );
    }
  }, []);

  return (
    <HorizontalScroll>
      <div ref={sectionOne} className={style.sectionOne}>
        <SectionOne className={style.section} />
      </div>

      <div ref={sectionTwo} className={style.sectionTwo}>
        <SectionTwo className={style.section} />
      </div>

      <div ref={sectionThree} className={style.sectionThree}>
        <SectionThree className={style.section} />
      </div>

      <div ref={sectionFour} className={style.sectionFour}>
        <SectionFour className={style.section} />
      </div>
    </HorizontalScroll>
  );
}

export default HorizontalPage;
