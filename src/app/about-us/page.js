"use client";
import React, { useState, useEffect } from "react";
import ZoomInOutText from "../component/ZoomInOutText/ZoomInOutText";
import Cards from "../component/Cards/Cards";
import BriefProposalContract from "../component/BriefProposalContract/BriefProposalContract ";
import Chat from "../component/Chat/Chat";
import QRcode from "../component/QRcode/QRcode";
import List from "../component/List/List";
import Footer from "../component/Footer/Footer";

const page = () => {
  const [scroll, setScroll] = useState({});
  console.log(scroll);
  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div>
      <BriefProposalContract scroll={scroll} prop1={360} prop2={1080} />
      <ZoomInOutText />
      <Cards />
      <Chat />
      <QRcode />
      <List />
      <Footer />
    </div>
  );
};

export default page;
