import React, { useRef } from "react";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";
import SectionThree from "../sectionThree/SectionThree";
import SectionFour from "../sectionFour/SectionFour";
// import style from "./horizontalPage.module.scss";

function HorizontalPage() {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);

  return (
    <HorizontalScroll>
      <SectionOne ref={sectionOne} />
      <SectionTwo ref={sectionTwo} />
      <SectionThree ref={sectionThree} />
      <SectionFour ref={sectionFour} />
    </HorizontalScroll>
  );
}

export default HorizontalPage;
