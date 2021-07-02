import React, { useRef, useEffect } from "react";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";
import SectionThree from "../sectionThree/SectionThree";
import SectionFour from "../sectionFour/SectionFour";
import SectionFive from "../sectionFive/SectionFive";
import style from "./horizontalPage.module.scss";

function HorizontalPage() {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);
  const sectionFive = useRef(null);

  useEffect(() => {
    const sections = [
      sectionOne.current,
      sectionTwo.current,
      sectionThree.current,
      sectionFour.current,
      sectionFive.current,
    ];

    const totalWidth = sections
      .map((section) => section.getBoundingClientRect().width)
      .reduce((a, b) => a + b);

    const root = document.querySelector(":root");
    root.style.setProperty(
      "--horizontal-scroll-container-width",
      `${totalWidth}px`
    );
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined" && "IntersectionObserver" in window) {
      const animatedSections = document.querySelectorAll(".on-scroll-animated");

      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(-100px)";
          } else {
            entry.target.style.transform = "translateY(0)";
          }
        });
      });

      animatedSections.forEach((section) => {
        observer.observe(section);
      });
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

      <div ref={sectionFive} className={style.sectionFive}>
        <SectionFive className={style.section} />
      </div>
    </HorizontalScroll>
  );
}

export default HorizontalPage;
