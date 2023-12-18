"use client";
import React, { useState, useEffect } from "react";
import Chat from "../component/Chat/Chat";
import QRcode from "../component/QRcode/QRcode";
import List from "../component/List/List";
import Footer from "../component/Footer/Footer";
import Content from "../component/Content/Content";

const Page = () => {
  const [scroll, setScroll] = useState({});

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);


  return (
    
    <div>
      <Content scroll={scroll} limit={500} />
      <Chat />
      <QRcode />
      <List />
      <Footer />
    </div>
  );
};

export default Page;
