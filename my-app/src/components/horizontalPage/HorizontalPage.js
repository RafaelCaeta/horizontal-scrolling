import React, { useRef, useEffect } from "react";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";
import SectionThree from "../sectionThree/SectionThree";
import SectionFour from "../sectionFour/SectionFour";
import SectionFive from "../sectionFive/SectionFive";
import debounce from "../../utils/debounce";
import style from "./horizontalPage.module.scss";

function HorizontalPage() {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);
  const sectionFive = useRef(null);
  const sectionSix = useRef(null);

  const debounceResize = debounce(updateHztScrollContainerWidth, 400);

  useEffect(() => {
    updateHztScrollContainerWidth();
    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined" && "IntersectionObserver" in window) {
      const animatedSections = document.querySelectorAll(".on-scroll-animated");

      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // let hasIntersected = false;
            // console.log("hasIntersected", hasIntersected);
            if (entry.isIntersecting) {
              entry.target.classList.add("animation-1");
            }
            // hasIntersected = true;
            // } else if (hasIntersected) {
            //   entry.target.classList.add("animation-2");
            // }
          });
        },
        { threshold: 0.5 }
      );

      animatedSections.forEach((section) => {
        observer.observe(section);
      });
    }
  }, []);

  function getSectionsTotalWidth(sections) {
    if (Array.isArray(sections) && sections.length > 0) {
      return sections
        .map((section) => section.current.getBoundingClientRect().width)
        .reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  function updateHztScrollContainerWidth() {
    const totalWidth = getSectionsTotalWidth([
      sectionOne,
      sectionTwo,
      sectionThree,
      sectionFour,
      sectionFive,
      sectionSix,
    ]);

    if (totalWidth) {
      const root = document.querySelector(":root");
      root.style.setProperty(
        "--horizontal-scroll-container-width",
        `${totalWidth}px`
      );
    }
  }

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

      <div ref={sectionSix} className={style.sectionSix}>
        <SectionThree className={style.section} />
      </div>
    </HorizontalScroll>
  );
}

export default HorizontalPage;
