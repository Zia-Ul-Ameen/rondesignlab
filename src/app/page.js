"use client";
import React, { useState, useEffect } from "react";
import MainSection from "./component/MainSection/MainSection";
import Video from "./component/Video/Video";
import TrustedBrands from "./component/TrustedBrands/TrustedBrands";
import Parralax1 from "./component/Parralax1/Parralax1";
import Content from "./component/Content/Content";
import PhotoFrames from "./component/PhotoFrames/PhotoFrames";
import ZoomInOutText from "./component/ZoomInOutText/ZoomInOutText";
import Cards from "./component/Cards/Cards";
import WhatsNext from "./component/WhatsNext/WhatsNext";
import ParallaxImage from "./component/ParallaxImage/ParallaxImage";
import BriefProposalContract from "./component/BriefProposalContract/BriefProposalContract ";
import Chat from "./component/Chat/Chat";
import QRcode from "./component/QRcode/QRcode";
import List from "./component/List/List";
import Footer from "./component/Footer/Footer";

export default function Home() {
  const [scroll, setScroll] = useState({});
  console.log(scroll);
  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <main>
      <MainSection />
      <Video />
      <TrustedBrands />
      <Parralax1 />
      <Content scroll={scroll} limit={3100} />
      <PhotoFrames />
      <ZoomInOutText />
      <Cards />
      <ParallaxImage />
      <WhatsNext />
      <BriefProposalContract scroll={scroll} prop1={10250} prop2={11015} />
      <Chat />
      <QRcode />
      <List />
      <Footer />
    </main>
  );
}
