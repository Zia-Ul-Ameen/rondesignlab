"use client";
import React from "react";
import s from "./MainSection.module.css";
import { Fade } from "react-awesome-reveal";

const MainSection = () => {
  return (
    <div className={`${s.wrapper}`}>
      <div className={s.para1Wrapper}>
        <div className={s.para1Flex}>
          Let us <div className={s.image}></div> show
        </div>
        <div className={s.marginTopYourStrength}>your strengths</div>
      </div>
      <div className={s.para2Wrapper}>
        We attract digital experts to raise investments
        <div> and strengthen your team</div>
      </div>
    </div>
  );
};

export default MainSection;
