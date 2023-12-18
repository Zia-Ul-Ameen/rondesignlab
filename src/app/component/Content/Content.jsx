import React from "react";
import s from "./Conten.module.css";

const Content = ({scroll, limit}) => {

  return (
    <div className={`wrapper ${s.wrapper}`}>
      <div className={`imageLoop ${s.imageLoop}`}>
        {scroll > limit ? (<img
          src="https://framerusercontent.com/images/7HgDcYfDenGWzRCIdBnuhvRTJkU.jpg?scale-down-to=512"
          className={s.bgImage}
        />) : (<img
          src="/img5.webp"
          className={s.bgImage}
        />)}
      </div>

      <div className={`contentWrap ${s.contentWrap}`}>
         <div className={s.content1}>
        <h3 className={s.title}>Team Extension</h3>
        <p className={s.text}>
          <span className={s.bolder}>Hire a cohesive team.</span> A team that is
          integrated into your process and{" "}
          <span className={s.bolder}>offers practical solutions</span> aligned
          with your priorities and goals.
        </p>
        <div className={s.mulletWrapper}>
          <span className={s.mullets}>Staff Augmentation</span>
          <span className={s.mullets}>Consulting</span>
          <span className={s.mullets}>Outstaff</span>
        </div>
        </div>
        <div className={s.restImage}>
        <img
          src="https://framerusercontent.com/images/7HgDcYfDenGWzRCIdBnuhvRTJkU.jpg?scale-down-to=512"
          className={s.restBgImage}
        />
        </div>
    <div className={s.content2}>
        <h3 className={s.title2}>UX Architect & CX Design
</h3>
        <p className={s.text}>
        Besides complex architectural solutions, you get a personalized approach to  
          <span className={s.bolder}> enhance user experience,</span> helping you achieve business goals of the brand.
        </p>
        <div className={s.mulletWrapper}>
          <span className={s.mullets}>Discovery</span>
          <span className={s.mullets}>Analysis</span>
          <span className={s.mullets}>Research</span>
        </div>
    </div>
      </div>
    </div>

    
  );
};

export default Content;
